import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import yearImages from "../../constants/yearImages";
import CloseButton from "../../components/CloseButton ";
import EngineComponent from "../../components/EngineComponent";
import ClippedView from "../../components/ClippedView";
import Svg, { Path } from "react-native-svg";
import { useLocalSearchParams, useRouter } from "expo-router";
import CustomCloseButton from "../../components/buttons/CustomCloseButton";
import yearSlidedata from "../../constants/yearSlideData";
import CustomDialog from "../../components/CustomDialog";

export default function yearEngineDetails() {
  const { year, targetId, engineData, mapData, isFleetData } = useLocalSearchParams();
  const numericId = Number(targetId);
  const parsedEngineData = engineData ? JSON.parse(engineData) : null;
  const parsedMapData = mapData ? JSON.parse(mapData) : null;
  const matchedYearObject = yearSlidedata.find(e => e.year === year);
  const data = matchedYearObject
    ? matchedYearObject.innerSlidesData.find(slide => slide.id === numericId)
    : null;
  const router = useRouter();
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogImages, setDialogImages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const handleImageClick = (index, img) => {
    setDialogImages(img);
    setStartIndex(index);
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    router.back()
  };

  const onPressHome = () => {
    router.push("home")
  }


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
                <CustomCloseButton onPress={handleClose} />
              </View>
            </View>
            <View className="relative ">
              <View className="absolute flex flex-row bottom-0 right-0 clipped-button-2 z-40 w-[200px]" onLayout={(event) => {
                const { width, height } = event.nativeEvent.layout;
                setSize({ width, height });
              }}>
                <TouchableOpacity onPress={handleClose}>
                  <View className=" text-white flex-1 flex-row justify-center items-center px-4 py-2 gap-2">
                    <ClippedView width={size.width / 2 + 5} height={size.height} backgroundColor="#918F8F" clipPathId="Engineclip6" slug="variant6" />
                    <Image className="w-[10px] h-[10px]" source={yearImages.leftArrow} resizeMode="contain" />
                    <Text className="text-[1rem] text-white">Previous</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={onPressHome}>

                  <View className=" text-white flex-1 flex-row justify-center items-center px-3 py-2 gap-2 " >
                    <ClippedView width={size.width / 2} height={size.height} backgroundColor="#CE2028" clipPathId="Engineclip7" slug="variant7" />
                    <Svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="none"
                      viewBox="0 0 14 16"
                    >
                      <Path
                        fill="#fff"
                        d="M0 16V5.5L7 .212 14 5.5V16H8.808V9.616H5.192V16z"
                      ></Path>
                    </Svg>
                    <Text className="text-[1rem] text-white">Home</Text>
                  </View>
                </TouchableOpacity>

              </View>

              <EngineComponent type="100year" onImageClick={handleImageClick} yearEngineData={parsedEngineData} mapData={parsedMapData} isFleetData={isFleetData} />
            </View>
          </View>
        </ImageBackground>

        {isDialogOpen && (
          <CustomDialog
            images={dialogImages}
            startIndex={startIndex}
            onClose={() => setIsDialogOpen(false)}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
