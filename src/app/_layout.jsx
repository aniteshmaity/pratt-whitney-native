import {Stack} from "expo-router";
import React from 'react'
import "../styles/global.css";

export default function RootLayout()
{
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name="(pages)" options={{headerShown: false}}/>
    </Stack>
  )
}
