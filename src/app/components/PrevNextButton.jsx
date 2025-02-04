import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import yearImages from "../constants/yearImages";

export default function PrevNextButton({onPress,isColor, isIcon, isPolygon,isWidth }) {
    const bgColor = isColor === 'red' ? '#D91027' : isColor === 'grey' ? '#918F8F' : 'transparent';
    const Icon = isIcon ==="prev" ? yearImages.leftArrow : isIcon ==="next" ? yearImages.rightArrow : 'transparent'
    const clipPathValue = isPolygon === 'first' 
    ? "polygon(0 0, 100% 0, 100% 100%, 20% 100%, 0 80%)"
    : "polygon(0 0, 80% 0, 100% 20%, 100% 100%, 0 100%)";

     // Dynamic width & height
  const size = isWidth === "small" ? 16 : 27;
  const arrowSize = isWidth ==='small' ? 10 : 30;
  return (
     <TouchableOpacity onPress={onPress}  style={{
        clipPath:clipPathValue,
        backgroundColor: bgColor,
        width: size,
        height: size
      }}>
     <View
      
 
       className="  z-[100] h-full w-full cursor-pointer  flex justify-center items-center"
     >
       <View className="" />
       <Image source={Icon} className="" style={{  width: arrowSize, height: arrowSize }} resizeMode='center' />
     </View>
     </TouchableOpacity>
  )
}