import { View, Text } from 'react-native'
import { useVideoPlayer, VideoView } from 'expo-video';
import React from 'react'
import { TouchableOpacity } from 'react-native';

export default function VideoComponent({videoUrl,videoClass,togglePlayback,isPlay=true,isControl=true}) {
    // console.log("videourl",videoUrl);
      const videoSource = videoUrl
    
      const player = useVideoPlayer(videoSource, player => {
          player.loop = true;
          player.muted = true;
        if (isPlay) {
      player.play();
    }
      
      
        });
  return (
    <View style={videoClass}>
     
         <VideoView style={videoClass}  player={player} nativeControls={isControl} contentFit="cover" />
 
     
    </View>
  )
}