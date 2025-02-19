import React, {useEffect, useState} from 'react'
import "../styles/global.css";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import PWSplashScreen from './components/PWSplashScreen';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


export default function RootLayout()
{
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded, error] = useFonts({
   
    "Frutiger-bold": require("../assets/fonts/Frutiger_bold.ttf"),
    "Frutiger": require("../assets/fonts/Frutiger.ttf"),
    "Frutige-Black": require("../assets/fonts/Frutiger-Black.otf"),
    "ObjektivVF_Trial_Wght": require("../assets/fonts/ObjektivVF_Trial_Wght.ttf"),
    "ObjektivVF_Blk": require("../assets/fonts/objektiv_Blk.ttf"),
    "ObjektivVF_SBd": require("../assets/fonts/objektiv_SBd.ttf"),
    "ObjektivVF_Md": require("../assets/fonts/objektiv_Md.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
      setTimeout(() =>
        {
          setIsLoading(false)
        }, 1000)
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <>
      {
        // isLoading ? <PWSplashScreen/> : 
        <GestureHandlerRootView>
          <Stack className="bg-white">
            <Stack.Screen
              name="index"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(pages)"
              options={{ headerShown: false }}
            />
          </Stack>
        </GestureHandlerRootView>
      }
    </>
  )
}
