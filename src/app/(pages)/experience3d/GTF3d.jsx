// import { View, Text, Image, ImageBackground, LogBox } from "react-native";
// import React, { Suspense, useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";


// import useControls from "r3f-native-orbitcontrols";
// import { Canvas } from "@react-three/fiber";
// import { Test3d } from "../../components/3dModels/Test3d";
// import Loader from "../../components/3dModels/Loader";
// import CustomCloseButton from "../../components/buttons/CustomCloseButton";
// import Trigger from "../../components/3dModels/Trigger";
// import { Gtf3d } from "../../components/3dModels/Gtf3d";

// LogBox.ignoreLogs(["Cannot read property 'trim' of undefined"]);
// export default function GTF3d({handleEngineClose,engineData}) {
//     const [size, setSize] = useState({ width: 0, height: 0 });
//     const [show3DModel, setShow3DModel] = useState(true);
//     const [OrbitControls, events] = useControls();
//   const [loading, setLoading] = useState(true);
//   console.log("loafding",loading);
//   const handleClose = () => {
//     console.log("ok");
//   };
//   return (
//     <SafeAreaView className="">
//     <View className="bg-black flex-1 w-full h-screen absolute z-[50]">
//               <View className="absolute top-3 right-3 z-50">
//               <CustomCloseButton onPress={()=> setShow3DModel(false)}   />
//               </View>
//               {loading && (    
//           <Loader />
//       )}
//               <View style={{ flex: 1 }} {...events}>
             
//                 <Canvas>
//                 <OrbitControls enablePan={false} enableRotate={true} />
//                 <ambientLight intensity={1.5} />
//                   <directionalLight position={[5, 5, 5]} intensity={1} />
//                   <Suspense fallback={null}>
//                   <Gtf3d position={[0, 0, 0]} setLoading={setLoading} />
      
//                   </Suspense>
//                 </Canvas>
//               </View>
//             </View>
//     </SafeAreaView>
//   );
// }