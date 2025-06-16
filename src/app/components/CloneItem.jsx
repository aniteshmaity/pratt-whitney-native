import { useEffect } from "react";
import { View, Text, Image,Button, TouchableOpacity } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from "react-native-reanimated";
import boxShadow from "../constants/boxShadow";
import ClippedView from "./ClippedView";
import yearImages from "../constants/yearImages";

const CloneItem = ({ clone, index, activeId, isPrev, slide, redDot, activeRedDot,animationTrigger,currentInnerSlide,direction,bgColor }) => {
    // console.log("current",currentInnerSlide);
    // console.log("isprev",isPrev);
    // console.log("direction",direction);
    // console.log("animationtrigger",animationTrigger);
  
    // console.log("clone",clone.id);
    
   // Function to get initial animation values based on `isPrev`
  const getInitialValues = (isPrev,direction) => {
   if(direction === "next") {
   return {
    opacity: isPrev ? clone.opacity : clone.opacity,
    scale: isPrev ? clone.scale : 1,
    translateX: clone.x,
    translateY:  clone.y,
    height: isPrev ? 52 : 340,
    width: isPrev ? 140 : 430,
   }
   }else{
    return {
      opacity: isPrev ? 0.6 : 1,
      scale: isPrev ? 1 : 0.9,
      translateX: clone.x,
      translateY: clone.y,
      height: isPrev ? 340 : 52,
      width: isPrev ? 430 : 140,
     }
   }
  };

  // Set initial animation values
  const { opacity: initOpacity, scale: initScale, translateX: initX, translateY: initY, height: initHeight, width: initWidth } = getInitialValues(isPrev,direction);

  // Shared values for animation
  const opacity = useSharedValue(initOpacity);
  const scale = useSharedValue(initScale);
  const translateX = useSharedValue(initX);
  const translateY = useSharedValue(initY);
  const height = useSharedValue(initHeight);
  const width = useSharedValue(initWidth);

   // Function to apply animation based on direction
   const animateClone = (direction) => {
    if (animationTrigger === 0) return;
if(direction === "next"){
  if(isPrev){
    if (currentInnerSlide === clone.id) {
      // Active item animation (expands to full size)
      opacity.value = withTiming(1, { duration: 100 });
      scale.value = withTiming(1, { duration: 300 });
      translateX.value = withTiming(0, { duration: 300,easing: Easing.linear });
      translateY.value = withTiming(0, { duration: 300,easing: Easing.linear });
      height.value = withTiming(350, { duration: 300 });
      width.value = withTiming(430, { duration: 300 });
  }

  }else{
       if( currentInnerSlide === index+1){
        opacity.value = withTiming(1, { duration: 600 });
        scale.value = withTiming(0.9, { duration: 500 });
        translateX.value = withTiming(-240 + clone.id * 30, { duration: 600 });
        translateY.value = withTiming(100, { duration: 600 });
        height.value = withTiming(52, { duration: 600 });
        width.value = withTiming(140, { duration: 600 });
       }
       else{
        opacity.value = withTiming(0.4, { duration: 100 });
       }
  }
}else{  
  if(isPrev){
  if(clone.id === currentInnerSlide+1 ){
    // console.log("this is right---");
    opacity.value = withTiming(1, { duration: 600 });
    scale.value = withTiming(0.9, { duration: 600 });
    // console.log("Before Animation - translateX:", translateX.value, "translateY:", translateY.value);
 
      translateX.value = withTiming(150 + currentInnerSlide * 30, { duration: 600 });
      translateY.value = withTiming(100, { duration: 600 });
      // console.log("After Animation - translateX:", translateX.value, "translateY:", translateY.value);
    height.value = withTiming(52, { duration: 600 });
    width.value = withTiming(140, { duration: 600 });
  }else{
    opacity.value = withTiming(0.4, { duration: 100 });
   }
  }else{
   if(index === currentInnerSlide){
    opacity.value = withTiming(0, { duration: 100 });
    scale.value = withTiming(1, { duration: 300 });
    translateX.value = withTiming(0, { duration: 300 });
    translateY.value = withTiming(0, { duration: 300 });
    height.value = withTiming(350, { duration: 300 });
    width.value = withTiming(430, { duration: 300 });
   }
  }
}
   
};

useEffect(() => {
  animateClone(direction);
}, [animationTrigger]);

//   // Trigger animation when animationTrigger changes
//   useEffect(() => {
//     if (animationTrigger === 0) return;
//     // opacity.value = 0;
//     // scale.value = 0.8;
//     // translateX.value = isPrev ? -50 : 50;
// if(animationTrigger === clone.id){
    
//     opacity.value = withTiming(1, { duration: 1000 });
//     scale.value = withTiming(1, { duration: 500 });
//     translateX.value = withTiming(0, { duration: 1000 });
//     translateY.value = withTiming(0, { duration: 1000 });
//     height.value = withTiming(350, { duration: 1000 });
//     width.value = withTiming(430, { duration: 1000 });
// }
// if(!isPrev){
  
//     opacity.value = withTiming(1, { duration: 1000 });
//     scale.value = withTiming(0.9, { duration: 500 });
//     translateX.value = withTiming(-180 + currentInnerSlide * 30, { duration: 1000 });
//     translateY.value = withTiming(100, { duration: 1000 });
//     height.value = withTiming(52, { duration: 1000 });
//     width.value = withTiming(140, { duration: 1000 });
// }
//   }, [animationTrigger]); // Dependency on animationTrigger

  // Animated styles
const animatedStyle = useAnimatedStyle(() => {
  return {
    opacity: opacity.value,
    transform: [
      { scale: scale.value },
      { translateX: translateX.value },
      { translateY: translateY.value }
    ],
    height: height.value,
    maxWidth: width.value,
  };
});
    return (
      <Animated.View
        key={clone.id}
        className={`${isPrev ? `prevContentClone-${clone.id}` : `nextContentClone-${clone.id}`}  h-full bg-white`}
        style={[
            animatedStyle,
        {
            position: "absolute",
            height: activeId === clone.id ? "100%" : "52px",
            maxWidth: activeId === clone.id ? "100%" : "140px",
            width: "100%",
            top: 50,
            [isPrev ? "right" : "left"]: 0,
            transform: `translate(${clone.x}, ${clone.y}) scale(${clone.scale})`,
            opacity: clone.opacity,
            zIndex: isPrev ? -1 - index * 20 : -1,
            ...boxShadow("#00000040", 0, 25, 0.25, 50, 10) 
        }
        ]}
      >
              {/* <View className="absolute bottom-0 left-1/2 -translate-x-1/2  z-40 " style={{
    transform: [{ translateY: 45 }], // Adjusting X & Y translations
  }}> */}
       {isPrev ? (  <Image source={currentInnerSlide+1 === clone.id ? yearImages.redDotDouble : yearImages.redDotone} className="absolute bottom-0 left-1/2 -translate-x-1/2  z-40 w-[30px] h-[30px] " resizeMode='contain' style={{
    transform: [{ translateX: -15 },{ translateY: 45 }],}}  />) : (
      <Image source={currentInnerSlide-1 === clone.id ? yearImages.redDotDouble : yearImages.redDotone} className="absolute bottom-0 left-1/2 -translate-x-1/2  z-40 w-[30px] h-[30px] " resizeMode='contain' style={{
        transform: [{ translateX: -15 },{ translateY: 45 }],}}  />
    )}
         {/* </View>  */}

      {/* <ClippedView width={activeId === clone.id ? "430" : "140"} height={activeId === clone.id ? "350" : "52"} backgroundColor={bgColor} clipPathId="slidecard22" slug="variant11" /> */}
        <View className="card_clip_2 py-[10px] px-[10px] h-full w-full bg-white">
          <View className="relative w-full flex flex-row justify-center gap-2">
            <Image
              style={{
                width: activeId === clone.id ? 160 : 35,  // Change width dynamically
                height: activeId === clone.id ? 100 : 36, // Change height dynamically
              }}
              // className={`${activeId === clone.id ? "w-[200px]" : "w-[100px]"} image `}
              source={clone?.image}
              resizeMode="cover"
              alt="Slide Image"
            />
            <View style={{ flex: 1 }}>
            
                <Text className={`year font-objectiveBlk ${activeId === clone.id ? "text-[1.8rem]" : "text-[0.6rem]"} text-red-600`}>
                  {clone?.year}
                </Text>
            
              <Text className={`font-objectiveBlk ${activeId === clone.id ? "text-[1.4rem]" : "text-[0.45rem]"} leading-tight`}>
                {clone.title}
              </Text>
            </View>
          </View>
  
          {activeId === clone.id && (
            <>
              <View className="flex gap-3">
                {slide?.slideImages?.map((e, idx) => (
                  <Image key={idx} source={e.img} alt={`Slide Image ${idx}`} className="w-[60px] h-[60px] object-cover h-full" />
                ))}
              </View>
              <View className="w-full p-2">
                <Text className="text-[20px] font-[900] pb-2">
                  <Text className="font-[600] text-[0.8rem]">{clone?.subtitle}</Text>
                </Text>
                <Text className="text-[0.64rem] pb-5 font-[400]">{clone?.description}</Text>
              </View>
               <View className="flex flex-row z-50">
                           
                <TouchableOpacity className="bg-[#393637]  px-4 p-2 "><Text className="text-white text-[0.7rem]">Gallery</Text></TouchableOpacity>
                <TouchableOpacity className="bg-red-500  px-4 p-2 ml-4 "><Text className="text-white text-[0.7rem]">Explore</Text></TouchableOpacity>
              </View>
            </>
          )}
        </View>
  
        {/* <Image
          source={index === 0 ? activeRedDot : redDot}
          alt=""
          className={`absolute ${index === 0 ? "w-[45px] translate-y-full" : "w-[10px] translate-y-[650%]"} left-1/2 -translate-x-1/2`}
        /> */}
      </Animated.View>
    );
  };
  export default CloneItem;
  