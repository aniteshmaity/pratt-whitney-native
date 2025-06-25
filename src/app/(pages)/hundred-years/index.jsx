// import { Link } from "expo-router";
// import { Text, Image } from "react-native";
// import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import yearImages from "../../constants/yearImages";
// export default function HundredYears() {
//   return (
//     <SafeAreaView>
//       <Text clasName="">HundredYears</Text>
//       <Image
//         source={yearImages.pwLogo}
//         alt="homeLogo"
//         resizeMode="contain"
//         className="max-w-64 max-h-16"
//       />
//       <Link href={"/home"}>Go back</Link>
//     </SafeAreaView>
//   );
// }
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import yearImages from "../../constants/yearImages";

import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, withSpring } from "react-native-reanimated";
import CloseButton from "../../components/CloseButton ";
import { Link } from "expo-router";
import { useRouter } from 'expo-router';
import CustomCloseButton from "../../components/buttons/CustomCloseButton";
import { useVideoPlayer, VideoView } from 'expo-video';
import MyTextBtn from "../../components/buttons/MyTextBtn";
import PrevNextButton from "../../components/buttons/PrevNextButton";
import CustomTextButton from "../../components/buttons/CustomTextButton";
import homeImages from "../../constants/homeImages";
import VideoComponent from "../../components/VideoComponent";
const { width } = Dimensions.get('window');

