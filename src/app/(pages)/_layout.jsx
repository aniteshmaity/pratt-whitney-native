import {Stack} from "expo-router";
import React from 'react'

export default function HomeLayout()
{
  return (
    <Stack>
      <Stack.Screen name="home" options={{headerShown: false}}/>
      <Stack.Screen name="hundred-years" options={{headerShown: false}}/>
      <Stack.Screen name="products" options={{headerShown: false}}/>
    </Stack>
  )
}
