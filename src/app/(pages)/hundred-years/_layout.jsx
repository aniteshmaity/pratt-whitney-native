import {Stack} from "expo-router";
import {View, Text} from 'react-native'
import React from 'react'

export default function HundredYearsLayout()
{
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
    </Stack>
  )
}
