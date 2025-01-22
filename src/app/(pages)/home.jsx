import {Link} from "expo-router";
import {View, Text} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";

export default function home()
{
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Link href={"/"}>Go back</Link>
    </SafeAreaView>
  )
}
