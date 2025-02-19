import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, Text, useWindowDimensions, View } from "react-native";
import Animated, {
  FadeInDown,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";


import yearImages from "./constants/yearImages";
import homeImages from "./constants/homeImages";
import PWSplashScreen from "./components/PWSplashScreen";
import CustomCloseButton from "./components/buttons/CustomCloseButton";
import CustomTextButton from "./components/buttons/CustomTextButton";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function App() {
  const [pageLoading, setPageLoading] = useState(true);
  const translateY = useSharedValue(200);
  const ImageTranslate = useSharedValue(50);
  const LogoScale = useSharedValue(0.8);
  const ImageScale = useSharedValue(0.4);
  const router = useRouter();
  const middleHeight = (screenHeight - 100) / 2
  const img1Rotate = useSharedValue(0);

  const devTranslateX = useSharedValue(100);
  const contTranslateY = useSharedValue(0);
  const img2TranslateX = useSharedValue(0);
  const devOpacity = useSharedValue(0);
  const imgOpacity = useSharedValue(0);
  // useEffect(() => {
  //   setPageLoading(true);
  //   translateY.value = withDelay(900, withTiming(0, { duration: 500 }));
  //   LogoScale.value = withDelay(500, withTiming(1, { duration: 500 }));
  //   ImageTranslate.value = withDelay(500, withSpring(0));
  //   ImageScale.value = withDelay(500, withSpring(1));

  //   setTimeout(() => {
  //     setPageLoading(false);
  //   }, 900);
  // }, []);

  useEffect(() => {
    // Rotate img1 first
    img1Rotate.value = withTiming(360, { duration: 4000 }, (finished) => {
      if (finished) {
        // After rotation ends, move both images at the same time
        devTranslateX.value = withTiming(0, { duration: 1000 })
        devOpacity.value = withTiming(1, { duration: 1000 });
        img2TranslateX.value = withTiming(30, { duration: 1000 }, (finish) => {
          if (finish) {
            contTranslateY.value = withTiming(-100, { duration: 1000 });
            translateY.value = withTiming(0, { duration: 500 });
            LogoScale.value = withTiming(1, { duration: 500 });
            ImageTranslate.value = withSpring(0, { duration: 500 });
            ImageScale.value = withSpring(1, { duration: 500 });
            imgOpacity.value = withSpring(1, { duration: 500 });
          }
        });

      }
    });
  }, []);
  const showOtherElements = () => {
    // translateY.value = withDelay(900, withTiming(0, { duration: 500 }));
    // LogoScale.value = withDelay(500, withTiming(1, { duration: 500 }));
    // ImageTranslate.value = withDelay(500, withSpring(0));
    // ImageScale.value = withDelay(500, withSpring(1));
  };

  const img1Style = useAnimatedStyle(() => ({
    transform: [{ rotate: `${img1Rotate.value}deg` }],
  }));

  const img2Style = useAnimatedStyle(() => ({
    opacity: devOpacity.value,
    transform: [{ translateX: `${img2TranslateX.value}%` }],
  }));
  const devStyle = useAnimatedStyle(() => ({

    transform: [{ translateX: devTranslateX.value }],
  }));
  const contentStyle = useAnimatedStyle(() => ({

    transform: [{ translateY: `${contTranslateY.value}%` }],
  }));

  const animatedLogo = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }, { scale: LogoScale.value }],
  }));

  const animatedImage = useAnimatedStyle(() => ({
    transform: [{ scale: ImageScale.value }],
    opacity: imgOpacity.value
  }));

  return (
    <SafeAreaView className="bg-white">
      {/* {pageLoading ? (
        <PWSplashScreen />
      ) : ( */}
      <View className="flex h-screen items-center justify-center ">

        {/* <Animated.Image
              source={yearImages.pwLogo}
              className="max-w-[24rem] max-h-28 mx-auto mb-12"
              resizeMode="contain"
              style={animatedLogo}
            />
          */}
        <Animated.View className="w-[320px] h-[100px]  relative " style={[contentStyle]}>
          <Animated.View className="w-[80px] h-[80px] absolute " style={[devStyle]}>
            <Animated.Image source={homeImages.circleLogo} className="w-[100%] h-[100%] " resizeMode="cover" style={[img1Style]} />
          </Animated.View>
          <Animated.Image source={homeImages.nameLogo} className="w-[100%] h-[80px] absolute   z-20" resizeMode="contain" style={[img2Style]} />
        </Animated.View>
        <Animated.View
          className="flex flex-row gap-1 absolute"
          entering={FadeInDown.duration(600).delay(5600).withInitialValues({
            opacity: 0,
            transform: [{ translateY: 80 }],
          })}
        >
          <Text className="text-[#D02129] text-[1.1rem] uppercase tracking-widest font-objectiveBlk ">
            India
          </Text>
          <Text className="text-[1.1rem] uppercase tracking-widest font-objectiveBlk">
            Interactive
          </Text>
        </Animated.View>
        <Animated.View
          entering={FadeInDown.duration(600).delay(5600).withInitialValues({
            opacity: 0,
            transform: [{ translateY: 80 }],
          })}
        >
          <CustomTextButton
            className={"w-[286px] h-[46px] mt-8 absolute"}
            onPress={() => {
              router.push("/home");
            }}
            num="0"
            title={"Tap to Start"}
            textClass={"text-xl tracking-widest "}
          />
        </Animated.View>

        <Animated.Image
          source={homeImages.homeMap}
          resizeMode="contain"
          className="absolute bottom-0"
          style={animatedImage}
        />
      </View>


      {/* Status bar config */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
