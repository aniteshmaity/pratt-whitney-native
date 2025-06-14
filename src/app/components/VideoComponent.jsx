import { View, Text } from 'react-native'
import { useVideoPlayer, VideoView } from 'expo-video';
import React from 'react'

export default function VideoComponent({videoUrl,videoClass,isPlay=true}) {
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
    <View>
      <VideoView style={videoClass}  player={player} nativeControls={true} contentFit="cover" />
    </View>
  )
}