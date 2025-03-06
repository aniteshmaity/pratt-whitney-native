import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import yearImages from "../../constants/yearImages";
import Svg, { Image as SvgImage, ClipPath, Defs, Polygon, Rect } from 'react-native-svg';

export default function PrevNextButton({ onPress, isColor, isIcon, isPolygon, isWidth }) {

    const bgColor = isColor === 'red' ? '#D91027' : isColor === 'grey' ? '#918F8F' : 'transparent';
    const Icon = isIcon === "prev" ? yearImages.leftArrow : isIcon === "next" ? yearImages.rightArrow : 'transparent';

    // Dynamic width & height
    const size = isWidth === "small" ? 16 : 27;
    const arrowSize = isWidth === 'small' ? 10 : 12;

    // Define clipPath points based on isPolygon
    const clipPathPoints = isPolygon === 'first'
        ? `0,0 ${size},0 ${size},${size} ${size * 0.2},${size} 0,${size * 0.8}` // Polygon for "first"
        : `0,0 ${size * 0.8},0 ${size},${size * 0.2} ${size},${size} 0,${size}`; // Polygon for "second"

    return (
        <TouchableOpacity onPress={onPress} style={{
 
            width: size,
            height: size,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Svg width={size} height={size}>
                <Defs>
                  
                    <ClipPath id="clip">
                        <Polygon points={clipPathPoints} />
                    </ClipPath>
                </Defs>
                {/* Apply Clipped Background */}
                <Rect width={size} height={size} fill={bgColor} clipPath="url(#clip)" />
                <SvgImage
                    href={Icon}
                    width={arrowSize}
                    height={arrowSize}
                    clipPath="url(#clip)"
                    x={(size - arrowSize) / 2} // Center the image horizontally
                    y={(size - arrowSize) / 2} // Center the image vertically
                />
            </Svg>
        </TouchableOpacity>
    );
}

// import { View, Text, TouchableOpacity, Image } from 'react-native'
// import React from 'react'
// import yearImages from "../constants/yearImages";
// import Svg, { Image as SvgImage } from 'react-native-svg';
// export default function PrevNextButton({onPress,isColor, isIcon, isPolygon,isWidth }) {

//     const bgColor = isColor === 'red' ? '#D91027' : isColor === 'grey' ? '#918F8F' : 'transparent';
//     const Icon = isIcon ==="prev" ? yearImages.leftArrow : isIcon ==="next" ? yearImages.rightArrow : 'transparent'
//     console.log("iocn",Icon);
//     // const clipPathValue = isPolygon === 'first' 
//     // ? "polygon(0 0, 100% 0, 100% 100%, 20% 100%, 0 80%)"
//     // : "polygon(0 0, 80% 0, 100% 20%, 100% 100%, 0 100%)";
//      // Dynamic width & height
//   const size = isWidth === "small" ? 16 : 27;
//   const arrowSize = isWidth ==='small' ? 10 : 30;
//   return (
//      <TouchableOpacity onPress={onPress}  style={{

//         backgroundColor: bgColor,
//         width: size,
//         height: size
//       }}>
//      <View
      
 
//        className="  z-[100] h-full w-full cursor-pointer  "
//      >
//        <View className="" />
//        <Svg width={100} height={100}>
//         <SvgImage href={Icon} width={arrowSize} height={arrowSize} />
//       </Svg>
//      </View>
//      </TouchableOpacity>
//   )
// }
