import { View, Text, Image, ImageBackground } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import yearImages from "../../constants/yearImages";
import CloseButton from "../../components/CloseButton ";
import EngineComponent from "../../components/EngineComponent";
import ClippedView from "../../components/ClippedView";

export default function yearEngineDetails() {
    const [size, setSize] = useState({ width: 0, height: 0 });
  const handleClose = () => {
    console.log("ok");
  };
  return (
    <SafeAreaView className="">
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
              <View className="absolute flex flex-row bottom-0 right-0 clipped-button-2 z-40 w-[200px]"  onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout;
        setSize({ width, height });
      }}>
             
                <View className=" text-white flex-1  justify-center items-center px-4 py-2 gap-1 ">
                <ClippedView width={size.width / 2 + 0.5} height={size.height} backgroundColor="#918F8F" clipPathId="Engineclip6" slug="variant6" />
                  <Text className="text-[1rem]">Previous</Text>
                </View>

                <View className=" text-white flex-1 justify-center items-center px-3 py-2 gap-2 ">
                <ClippedView width={size.width / 2} height={size.height} backgroundColor="#CE2028" clipPathId="Engineclip7" slug="variant7" />
                  <Text className="text-[1rem]">Home</Text>
                </View>
               
              </View>

              <EngineComponent type="100year" />
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
