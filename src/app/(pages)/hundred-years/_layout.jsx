import {Stack} from "expo-router";
import React from 'react'

import { useRoute, useNavigation } from '@react-navigation/native';

export default function HundredYearsLayout()
{
 
  return (
    
    <Stack
    screenOptions={{
      headerShown: false, // Hides the header for all subpages
    }}
  />
  )
}
