import React, { useRef, useState } from 'react';
import { Modal, View, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get('window');
console.log("widhth20",width);
console.log("height20",height);
const CustomDialog = ({ images, startIndex, onClose }) => {
    const swiperRef = useRef(null);
    // console.log("images-322",images);
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const handlePrev = ()=> {
    console.log("ckilked index prev");
    currentIndex > 0 && setCurrentIndex(currentIndex - 1)
    swiperRef.current?.scrollBy(-1)
  }
  const handleNext = ()=> {
    console.log("ckilked index next");
    currentIndex < images.length - 1 &&
                setCurrentIndex(currentIndex + 1)
                swiperRef.current?.scrollBy(1)
  }
  

  return (
    <SafeAreaProvider>
      <SafeAreaView>
    <Modal visible={true} transparent={true}  onRequestClose={onClose}>
      <View className=" bg-black/60 justify-center   items-center z-10" style={{ width: width , height: height  }}>

        <View className="bg-white  rounded-xl  relative z-50" style={{ width: width*0.6 , height: height*0.5  }}>

          {/* Close Button */}
          <TouchableOpacity
      onPress={onClose}
      className="absolute top-6 right-0 bg-white w-8 h-8 rounded items-center justify-center z-50 px-2 py-1"
    >
      <Text className="text-black text-lg">✕</Text>
    </TouchableOpacity>

          {/* Swiper */}
          <Swiper
           ref={swiperRef}
            loop={false}
            index={startIndex}
            onIndexChanged={(index) => setCurrentIndex(index)}
            showsPagination={false}
            showsButtons={false}
 
          >
            {images.map((img, index) => (
              <View
                key={index}
                className="flex-1 items-center justify-center"
              >
                <Image
                  source={ img.img }
                  resizeMode="contain"
                //   style={{ width: width * 0.85, height: height * 0.6 }}
                  className="rounded w-full h-full"
                />
              </View>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <View className="absolute top-1/2 left-0 right-0 px-4 flex-row justify-between items-center -translate-y-1/2 z-10">
            <TouchableOpacity
              onPress={handlePrev}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full ${
                currentIndex === 0
                  ? 'bg-gray-300'
                  : 'bg-gray-100 active:bg-gray-600'
              }`}
            >
              <Icon name="chevron-left" size={24} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNext}
              disabled={currentIndex === images.length - 1}
              className={`p-2 rounded-full ${
                currentIndex === images.length - 1
                  ? 'bg-gray-300'
                  : 'bg-gray-100 active:bg-gray-400'
              }`}
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
