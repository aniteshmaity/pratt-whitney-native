import {View, Image} from 'react-native'
import React from 'react'

import yearImages from '../constants/yearImages';

export default function PWSplashScreen()
{
  return (
    <View className="flex justify-center items-center h-full w-full bg-white">
      <Image source={yearImages.pwLogo} resizeMode="contain" className={"max-w-80 max-h-28"} />
      
    </View>
  )
}