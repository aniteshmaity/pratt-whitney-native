import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

const PDFThumbnail = ({ pdfFile, visible = true, style = {} }) => {
  const [pdfBase64, setPdfBase64] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPDF = async () => {
      if (!pdfFile || !visible) {
        console.log("PDFThumbnail: pdfFile is missing or not visible.");
        return;
      }

      setLoading(true);
      try {
        const asset = Asset.fromModule(pdfFile);
        await asset.downloadAsync();
        const fileUri = asset.localUri || asset.uri;
        console.log("PDF file URI:", fileUri);

        const base64 = await FileSystem.readAsStringAsync(fileUri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        setPdfBase64(base64);
      } catch (err) {
        console.error('Failed to load PDF in thumbnail:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPDF();
  }, [pdfFile, visible]);

  const htmlContent = pdfBase64
    ? `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.min.js"></script>
        <style>
          body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f2f2f2;
          }
          canvas {
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            background: white;
            border-radius: 4px;
          }
        </style>
      </head>
      <body>
        <canvas id="thumbnail"></canvas>
        <script>
          pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';
          const pdfData = atob("${pdfBase64}");
          const canvas = document.getElementById('thumbnail');
          const context = canvas.getContext('2d');

          pdfjsLib.getDocument({ data: pdfData }).promise.then(function(pdf) {
            pdf.getPage(1).then(function(page) {
              const scale = 0.2; // Smaller scale for thumbnail
              const viewport = page.getViewport({ scale });
              canvas.width = viewport.width;
              canvas.height = viewport.height;

              page.render({
                canvasContext: context,
                viewport: viewport
              });
            });
          });
        </script>
      </body>
    </html>
  `
    : '';

  if (!visible || !pdfFile) return null;

  if (loading || !pdfBase64) {
    return (
      <View style={[styles.container, style, styles.center]}>
        <ActivityIndicator size="small" color="#dc2626" />
      </View>
    );
  }

  return (
    <View style={[styles.container, style]}>
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        javaScriptEnabled
        domStorageEnabled
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 6,
    backgroundColor: 'white',
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 5,
    fontSize: 12,
    color: '#999',
  },
});

export default PDFThumbnail;
