import { View, Dimensions } from 'react-native';
import React from 'react';

const ProductSkeleton = () => {
  const screenWidth = Dimensions.get('window').width;

  // Calculate card widths
  const sideCardWidth = screenWidth * 0.08; // ~22% of screen width
  const centerCardWidth = screenWidth * 0.35; // ~35% of screen width

  // Calculate card heights proportionally
  const sideCardHeight = sideCardWidth ; // Aspect ratio: 4:6
  const centerCardHeight = centerCardWidth; // Square card

  return (
    <View className="flex-row justify-center items-center   gap-5">
      {/* 2 Left small cards */}
      <View style={{ width: sideCardWidth, height: sideCardHeight }} className="bg-gray-300 rounded-xl animate-pulse" />
     
     
    </View>
  );
};

export default ProductSkeleton;
