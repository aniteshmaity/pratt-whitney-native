import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';




import CustomTextButton from '../components/buttons/CustomTextButton';
import homeImages from '../constants/homeImages';
import { useNavigation, useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

const StartScreen = () => {
  const devX = useSharedValue(-width);
  const devY = useSharedValue(-height);
  const footerScale = useSharedValue(0.2);
  const footerOpacity = useSharedValue(0.5);

  const router = useRouter();

  useEffect(() => {
    // Animation for devRef (top-left to middle)
    devX.value = withTiming(0, { duration: 1500, easing: Easing.out(Easing.exp) });
    devY.value = withTiming(-height * 0.25, { duration: 1500, easing: Easing.out(Easing.exp) });

    // Animation for MapImage (scale 0.4 to 1)
    footerScale.value = withTiming(1, { duration: 1500, easing: Easing.out(Easing.exp) });
    footerOpacity.value = withTiming(1, { duration: 1500, easing: Easing.out(Easing.exp) });
  }, []);

  const devAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: devX.value }, { translateY: devY.value }],
  }));

  const footerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: footerScale.value }],
    opacity: footerOpacity.value,
  }));

  return (
    <View className="flex-1 justify-center items-center bg-white overflow-hidden">
      {/* Logo Container */}
      <Animated.View style={devAnimatedStyle} className="flex-row gap-4 w-[521px] h-[100px] ">
        <Image source={homeImages.logo1} className="w-[400px] h-[100px] mx-auto" resizeMode='contain' />
       
      </Animated.View>

      {/* Button and India Interactive */}
      <View className="absolute flex-col justify-center items-center gap-[20px]">
       <View
 className="flex flex-row gap-1 "
              >
                <Text className="text-[#D02129] text-[1.1rem] uppercase tracking-widest font-objectiveBlk ">
                  India
                </Text>
                <Text className="text-[1.1rem] uppercase tracking-widest font-objectiveBlk">
                  Interactive
                </Text>
              </View>
         <CustomTextButton
                   className={"w-[286px] h-[46px] mt-4 absolute"}
                   onPress={() => {
                     router.push("/home");
                   }}
                   num={0}
                   title={"Tap to Start"}
                   textClass={"text-xl tracking-widest "}
                 />
      </View>

      {/* Map Image */}
      
        <Animated.Image style={footerAnimatedStyle}  source={homeImages.homeMap} className=" absolute bottom-0 w-screen " resizeMode="contain" />

    </View>
  );
};

export default StartScreen;