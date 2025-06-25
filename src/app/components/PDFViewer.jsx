import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

const PDFViewer = ({ pdfFile, visible, style }) => {
  const [pdfBase64, setPdfBase64] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPDF = async () => {
      if (!pdfFile || !visible) return;

      setLoading(true)
      try {
        const asset = Asset.fromModule(pdfFile);
        await asset.downloadAsync();
        const base64 = await FileSystem.readAsStringAsync(asset.localUri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        setPdfBase64(base64);
      } catch (err) {
        console.error('Failed to load PDF', err);
      } finally {
        setLoading(false)
      }
    };

    loadPDF();
  }, [pdfFile, visible]);

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.min.js"></script>
        <style>
          body {
            margin: 0;
            padding: 0;
            background-color: #f2f2f2;
          }
          #container {
            width: 100%;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }
          .page-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
          }
          .page {
            margin: 10px 0;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            background: white;
          }
        </style>
      </head>
      <body>
        <div id="container">
          <div class="page-container" id="pages"></div>
        </div>
        <script>
          pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';
          
          const pdfData = atob("${pdfBase64}");
          const container = document.getElementById('pages');
          
          pdfjsLib.getDocument({ data: pdfData }).promise.then(function(pdf) {
            const renderPage = (pageNumber) => {
              return pdf.getPage(pageNumber).then(function(page) {
                const viewport = page.getViewport({ scale: 1.0 });
                const scale = (window.innerWidth - 20) / viewport.width;
                const scaledViewport = page.getViewport({ scale: scale });
                
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.width = scaledViewport.width;
                canvas.height = scaledViewport.height;
                canvas.className = 'page';
                
                container.appendChild(canvas);
                
                return page.render({
                  canvasContext: context,
                  viewport: scaledViewport
                }).promise;
              });
            };
            
            // Render all pages
            const renderAllPages = () => {
              const promises = [];
              for (let i = 1; i <= pdf.numPages; i++) {
                promises.push(renderPage(i));
              }
              return Promise.all(promises);
            };
            
            return renderAllPages();
          });
        </script>
      </body>
    </html>
  `;

  if (!visible || !pdfBase64) return null;

  if (loading) {
    return (
      <View style={[styles.container, style, styles.center]}>
        <ActivityIndicator size="large" color="#dc2626" />
        <Text style={styles.loadingText}>Loading PDF...</Text>
      </View>
    );
  }


  return (
    <View style={[styles.container, style]}>
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        style={styles.webview}
        scrollEnabled={true}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default PDFViewer;