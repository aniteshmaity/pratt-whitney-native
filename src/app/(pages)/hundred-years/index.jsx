import {Link} from "expo-router";
import {Text} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";

export default function HundredYears()
{
  return (
    <SafeAreaView>
      <Text>HundredYears</Text>
      <Link href={"/home"}>Go back</Link>
    </SafeAreaView>
  )
}
