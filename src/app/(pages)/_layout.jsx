import {Stack} from "expo-router";
import {View, Text} from 'react-native'
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
