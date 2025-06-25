import React, { useRef, useState } from 'react';
import { Modal, View, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/Feather';
import VideoComponent from './VideoComponent';
import PDFViewer from './PDFViewer';

const { width, height } = Dimensions.get('window');

const CustomDialog = ({ images, startIndex = 0, onClose }) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const handlePrev = () => {
    if (currentIndex > 0) {
      carouselRef.current?.scrollTo({ index: currentIndex - 1, animated: true });
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      carouselRef.current?.scrollTo({ index: currentIndex + 1, animated: true });
      setCurrentIndex(prev => prev + 1);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Modal visible={true} transparent={true} onRequestClose={onClose}>
          <View
            className="bg-black/60 justify-center items-center z-10"
            style={{ width, height }}
          >
            <View
              className="bg-white rounded-xl z-50 overflow-hidden"
              style={{
                width: width * 0.6,
                height: height * 0.6,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Close Button */}
              <TouchableOpacity
                onPress={onClose}
                style={{ transform: [{ translateX: -12 }] }}
                className="absolute top-6 right-0 bg-white w-8 h-8 rounded-md items-center justify-center z-50"
              >
                <Text className="text-black text-xl leading-none">✕</Text>
              </TouchableOpacity>

              {/* Carousel */}
              <Carousel
                ref={carouselRef}
                width={width * 0.6}
                height={height * 0.6}
                data={images}
                defaultIndex={startIndex}
                scrollAnimationDuration={300}
                onSnapToItem={(index) => setCurrentIndex(index)}
                loop={false}
                windowSize={3} 
                renderItem={({ item }) => (
                  <View
                    className="flex-1 items-center justify-center"
                    style={{
                      width: '100%',
                      height: '100%',
                      overflow: 'hidden',
                      backgroundColor: 'rgba(0,0,0,0.6)'
                    }}
                  >
                    {item.img && (
                      <Image
                        source={item.img}
                        resizeMode="contain"
                        className="rounded w-full h-full"
                      />
                    )}
                    {item.video && (
                      <View
                        style={{
                          width: width * 0.6,
                          height: height * 0.6,
                          overflow: 'hidden',
                          borderRadius: 12,
                          backgroundColor: 'black',
                        }}
                      >
                        <VideoComponent
                          videoUrl={item.video}
                          isPlay={true}
                          isControl={true}
                          videoClass={{
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </View>
                    )}
                    {item.pdf && (
                      <View style={{
                        width: width * 0.53,
                        height: height * 0.53,
                        backgroundColor: '#fff',
                      }}>
                        <PDFViewer
                          pdfFile={item.pdf}
                          visible={true}
                          style={{
                            flex: 1,
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </View>
                    )}
                  </View>
                )}
              />

              {/* Navigation Buttons */}
              <View className="absolute top-1/2 left-0 right-0 px-4 flex-row justify-between items-center -translate-y-1/2 z-10">
                <TouchableOpacity
                  onPress={handlePrev}
                  disabled={currentIndex === 0}
                  style={{ opacity: currentIndex === 0 ? 0.4 : 1 }}
                  className="p-2 rounded-full bg-gray-100 active:bg-gray-400"
                >
                  <Icon name="chevron-left" size={24} color="#000" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={handleNext}
                  disabled={currentIndex === images.length - 1}
                  style={{ opacity: currentIndex === images.length - 1 ? 0.4 : 1 }}
                  className="p-2 rounded-full bg-gray-100 active:bg-gray-400"
                >
                  <Icon name="chevron-right" size={24} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default CustomDialog;