const HundredYears = () => {
  console.log("widhh1--", width);

  const videoRef = useRef(null);
  const divRefs = useRef([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const router = useRouter();


  const videoSource = homeImages.pw100HeroVideo

  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.muted = true;
    player.play();
  });





  const height = useSharedValue(0);
  // Shared values for position and opacity
  const firstX = useSharedValue(0); // Initial: 0%
  const secondX = useSharedValue(33.33); // Initial: 33.33%
  const thirdX = useSharedValue(66.665); // Initial: 66.665%
  //  const paraY = useSharedValue(0);
  //  const paraOpacity = useSharedValue(1);
  //  const para2Opacity = useSharedValue(0);
  //  const paraBottom = useSharedValue(0);
  console.log("activeindex", activeIndex);
  const easing = Easing.bezier(0.47, 0, 0.23, 1.38);
  const movetranslateX = useSharedValue(300); // Start off-screen (right)
  const moveopacity = useSharedValue(1); // Fully visible initially
  const textopacity = useSharedValue(1);
  const data = [0, 1, 2];

  const animateOpacity1 = data.map(() => useSharedValue(1));
  const animateTy1 = data.map(() => useSharedValue(0));
  const animateOpacity2 = data.map(() => useSharedValue(0));
  const animateTy2 = data.map(() => useSharedValue(300));
  // Function to reset all animations
  const resetAnimations = (index) => {
    firstX.value = withTiming(0, { duration: 500, easing });
    secondX.value = withTiming(33.33, { duration: 500, easing });
    thirdX.value = withTiming(66.665, { duration: 500, easing });
    // animationStates.opacity.value[index] = withTiming(1, { duration: 800, easing });
    // animationStates.translateY.value[index] = withTiming(0, { duration: 800, easing });
    // animationStates2.opacity.value[index] = withTiming(0, { duration: 800, easing });
    // animationStates2.bottom.value[index] = withTiming(0, { duration: 800, easing });
    animateOpacity1[index].value = withTiming(1, { duration: 600, easing });
    animateTy1[index].value = withTiming(0, { duration: 600, easing });
    animateOpacity2[index].value = withTiming(0, { duration: 600, easing });
    animateTy2[index].value = withTiming(300, { duration: 600, easing });
    moveopacity.value = withTiming(1, {
      duration: 800,
      easing: Easing.out(Easing.exp),
    });
  };

  const handleMoreClick = (index) => {
    if (index > 2 || index < 0) return;

    setActiveIndex(index);
    moveopacity.value = withTiming(0, {
      duration: 800,
      easing: Easing.out(Easing.exp),
    });
    if (index === 0) {
      // Move second and third to the right
      secondX.value = withTiming(90, { duration: 800, easing });
      thirdX.value = withTiming(95, { duration: 800, easing });
      // Animate paragraph
      //  paraY.value = withTiming(20, { duration: 800, easing });
      //  paraOpacity.value = withTiming(0, { duration: 800, easing });
      //  para2Opacity.value = withTiming(1, { duration: 800, easing });
      //  paraBottom.value = withTiming(10, { duration: 800, easing });
      //      animationStates.opacity.value[index] = withTiming(0, { duration: 800, easing });
      // animationStates.translateY.value[index] = withTiming(200, { duration: 800, easing });
      // animationStates2.opacity.value[index] = withTiming(1, { duration: 800, easing });
      // animationStates2.bottom.value[index] = withTiming(100, { duration: 800, easing });
      animateOpacity1[index].value = withTiming(0, { duration: 600, easing });
      animateTy1[index].value = withTiming(200, { duration: 600, easing });
      animateOpacity2[index].value = withTiming(1, { duration: 600, easing });
      animateTy2[index].value = withTiming(0, { duration: 600, easing });

    } else if (index === 1) {
      // Move first to the left, third to the right
      firstX.value = withTiming(0, { duration: 800, easing });
      secondX.value = withTiming(5, { duration: 800, easing });
      thirdX.value = withTiming(95, { duration: 800, easing });

      // Animate paragraph
      // paraY.value = withTiming(-30, { duration: 800, easing });
      // paraOpacity.value = withTiming(0, { duration: 800, easing });
      // para2Opacity.value = withTiming(1, { duration: 800, easing });
      // paraBottom.value = withTiming(20, { duration: 800, easing });

      // animationStates.opacity.value[index] = withTiming(0, { duration: 800, easing });
      // animationStates.translateY.value[index] = withTiming(300, { duration: 800, easing });
      // animationStates2.opacity.value[index] = withTiming(1, { duration: 800, easing });
      // animationStates2.bottom.value[index] = withTiming(200, { duration: 800, easing });
      animateOpacity1[index].value = withTiming(0, { duration: 600, easing });
      animateTy1[index].value = withTiming(300, { duration: 600, easing });
      animateOpacity2[index].value = withTiming(1, { duration: 600, easing });
      animateTy2[index].value = withTiming(0, { duration: 600, easing });
    } else if (index === 2) {
      // Move first and second to the left
      firstX.value = withTiming(0, { duration: 800, easing });
      secondX.value = withTiming(5, { duration: 800, easing });
      thirdX.value = withTiming(10, { duration: 800, easing });

      // Animate paragraph
      //  paraY.value = withTiming(-40, { duration: 800, easing }, { duration: 800, easing });
      //  paraOpacity.value = withTiming(0, { duration: 800, easing }, { duration: 800, easing });
      //  para2Opacity.value = withTiming(1, { duration: 800, easing }, { duration: 800, easing });
      //  paraBottom.value = withTiming(20, { duration: 800, easing }, { duration: 800, easing });

      //  animationStates.opacity.value[index] = withTiming(0, { duration: 800, easing });
      //  animationStates.translateY.value[index] = withTiming(400, { duration: 800, easing });
      //  animationStates2.opacity.value[index] = withTiming(1, { duration: 800, easing });
      //  animationStates2.bottom.value[index] = withTiming(200, { duration: 800, easing });
      animateOpacity1[index].value = withTiming(0, { duration: 600, easing });
      animateTy1[index].value = withTiming(400, { duration: 600, easing });
      animateOpacity2[index].value = withTiming(1, { duration: 600, easing });
      animateTy2[index].value = withTiming(0, { duration: 600, easing });
    }
  };
  const handleContentClose = (index) => {
    console.log("is clicked !!");
    resetAnimations(index);
    setActiveIndex(null);
  };
  const handleClose = () => {
    router.back();
    // router.push("home")
  }
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
    height.value = isExpanded ? withTiming(0) : withTiming(150); // Adjust height based on text length
  };
  const readMoreAnimatedStyle = useAnimatedStyle(() => ({
    height: height.value,
    opacity: height.value > 0 ? 1 : 0,
    overflow: "hidden",
  }));

  // const toggleReadMore = () => {
  //   setIsExpanded(!isExpanded);
  // };

  const goToYearCourasal = () => {
    // Navigate to another screen or action
    router.push('/hundred-years/yearCarousal')
  };


  // Animated styles for each div using percentage values
  const firstStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: `${firstX.value}%` }], // Using percentage
  }));

  const secondStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: `${secondX.value}%` }], // Using percentage
  }));

  const thirdStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: `${thirdX.value}%` }], // Using percentage
  }));
  const paraStyle = (index) => {

    return useAnimatedStyle(() => ({
      transform: [{ translateY: `${paraY.value}%` }],
      opacity: paraOpacity.value,
    }));
  }

  // const paraStyle = useAnimatedStyle(() => ({
  //   transform: [{ translateY: `${paraY.value}%` }],
  //   opacity: paraOpacity.value,
  // }));

  const para2Style = (index) => {
    if (index === 1) {
      console.log("my first");
    }
    return useAnimatedStyle(() => ({
      bottom: paraBottom.value + "%",
      opacity: para2Opacity.value,
    }));
  }
  const animatedStyles = (idx) => {
    return useAnimatedStyle(() => ({
      transform: [{ translateY: `${animateTy1[idx].value}%` }],
      opacity: animateOpacity1[idx].value,
    }));
  };
  const animatedStyles2 = (idx) => {
    return useAnimatedStyle(() => ({
      transform: [{ translateY: `${animateTy2[idx].value}%` }],
      opacity: animateOpacity2[idx].value,
    }));
  };

  const handelSlideChnage = (index, type) => {

    if (type === "prev") {
      if (index == 0) return;

      handleMoreClick(index - 1);
      animateOpacity1[index].value = withTiming(1, { duration: 600, easing });
      animateTy1[index].value = withTiming(0, { duration: 600, easing });
      animateOpacity2[index].value = withTiming(0, { duration: 600, easing });
      animateTy2[index].value = withTiming(300, { duration: 600, easing });
    } else {
      if (index > 1) return;
      handleMoreClick(index + 1)
      // firstX.value = withTiming(0, { duration: 500, easing });
      // secondX.value = withTiming(33.33, { duration: 500, easing });
      // thirdX.value = withTiming(66.665, { duration: 500, easing });
      animateOpacity1[index].value = withTiming(1, { duration: 600, easing });
      animateTy1[index].value = withTiming(0, { duration: 600, easing });
      animateOpacity2[index].value = withTiming(0, { duration: 600, easing });
      animateTy2[index].value = withTiming(300, { duration: 600, easing });
    }
  }

  useLayoutEffect(() => {
    setTimeout(() => {
      movetranslateX.value = withTiming(0, {
        duration: 800,
        easing: Easing.out(Easing.exp),
      });

      moveopacity.value = withTiming(1, {
        duration: 800,
        easing: Easing.out(Easing.exp),
      });
      textopacity.value = withTiming(0, {
        duration: 800,
        easing: Easing.out(Easing.exp),
      });
    }, 50); // Small delay ensures component is mounted
  }, []);
  const moveanimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: movetranslateX.value }],
    opacity: moveopacity.value

  }));
  const textOpacityStyle = useAnimatedStyle(() => ({
    opacity: textopacity.value, // Apply fade-out effect only to text
  }));

  return (
    <SafeAreaView>
      <View className="flex flex-row w-full h-screen bg-white">
        <View className="flex-1 justify-center items-center flex-col relative">
          {/* Header */}
          <View className="h-[80px] flex flex-row justify-between items-center absolute w-full top-0 left-0 px-12">
            <Image source={yearImages.pwLogo} alt="homeLogo" className="max-w-[180px] max-h-[50px]" resizeMode="contain" />
            <Animated.View className="absolute right-[10%] flex flex-row justify-center items-center gap-4 z-40" style={[moveanimatedStyle]}>
              <Animated.View className=" font-[900] flex flex-row" style={[textOpacityStyle]}>
                <Text className="text-[#E11C37] pr-2 font-objectiveBlk font-[900] text-[1.1rem]">INDIA</Text>
                <Text className="text-black font-objectiveBlk font-[900]text-[1.1rem]">INTERACTIVE</Text>
              </Animated.View>

              <CustomCloseButton onPress={handleClose} />

            </Animated.View>
          </View>

          {/* Content */}
          <View className="w-[80%] h-[70%]">
            <View className="w-[400px] h-[120px]">
              <Image source={yearImages.hundredLogo} alt="100_years_logo" className="z-40 max-w-[100%] max-h-[120px]" resizeMode='contain' />
            </View>
            <View className="p-4 pt-10 text-black/80 font-normal w-[90%]">
              <Text className="leading-tight text-[1.1rem] font-frutigerReg">
                For 100 years, the people of Pratt & Whitney have pushed the boundaries of aviation to shape human
                flight. Pratt & Whitney’s history is a story of relentless grit and unwavering dedication, from developing
                era-defining engines in the early 20th century to unleashing new technologies that power the skies today.
                With more than 90,000 engines in service around the globe, we remain committed to connecting people,
                growing economies and defending freedom.
                {/* {!isExpanded && "..."}

                <Text onPress={toggleReadMore} className="text-[#D91027] font-[900] text-[1.1rem] leading-tight">
                  {isExpanded ? "" : " Read More"}
                </Text> */}

              </Text>

              {/* <Animated.View style={readMoreAnimatedStyle}>
                {isExpanded && (
                  <Text className="leading-tight text-[1.1rem] font-frutigerReg">
                    For a century, Pratt & Whitney has played a pivotal role in transforming aviation by connecting people,
                    growing economies, and defending freedom. Our people are at the heart of driving that progress.
                    The unwavering passion of generations has delivered industry-changing advancements, unlocking limitless potential.

                    <Text onPress={toggleReadMore} className="text-[#D91027] font-[900] leading-tight">
                      {isExpanded ? " Read Less" : " "}
                    </Text>

                  </Text>
                )}
              </Animated.View> */}
            </View>
            <View className="p-4">
              <Text className="text-black text-[1rem] font-ObjektivMk1Bold">  A century of innovation continues</Text>
            </View>

            {/* <TouchableOpacity
            onPress={goToYearCourasal}
            className="bg-[#D91027] cursor-pointer w-[210px] h-[38px] mt-3 flex justify-center items-center font-[700] text-[15px] text-white gap-5 ml-4"
          >
            <Text className="text-white font-[700] text-[0.65rem] font-objektiv">Begin Interactive</Text>
            
          </TouchableOpacity> */}
            {/* <MyTextBtn
              className={"w-[186px] h-[36px] mt-8"}
              onPress={goToYearCourasal}
              title={"Begin Interactive"}
              textClass={" font-[700] text-[0.65rem] font-objektiv tracking-widest "}
            /> */}
            <CustomTextButton
              className={"w-[186px] h-[36px] mt-8 ml-4"}
              onPress={goToYearCourasal}
              title={"Begin Interactive"}
              textClass={" font-[700] text-[0.75rem] font-objektiv tracking-widest "}
              boxLeftClass={"w-[15px] h-[15px] -left-[7.5px]  -top-[7.5px] bg-white"}
              boxRightClass={"w-[15px] h-[15px] -right-[7.5px] -bottom-[7.5px] bg-white"}
            />

          </View>
        </View>


        {/* Video and Content Sections */}
        <View className="relative flex-1 w-full  h-full ">
          <VideoView style={{ width: '100%', height: '100%' }} player={player} nativeControls={false} contentFit="contain" />
          {/* <VideoComponent
                        videoUrl={homeImages.pw100HeroVideo}
                        videoClass={{ width: '100%', height: '100%' }}
                      /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HundredYears;
