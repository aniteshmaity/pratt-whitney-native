import { View, Text, Image, ImageBackground, LogBox } from "react-native";
import React, { Suspense, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import yearImages from "../constants/yearImages";
import EngineComponent from "./EngineComponent";
import CustomCloseButton from "./buttons/CustomCloseButton";
import Loader from "./3dModels/Loader";
import CustomDialog from "./CustomDialog";
LogBox.ignoreLogs(["Cannot read property 'trim' of undefined"]);

function ProductEngineDetails({ handleEngineClose, engineData }) {
  const [show3DModel, setShow3DModel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogImages, setDialogImages] = useState([]);

  const [startIndex, setStartIndex] = useState(0);
  const handleImageClick = (index, img) => {
    setDialogImages(img);
    setStartIndex(index);
    setIsDialogOpen(true);
    console.log("handleclick");
  };

  return (
    <SafeAreaView className="bg-white">
      {show3DModel ? (<View className="bg-black flex-1 w-full h-screen absolute z-[50]">
        <View className="absolute top-3 right-3 z-50">
          {/* <CustomCloseButton onPress={handleEngineClose}   /> */}
        </View>
        {loading && (
          <Loader />
        )}

      </View>) : (<View className=" w-full h-screen overflow-hidden relative">
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
                <CustomCloseButton onPress={handleEngineClose} />
              </View>
            </View>
            <View className="relative ">


              <EngineComponent type="product" engineData={engineData} onEngineClose={handleEngineClose} onImageClick={handleImageClick} setShow3DModel={setShow3DModel} setLoading={setLoading} />
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
      </View>)}
    </SafeAreaView>
  );
}

export default React.memo(ProductEngineDetails)