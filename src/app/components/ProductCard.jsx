import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Animated, { Easing, withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import ClippedView from './ClippedView';
import boxShadow from '../constants/boxShadow';

export default function ProductCard({handleExploreClick, engines = []}) {
  const [activeEngineIndex, setActiveEngineIndex] = useState(0);
  const MAX_ENGINES = 8;

  // Create all shared values at the top level
  const opacityValues = Array(MAX_ENGINES).fill(0).map(() => useSharedValue(0));
  const translateXValues = Array(MAX_ENGINES).fill(0).map(() => useSharedValue(-50));

  // Create all animated styles at the top level
  const animatedStyles = Array(MAX_ENGINES).fill(0).map((_, index) => 
    useAnimatedStyle(() => ({
      opacity: opacityValues[index].value,
      transform: [{ translateX: translateXValues[index].value }]
    }))
  );

  useEffect(() => {
    // Reset active index
    setActiveEngineIndex(0);

    // Reset all animations
    opacityValues.forEach(opacity => {
      opacity.value = withTiming(0, { duration: 0 });
    });
    translateXValues.forEach(translateX => {
      translateX.value = withTiming(0, { duration: 0 });
    });

    // Animate first engine if available
    if (engines.length > 0) {
      requestAnimationFrame(() => {
        opacityValues[0].value = withTiming(1, { duration: 300 });
        translateXValues[0].value = withTiming(0, { duration: 300 });
      });
    }
  }, [engines]);

  const handleEngineClick = (index) => {
    if (index >= engines.length || index === activeEngineIndex) return;

    const isBefore = index < activeEngineIndex;
    const outgoingDirection = isBefore ? 50 : -50;
    const incomingStart = isBefore ? -50 : 50;

    // Animate out current
    opacityValues[activeEngineIndex].value = withTiming(0, { duration: 300 });
    translateXValues[activeEngineIndex].value = withTiming(outgoingDirection, { duration: 300 });

    setTimeout(() => {
      setActiveEngineIndex(index);

      // Animate in new
      translateXValues[index].value = incomingStart;
      opacityValues[index].value = withTiming(1, { duration: 300 });
      translateXValues[index].value = withTiming(0, { duration: 300 });
    }, 300);
  };

  if (!engines || engines.length === 0) return null;

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="w-[90%]">
      <View className="flex flex-row gap-8 items-start justify-start pl-[10px] py-[20px] w-[60%] ">
        {engines.map((engine, index) => (
          <View key={engine?.id || index} className="flex flex-row items-center gap-[50px] relative">
            <View className="flex items-center">
              <Animated.View
                style={[boxShadow("#7e78783d", 1, 0, 0.2, 7, 3)]}
                className={`rounded-full scale-[0.9] w-[82px] h-[82px] z-40 relative flex flex-row justify-center items-center bg-white ${
                  index === activeEngineIndex ? 'scale-125' : ''
                }`}
              >
                <TouchableOpacity onPress={() => handleEngineClick(index)}>
                  <View className="rounded-full w-[68px] h-[68px] overflow-hidden" style={{...boxShadow("#7e78783d", 1, 0, 0.2, 7, 3)}}>
                    <Image source={engine?.img} className="w-full h-full" resizeMode="contain" />
                  </View>
                </TouchableOpacity>
              </Animated.View>
              <Text className="text-[#D91027] font-ObjektivMk2Black text-[1rem] bottom-0">
                {index === activeEngineIndex ? null : engine?.title}
              </Text>
            </View>

            {index === activeEngineIndex && (
              <Animated.View
                style={[animatedStyles[index]]}
                className="bg-white p-3 rounded-md"
              >
                <View className="flex gap-[8px]">
                  <Text className="text-[1rem] font-ObjektivMk2Black">{engine?.title}</Text>
                  <Text className="text-[8px] max-w-[117px] font-frutigerReg">{engine?.description}</Text>
                  <TouchableOpacity onPress={()=> handleExploreClick(engine.details)}>
                    <ClippedView width={98} height={20} backgroundColor="#D91027" clipPathId="EnginePclip1" slug="variant8" />
                    <Text className="text-white text-[8px] p-1 w-[80%] text-center">Explore</Text>
                  </TouchableOpacity>
                </View>
              </Animated.View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}