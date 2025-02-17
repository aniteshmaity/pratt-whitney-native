import { View, Text, Image, ImageBackground } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import yearImages from "../constants/yearImages";
import CloseButton from "./CloseButton ";
import EngineComponent from "./EngineComponent";
import ClippedView from "./ClippedView";

export default function ProductEngineDetails({handleEngineClose}) {
    const [size, setSize] = useState({ width: 0, height: 0 });
  const handleClose = () => {
    console.log("ok");
  };
  return (
    <SafeAreaView className="bg-white">
      <View className=" w-full h-screen overflow-hidden relative">
        <ImageBackground
          source={yearImages.exploreBgImage}
          style={{ flex: 1, width: "100%", height: "100%" }}
          resizeMode="cover"
        >
          <View className=" w-[96%] mx-auto h-full">
            {/* Header */}
            <View className="h-[80px] flex flex-row justify-between items-center">
              <Image
                source={yearImages.pwLogoWhite}
                alt="homeLogo"
                className="max-w-[180px] max-h-[50px]"
                resizeMode="contain"
              />
              <View className=" flex flex-row justify-center items-center gap-4 z-40">
                <View className="text-2xl font-[900] opacity-0">
                  <Text className="text-[#E11C37] pr-2">INDIA</Text>
                  <Text className="text-black">INTERACTIVE</Text>
                </View>
                <CloseButton onPress={handleClose} />
              </View>
            </View>
            <View className="relative ">
       

              <EngineComponent type="product" onEngineClose={handleEngineClose} />
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
