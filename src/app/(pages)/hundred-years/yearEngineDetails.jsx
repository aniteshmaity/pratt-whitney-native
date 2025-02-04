import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import yearImages from "../../constants/yearImages";
import CloseButton from "../../components/CloseButton ";
import EngineComponent from "../../components/EngineComponent";

export default function yearEngineDetails() {
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
              <View className="absolute grid grid-cols-2 bottom-0 right-0 clipped-button-2 z-40">
                <View className="bg-[#918F8F] text-white flex justify-center items-center px-4 py-2 gap-1 hover:bg-[#656363]">
                  <Text className="text-[1rem]">Previous</Text>
                </View>

                <View className="bg-[#CE2028] text-white flex justify-center items-center px-3 py-2 gap-2 hover:bg-red-800">
                  <Text className="text-[1rem]">Home</Text>
                </View>
               
              </View>

              <EngineComponent />
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
