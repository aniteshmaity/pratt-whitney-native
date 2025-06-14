
import React, { useRef, useState } from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import PrevNextButton from './buttons/PrevNextButton';
import { LinearGradient } from "expo-linear-gradient"

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width / 6;
const VISIBLE_ITEMS = 7;

export default function InnerCarousel({ images,onImageClick }) {
    // console.log("width",width);
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0); // Track index state
    const scrollX = useSharedValue(0); // Shared value for animations

   

    return (
        <View className="relative flex justify-center ">
            
    

        <ScrollView horizontal
        showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
        {images.slice(1)?.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onImageClick(index, images.slice(1))}
            style={{ marginRight: 7 }}
          >
             <Image
          source={item?.img}
          style={{
            width: 52,
            height: 42,
            opacity: Math.max(0.1, 1 - index * 0.1),
          }}
          resizeMode="cover"
        />
          </TouchableOpacity>
        ))}
      

</ScrollView>

        </View>
    );
}




// import React, { useRef, useState } from 'react';
// import { View, Image, FlatList, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native";
// import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
// import PrevNextButton from './buttons/PrevNextButton';
// import { LinearGradient } from "expo-linear-gradient"

// const { width } = Dimensions.get("window");
// const ITEM_WIDTH = width / 6;
// const VISIBLE_ITEMS = 7;

// export default function InnerCarousel({ images,onImageClick }) {
//     // console.log("width",width);
//     const flatListRef = useRef(null);
//     const [currentIndex, setCurrentIndex] = useState(0); // Track index state
//     const scrollX = useSharedValue(0); // Shared value for animations
// // console.log("currentindex",currentIndex);
// // console.log("images-length",images.length);
//     // Handle Next Slide
//     const handleNextClick = () => {
//         if(currentIndex + 1 === images.length - VISIBLE_ITEMS) return;
//         if (flatListRef.current && currentIndex < images.length - 1) {
//             const nextIndex = currentIndex + 1;
//             flatListRef.current.scrollToIndex({
//                 index: nextIndex,
//                 animated: true,
//             });
//             setCurrentIndex(nextIndex);
//             scrollX.value = withTiming(nextIndex * ITEM_WIDTH - 6 );
//         }
//     };

//     // Handle Previous Slide
//     const handlePrevClick = () => {
//         if (flatListRef.current && currentIndex > 0) {
//             const prevIndex = currentIndex - 1;
//             flatListRef.current.scrollToIndex({
//                 index: prevIndex,
//                 animated: true,
//             });
//             setCurrentIndex(prevIndex);
//             scrollX.value = withTiming(prevIndex * ITEM_WIDTH );
//         }
//     };
   

//     return (
//         <View className="relative flex justify-center bg-slate-500 ">
//             {images?.length > 7 && (
//                <>
//                 <View className=" absolute -left-5 z-50">
//                     <PrevNextButton     isColor={currentIndex === 0 ? "grey" : "red"}  isIcon='prev' isPolygon="first" isWidth="small" onPress={handlePrevClick} />            
//                 </View>
//                 <View className=" absolute -right-5 z-50">
//                     <PrevNextButton     isColor={currentIndex + 1 >= images.length - VISIBLE_ITEMS ? "grey" : "red"}  isIcon='next' isWidth="small" onPress={handleNextClick} />
//                 </View>
//                </>
//             )}

//         <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          
//   <FlatList
//     ref={flatListRef}
//     horizontal
//     data={images}
//     keyExtractor={(item, index) => index.toString()}
//     showsHorizontalScrollIndicator={false}
//     keyboardShouldPersistTaps="handled"
//     renderItem={({ item, index }) => (
//       <TouchableOpacity
//         onPress={() => {
//           console.log('All images:', images);
//           onImageClick(index, images);
//         }}
//         style={{ marginRight: 6 }}
//       >
//         <Image
//           source={item?.img}
//           style={{
//             width: 42,
//             height: 42,
//             opacity: Math.max(0.1, 1 - index * 0.1),
//           }}
//           resizeMode="cover"
//         />
//       </TouchableOpacity>
//     )}
//   />
// </ScrollView>

//         </View>
//     );
// }
