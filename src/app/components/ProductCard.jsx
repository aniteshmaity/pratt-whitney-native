import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Animated, { Easing, withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import yearImages from '../constants/yearImages';
import ClippedView from './ClippedView';
import boxShadow from '../constants/boxShadow';

export default function ProductCard({handleExploreClick}) {
  const [activeEngineIndex, setActiveEngineIndex] = useState(0);
  const engines = [
    { id: 'gtf', img: yearImages.v2500_1, title: 'GTF Engine', description: "Powering today's Most efficient single aircraft" },
    { id: 'v2500_1', img: yearImages.v2500_1, title: 'v2500_1', description: "Powering today's Most efficient single aircraft" },
    { id: 'v2500_2', img: yearImages.v2500_2, title: 'v2500_2', description: "Powering today's Most efficient single aircraft" },
    { id: 'v2500_3', img: yearImages.v2500_3, title: 'v2500_3', description: "Powering today's Most efficient single aircraft" },
  ];

  const contentOpacity = engines?.map((_, index) => useSharedValue(index === activeEngineIndex ? 1 : 0));
  const contentTranslateX =  engines?.map((_, index) => useSharedValue(index === activeEngineIndex ? 0 : -50));
  const engineScale = engines?.map((_, index) => useSharedValue(index === activeEngineIndex ? 1.3 : 1));

  const handleEngineClick = (index) => {

    if (index === activeEngineIndex) return;

    const isBefore = index < activeEngineIndex;
    const outgoingDirection = isBefore ? 50 : -50;
    const incomingStart = isBefore ? -50 : 50;

    // Animate outgoing content
    contentOpacity[activeEngineIndex].value = withTiming(0, { duration: 300, easing: Easing.out(Easing.ease) });
    contentTranslateX[activeEngineIndex].value = withTiming(outgoingDirection, { duration: 300, easing: Easing.out(Easing.ease) });

    // Animate outgoing engine scale back to normal
    engineScale[activeEngineIndex].value = withTiming(1, { duration: 300, easing: Easing.out(Easing.ease) });

    setTimeout(() => {
      setActiveEngineIndex(index);

      // Animate incoming content
      contentTranslateX[index].value = incomingStart;
      contentOpacity[index].value = withTiming(1, { duration: 300, easing: Easing.out(Easing.ease) });
      contentTranslateX[index].value = withTiming(0, { duration: 300, easing: Easing.out(Easing.ease) });

      // Animate new engine scale up
      engineScale[index].value = withTiming(1.3, { duration: 300, easing: Easing.out(Easing.ease) });
    }, 300);
  };

  // const animatedContentStyle = useAnimatedStyle(() => ({
  //   opacity: contentOpacity.value,
  //   transform: [{ translateX: contentTranslateX.value }],
  // }));
  const animatedContentStyle = (index) =>
    useAnimatedStyle(() => ({
      opacity: contentOpacity[index].value,
      transform: [{ translateX: contentTranslateX[index].value }]
    }));

  // const animatedEngineStyle = (index) =>
  //   useAnimatedStyle(() => ({
  //     opacity: 1,
  //     transform: [{ scale: engineScale[index].value }]
  //   }));
    
  
  return (
    <View className="flex flex-row gap-8 items-start justify-start pl-[10px] py-[20px]">
      {engines.map((engine, index) => (
        <View key={engine.id} className="flex flex-row items-center gap-[50px] relative">
          {/* Engine Image */}
          <View className="flex items-center">
            <Animated.View
              style={[boxShadow("#7e78783d", 1, 0, 0.2, 7, 3)]}
              className={`rounded-full scale-[0.9] w-[82px] h-[82px] z-40 relative flex flex-row justify-center items-center bg-white ${
                index === activeEngineIndex ? 'scale-125' : ''
              }`}
            >
              <TouchableOpacity onPress={() => handleEngineClick(index)}>
                <View className="rounded-full w-[68px] h-[68px]  overflow-hidden" style={{...boxShadow("#7e78783d", 1, 0, 0.2, 7, 3)}}>
                  <Image source={engine.img} className="w-full h-full" resizeMode="cover" style={{width:"100%", height:"100%"}}  />
                </View>
              </TouchableOpacity>
            </Animated.View>
            <Text className="text-[#D91027] font-ObjektivMk2Black text-[1rem] bottom-0">
              {index === activeEngineIndex ? null : engine.title}
            </Text>
          </View>

          {/* Engine Content */}
          {index === activeEngineIndex && (
            <Animated.View
              style={[animatedContentStyle(index)]}
              className="bg-white p-3 rounded-md"
            >
              <View className="flex gap-[8px]">
                <Text className="text-[1rem] font-ObjektivMk2Black">{engine.title}</Text>
                <Text className="text-[8px]  max-w-[117px] font-frutigerReg">{engine.description}</Text>
                <TouchableOpacity onPress={handleExploreClick}>
                  
                  <ClippedView width={98} height={20} backgroundColor="#D91027" clipPathId="EnginePclip1" slug="variant8"  />
                  <Text className=" text-white text-[8px] p-1 w-[80%] text-center">Explore</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          )}
        </View>
      ))}
    </View>
  );
}