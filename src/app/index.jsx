import {Link} from "expo-router";
import {StatusBar} from "expo-status-bar";
import {View, Text} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";

export default function App()
{
  return (
    <SafeAreaView>
      <View className="p-6">
        <Text className="text-2xl font-semibold text-teal-500">App</Text>
        <Link
          href={"/home"}
          className="text-amber-500"
        >Go to Home</Link>
      </View>

      {/* Status bar config */}
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
