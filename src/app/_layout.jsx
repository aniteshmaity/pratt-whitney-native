import React, {useEffect, useState} from 'react'
import "../styles/global.css";
import { useFonts } from "expo-font";
import {  Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import PWSplashScreen from './components/PWSplashScreen';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


export default function RootLayout()
{
  const [isLoading, setIsLoading] = useState(true);
  const [loaded, error] = useFonts({
   
    "Frutiger-bold": require("../assets/fonts/Frutiger_bold.ttf"),
    "Frutiger": require("../assets/fonts/Frutiger.ttf"),
    "Frutige-Black": require("../assets/fonts/Frutiger-Black.otf"),
    "ObjektivVF_Trial_Wght": require("../assets/fonts/ObjektivVF_Trial_Wght.ttf"),
    "ObjektivVF_Blk": require("../assets/fonts/objektiv_Blk.ttf"),
    "ObjektivVF_SBd": require("../assets/fonts/objektiv_SBd.ttf"),
    "ObjektivVF_Md": require("../assets/fonts/objektiv_Md.ttf"),
    "ObjektivMk1_Bold": require("../assets/fonts/ObjektivMk1_Trial_Bd.ttf"),
    "ObjektivMk2_Black": require("../assets/fonts/ObjektivMk2_Trial_Blk.ttf"),
    "ObjektivMk2_SemiBold": require("../assets/fonts/ObjektivMk2_Trial_SBd.ttf"),
    "ObjektivMk2_Medium": require("../assets/fonts/ObjektivMk1_Trial_Md.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (loaded) {
      SplashScreen.hideAsync();
      setTimeout(() =>
        {
          setIsLoading(false)
        }, 1000)
    }
  }, [loaded, error]);

  if (!loaded) {
    return null;
  }

  if (!loaded && !error) {
    return null;
  }
  return (
    <>
      {

        <GestureHandlerRootView>
          <Stack
            screenOptions={{
              headerShown: false,  // Global header configuration
              animation: 'slide_from_right',  // Optional: adds smooth transition
            }}
          >
            <Stack.Screen
              name="index"
            />
            <Stack.Screen
              name="(pages)"
            />
            <Stack.Screen 
              name="not-found"
            />
          </Stack>
        </GestureHandlerRootView>
      }
    </>
  )
}
