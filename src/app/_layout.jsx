import {View, Text} from 'react-native'
import React from 'react'
import "../styles/global.css";

export default function HomeLayout()
{
  return (
    <View className="flex items-center w-full">
      <Text className="text-cyan-700 text-2xl font-semibold">Current Orientation</Text>
    </View>
  )
}
