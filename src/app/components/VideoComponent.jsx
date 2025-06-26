import { View, Text } from 'react-native'
import { useVideoPlayer, VideoView } from 'expo-video';
import React from 'react'
import { TouchableOpacity } from 'react-native';

export default function VideoComponent({ videoUrl, videoClass, togglePlayback, contentFit = 'cover', isPlay = false, isControl = true }) {

  const player = useVideoPlayer(videoUrl, player => {
    player.loop = true;
    player.muted = true;

    if (isPlay) {
      player.play();
    } else {
      player.pause();
    }
  });

  return (
    <View style={videoClass}>

      <VideoView style={videoClass} player={player} nativeControls={isControl} contentFit={contentFit} />

    </View>
  )
}