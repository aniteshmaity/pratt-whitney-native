import { Stack } from "expo-router";
import React from 'react'
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function PageLayout() {
  return (
    <>
      <GestureHandlerRootView >
        <StatusBar hidden={true} />
        <Stack
          screenOptions={{
            headerShown: false, // Hides the header for all subpages
          }}
        />
      </GestureHandlerRootView></>
  )
}
