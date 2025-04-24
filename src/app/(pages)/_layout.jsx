import { Stack } from "expo-router";
import React from "react";
import { StatusBar, useColorScheme } from "react-native";

export default function HomeLayout() {
  // const theme = useColorScheme(); // Detect system dark/light mode

  return (
    <>
      {/* Hide status bar only on fullscreen screens */}
      <StatusBar hidden={true}  />
      
      <Stack>
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="mapPage" options={{ headerShown: false, presentation: "modal" }} />
        <Stack.Screen name="hundred-years" options={{ headerShown: false }} />
        <Stack.Screen name="products" options={{ headerShown: false }} />
        <Stack.Screen name="startScreen" options={{ headerShown: false }} />
        <Stack.Screen name="experience3d" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
