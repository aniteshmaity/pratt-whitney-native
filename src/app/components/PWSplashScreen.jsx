import {View, Image, Text} from 'react-native'
import React, { useEffect } from 'react'

import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withSequence, 
  withSpring 
} from "react-native-reanimated";

import homeImages from '../constants/homeImages';


export default function PWSplashScreen()
{

  const img1Rotate = useSharedValue(0);
  const img1TranslateX = useSharedValue(0);
  const img2TranslateX = useSharedValue(0);
  const devOpacity = useSharedValue(1);
  const devTranslateY = useSharedValue(50);


  useEffect(() => {
    img1Rotate.value = withTiming(360, { duration: 5000 }); // Rotate full 360
  
    img2TranslateX.value = withSequence(
      withTiming(70, { duration: 2000 })
    );

    setTimeout(() => {
      devOpacity.value = withTiming(1, { duration: 1000 });
      devTranslateY.value = withTiming(-250, { duration: 1000 });

      img1TranslateX.value = withSequence(
        withTiming(-230, { duration: 2000 })
      );
    }, 8000);
  }, []);

  // const img1Style = useAnimatedStyle(() => ({
  //   transform: [{ rotate: `${img1Rotate.value}deg` }, { translateX: img1TranslateX.value }],
  // }));

  // const img2Style = useAnimatedStyle(() => ({
  //   opacity: 1,
  //   transform: [{ translateX: img2TranslateX.value }],
  // }));

  const devStyle = useAnimatedStyle(() => ({
    opacity: devOpacity.value,
    transform: [{ translateY: devTranslateY.value }],
  }));


  return (
    // <View className="flex justify-center items-center h-full w-full bg-white">
    //   {/* <Image source={yearImages.pwLogo} resizeMode="contain" className={"max-w-80 max-h-28"} /> */}
    //   <View className="flex flex-row">
    //           <Image source={homeImages.circleLogo} className="max-w-80 max-h-28" resizeMode="contain" />
    //           <Image source={homeImages.nameLogo} className="max-w-80 max-h-28" resizeMode="contain"/>
    //         </View>
      
    // </View>

<View style={{ alignItems: "center", justifyContent: "center", flex: 1 , backgroundColor:"red"}}>
<View className="flex flex-row w-[321px] h-[100px] bg-slate-500 relative" style={[devStyle]}>
             <Animated.Image  source={homeImages.circleLogo} className="max-w-80 max-h-28 absolute left-1/2 translate-x-[-50%]" resizeMode="contain" />
             <Animated.Image  source={homeImages.nameLogo} className="max-w-80 max-h-28" resizeMode="contain"/>
            </View>


</View>
  )
}