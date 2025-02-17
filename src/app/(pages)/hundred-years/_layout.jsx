import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function HundredYearsLayout() {
  return (
    <>
       <GestureHandlerRootView >
      {/* StatusBar Overlapping Content */}
      <StatusBar hidden={true} /> 

      {/* Stack Navigator without SafeAreaView */}
      <Stack
        screenOptions={{
          headerShown: false, // Hides the header for all subpages
        }}
      />
      </GestureHandlerRootView>
    </>
  );
}
