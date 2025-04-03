import { View, Text, Image, ImageBackground, LogBox } from "react-native";
import React, { Suspense, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import yearImages from "../constants/yearImages";
import CloseButton from "./CloseButton ";
import EngineComponent from "./EngineComponent";
import ClippedView from "./ClippedView";
import CustomCloseButton from "./buttons/CustomCloseButton";
import Loader from "./3dModels/Loader";
import { Test3d } from "./3dModels/Test3d";
import useControls from "r3f-native-orbitcontrols";
import { Canvas } from "@react-three/fiber";
import Trigger from "./3dModels/Trigger";
LogBox.ignoreLogs(["Cannot read property 'trim' of undefined"]);
export default function ProductEngineDetails({handleEngineClose,engineData}) {
    const [size, setSize] = useState({ width: 0, height: 0 });
    const [show3DModel, setShow3DModel] = useState(false);
    const [OrbitControls, events] = useControls();
  const [loading, setLoading] = useState(false);
  const handleClose = () => {
    console.log("ok");
  };
  return (
    <SafeAreaView className="bg-white">
      {show3DModel ? (<View className="bg-black flex-1 w-full h-screen absolute z-[50]">
              <View className="absolute top-3 right-3 z-50">
              <CustomCloseButton onPress={()=> setShow3DModel(false)}   />
              </View>
              {loading && (    
          <Loader />
      )}
              <View style={{ flex: 1 }} {...events}>
             
                <Canvas>
                <OrbitControls enablePan={false} enableRotate={true} />
                <ambientLight intensity={1.5} />
                  <directionalLight position={[5, 5, 5]} intensity={1} />
                  <Suspense fallback={<Trigger setLoading={setLoading} />}>
                  <Test3d position={[0, 0, 0]} setLoading={setLoading} />
      
                  </Suspense>
                </Canvas>
              </View>
            </View>) : ( <View className=" w-full h-screen overflow-hidden relative">
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
       

              <EngineComponent type="product" engineData={engineData} onEngineClose={handleEngineClose} setShow3DModel={setShow3DModel} setLoading={setLoading} />
            </View>
          </View>
        </ImageBackground>
      </View>)}
    </SafeAreaView>
  );
}
