
import React from 'react'
import { useEffect } from "react";
import "../styles/global.css";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


export default function RootLayout()
{

  const [fontsLoaded, error] = useFonts({
   
    "Frutiger-bold": require("../assets/fonts/Frutiger_bold.ttf"),
    "Frutiger": require("../assets/fonts/Frutiger.ttf"),
    "Frutige-Black": require("../assets/fonts/Frutiger-Black.otf"),
    "ObjektivVF_Trial_Wght": require("../assets/fonts/ObjektivVF_Trial_Wght.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name="(pages)" options={{headerShown: false}}/>
    </Stack>
  )
}
