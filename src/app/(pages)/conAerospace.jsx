import { View, Text } from 'react-native'
import React from 'react'
import VideoComponent from '../components/VideoComponent'
import homeImages from '../constants/homeImages'
import CustomCloseButton from '../components/buttons/CustomCloseButton'
import { useRouter } from 'expo-router'

export default function conAerospace() {

      const router = useRouter();

    const handleClose = () => {
 
       router.push({
      pathname: "/home",
      params: { 
        targetIndex: 3,
      }
    });
      }
    
  return (
    <View className='relative'>
        <View className="flex-row  gap-4 absolute top-5 right-2 z-40">
             <CustomCloseButton onPress={handleClose} />
        </View>
        
    <VideoComponent videoUrl={homeImages.aerospaceVideo} isPlay={false} videoClass={{ width: '100%', height: "100%" }} />
    </View>
  )
}