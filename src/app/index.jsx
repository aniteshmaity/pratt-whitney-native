import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Animated, {
  FadeInDown,
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


export default function App() {
  const [pageLoading, setPageLoading] = useState(true);
  const translateY = useSharedValue(200);
  const ImageTranslate = useSharedValue(50);
  const LogoScale = useSharedValue(0.8);
  const ImageScale = useSharedValue(0.4);
  const router = useRouter();

  useEffect(() => {
    setPageLoading(true);
    translateY.value = withDelay(500, withTiming(0, { duration: 500 }));
    LogoScale.value = withDelay(500, withTiming(1, { duration: 500 }));
    ImageTranslate.value = withDelay(500, withSpring(0));
    ImageScale.value = withDelay(500, withSpring(1));

    setTimeout(() => {
      setPageLoading(false);
    }, 900);
  }, []);

  const animatedLogo = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }, { scale: LogoScale.value }],
  }));

  const animatedImage = useAnimatedStyle(() => ({
    transform: [{ scale: ImageScale.value }],
  }));

  return (
    <SafeAreaView className="bg-white">
      {pageLoading ? (
        <PWSplashScreen />
      ) : (
        <Animated.View className="flex h-full items-center">
          <View className="h-3/5 flex items-center justify-center mt-12">
            <Animated.Image
              source={yearImages.pwLogo}
              className="max-w-[24rem] max-h-28 mx-auto mb-12"
              resizeMode="contain"
              style={animatedLogo}
            />
            <Animated.View
              className="flex flex-row gap-1"
              entering={FadeInDown.duration(300).delay(200).withInitialValues({
                opacity: 0,
                transform: [{ translateY: 80 }],
              })}
            >
              <Text className="text-[#D02129] text-2xl uppercase tracking-widest ">
                India
              </Text>
              <Text className="text-2xl uppercase tracking-widest ">
                Interactive
              </Text>
            </Animated.View>
            <Animated.View
              entering={FadeInDown.duration(300).delay(200).withInitialValues({
                opacity: 0,
                transform: [{ translateY: 80 }],
              })}
            >
              <CustomTextButton
                className={"w-[386px] h-[46px] mt-8"}
                onPress={() => {
                  router.push("/home");
                }}
                num="0"
                title={"Tap to Start"}
                textClass={"text-xl tracking-widest "}
              />
            </Animated.View>
          </View>
          <Animated.Image
            source={homeImages.homeMap}
            resizeMode="contain"
            className="-mt-12"
            style={animatedImage}
          />
        </Animated.View>
      )}

      {/* Status bar config */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
