import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import yearImages from "./constants/yearImages";
import homeImages from "./constants/homeImages";
import CustomTextButton from "./components/buttons/CustomTextButton";
import { useVideoPlayer, VideoView } from 'expo-video';
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function App() {
  const router = useRouter();
  const [videoEnded, setVideoEnded] = useState(false);
  const videoSource =
    homeImages.splashVideo

  const player = useVideoPlayer(videoSource, player => {
    player.loop = false;
    player.muted = true;
    player.play();
    // Listen for end of playback


  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVideoEnded(true);
    }, 4000); // 5 seconds

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);

  return (
    <SafeAreaView className="bg-white">

      {!videoEnded ? (
        <VideoView
          style={{ width: "100%", height: "100%" }}
          player={player}
          nativeControls={false}
          contentFit="cover"
        />
      ) : (
        <View>
          <View className="flex h-screen  justify-center items-center relative">
            <View className="w-[380px] h-[100px] top-[15%] absolute ">

              <Image
                source={homeImages.logo1}
                className="w-[100%] h-[100%]"
                resizeMode="contain"
              />


            </View>

            <View className="flex flex-row gap-1 absolute top-[35%]">
              <Text className="text-[#D02129] text-[1.1rem] uppercase tracking-widest font-objectiveBlk">
                India
              </Text>
              <Text className="text-[1.1rem] uppercase tracking-widest font-objectiveBlk">
                Interactive
              </Text>
            </View>

            <View className="absolute top-[40%]">
              <CustomTextButton
                className={"w-[286px] h-[46px] mt-8"}
                onPress={() => router.push("/home")}
                num={0}
                title={"Tap to Start"}
                textClass={"text-xl tracking-widest "}
              />
            </View>


          </View>
          <View className="absolute bottom-0">
{/* <ExpoImage  source={require('../assets/images/home/plane-amiation-home.gif')} */}

            <Image
              source={homeImages.homeMap}
              resizeMode="contain"
              className=""
            />
          </View>
        </View>
      )}



      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
