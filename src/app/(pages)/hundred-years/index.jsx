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
import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import yearImages from "../../constants/yearImages";
import Video from 'react-native-video';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, withSpring } from "react-native-reanimated";
import CloseButton from "../../components/CloseButton ";
import {Link} from "expo-router";
import { useRouter } from 'expo-router';

const HundredYears = () => {
  const divRefs = useRef([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const router = useRouter();
  
   // Shared values for position and opacity
   const firstX = useSharedValue(0); // Initial: 0%
   const secondX = useSharedValue(33.33); // Initial: 33.33%
   const thirdX = useSharedValue(66.665); // Initial: 66.665%
  //  const paraY = useSharedValue(0);
  //  const paraOpacity = useSharedValue(1);
  //  const para2Opacity = useSharedValue(0);
  //  const paraBottom = useSharedValue(0);
 
   const easing = Easing.bezier(0.47, 0, 0.23, 1.38);

const data = [0,1,2];
   const animationStates = {
    opacity: useSharedValue(data.map(() => 1)),
    translateY: useSharedValue(data.map(() => '0%')),
  };
  const animationStates2 = {
    opacity: useSharedValue(data.map(() => 0)),
    bottom: useSharedValue(data.map(() => '0%')),
  };
     // Function to reset all animations
  const resetAnimations = (index) => {
    firstX.value = withTiming(0, { duration: 500, easing });
    secondX.value = withTiming(33.33, { duration: 500, easing });
    thirdX.value = withTiming(66.665, { duration: 500, easing });
    animationStates.opacity.value[index] = withTiming(1, { duration: 800, easing });
    animationStates.translateY.value[index] = withTiming(0, { duration: 800, easing });
    animationStates2.opacity.value[index] = withTiming(0, { duration: 800, easing });
    animationStates2.bottom.value[index] = withTiming(0, { duration: 800, easing });
  };
 
   const handleMoreClick = (index) => {
    if (index > 2 || index < 0) return;

    setActiveIndex(index);
    if (index === 0) {
      // Move second and third to the right
      secondX.value = withTiming(90, { duration: 800, easing });
      thirdX.value = withTiming(95, { duration: 800, easing });
         // Animate paragraph
        //  paraY.value = withTiming(20, { duration: 800, easing });
        //  paraOpacity.value = withTiming(0, { duration: 800, easing });
        //  para2Opacity.value = withTiming(1, { duration: 800, easing });
        //  paraBottom.value = withTiming(10, { duration: 800, easing });
         animationStates.opacity.value[index] = withTiming(0, { duration: 800, easing });
    animationStates.translateY.value[index] = withTiming('20%', { duration: 800, easing });
    animationStates2.opacity.value[index] = withTiming(1, { duration: 800, easing });
    animationStates2.bottom.value[index] = withTiming('10%', { duration: 800, easing });
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

        animationStates.opacity.value[index] = withTiming(0, { duration: 800, easing });
        animationStates.translateY.value[index] = withTiming('-30%', { duration: 800, easing });
        animationStates2.opacity.value[index] = withTiming(1, { duration: 800, easing });
        animationStates2.bottom.value[index] = withTiming('20%', { duration: 800, easing });
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

       animationStates.opacity.value[index] = withTiming(0, { duration: 800, easing });
       animationStates.translateY.value[index] = withTiming('-40%', { duration: 800, easing });
       animationStates2.opacity.value[index] = withTiming(1, { duration: 800, easing });
       animationStates2.bottom.value[index] = withTiming('20%', { duration: 800, easing });
    }
  };
  const handleClose = (index) => {
    resetAnimations(index);
    setActiveIndex(null);
  };

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

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
    
   return  useAnimatedStyle(() => ({
      transform: [{ translateY: `${paraY.value}%` }],
      opacity: paraOpacity.value,
    }));
  }

  // const paraStyle = useAnimatedStyle(() => ({
  //   transform: [{ translateY: `${paraY.value}%` }],
  //   opacity: paraOpacity.value,
  // }));

  const para2Style = (index) => {
    if(index === 1) {
      console.log("my first");
    }
    return useAnimatedStyle(() => ({
      bottom: paraBottom.value + "%",
      opacity: para2Opacity.value,
    }));
  }

  return (
    <SafeAreaView>
    <View className="flex flex-row w-full h-screen">
      <View className="flex-1 justify-center items-center flex-col relative">
        {/* Header */}
        <View className="h-[80px] flex flex-row justify-between items-center absolute w-full top-0 left-0 px-12">
          <Image source={yearImages.pwLogo} alt="homeLogo" className="max-w-[180px] max-h-[50px]"   resizeMode="contain" />
          <View className="absolute right-[20%] flex flex-row justify-center items-center gap-4 z-40">
            <View className="text-2xl font-[900] opacity-0">
              <Text className="text-[#E11C37] pr-2">INDIA</Text>
              <Text className="text-black">INTERACTIVE</Text>
            </View>
            <TouchableOpacity onPress={handleClose} className="absolute">
            <CloseButton
        iconSource={yearImages.closeIcon}  // Pass the image dynamically
        bgColor="#918F8F"  // Pass the background color dynamically
      />
            </TouchableOpacity>
          </View>
        </View>

        {/* Content */}
        <View className="w-[80%] h-[70%]">
          <View className="w-full">
            <Image source={yearImages.hundredLogo} alt="100_years_logo" className="z-40 max-w-[400px] max-h-[120px]" resizeMode='contain' />
          </View>
          <View className="p-4 pt-10 text-black/80  font-normal w-[90%]">
            <Text className="leading-tight text-[1.1rem] font-frutigerReg transform transition-all">
              For a century, Pratt & Whitney has played a pivotal role in
              transforming aviation by connecting people, growing economies and
              defending freedom. Our people are at the heart of driving that
              progress. The unwavering passion of generations has delivered
              industry-changing advancements, unlocking limitless potential
              <TouchableOpacity onPress={toggleReadMore}>
                <Text className="pr-1 ml-1 cursor-pointer text-[#D91027] font-bold">
                  {isExpanded ? "" : "Read more"}
                </Text>
              </TouchableOpacity>
              {isExpanded && (
                <Text className="opacity-100"> 
                For a century, Pratt & Whitney has played a pivotal role in
                transforming aviation by connecting people, growing economies
                and defending freedom. Our people are at the heart of driving
                that progress. The unwavering passion of generations has
                delivered industry-changing advancements, unlocking limitless
                potential.
                 <Text
                  onPress={toggleReadMore}
                  className="ml-1 cursor-pointer text-[#D91027] font-semibold"
                >
                  {isExpanded ? "Read Less" : ""}
                </Text></Text>
              )}
            </Text>
          </View>
          <View className="p-4 ">
          <Text className="text-black text-[1rem] font-[800] font-objektiv">We are Pratt & Whitney. We are Dependable Engines.</Text>
          </View>

          <TouchableOpacity
            onPress={goToYearCourasal}
            className="bg-[#D91027] cursor-pointer w-[210px] h-[38px] mt-3 flex justify-center items-center font-[700] text-[15px] text-white gap-5 ml-4"
          >
            <Text className="text-white font-[700] text-[0.65rem] font-objektiv">Begin Interactive</Text>
            
          </TouchableOpacity>
        
        </View>
      </View>
    

      {/* Video and Content Sections */}
      <View className="relative flex-1 w-full bg-green-600">
        {[0, 1, 2].map((index) => {
   const animatedStyle = useAnimatedStyle(() => ({

    opacity: animationStates.opacity.value[index],
    transform: [{ translateY: animationStates.translateY.value[index] }],
  }));
  const animatedStyle2 = useAnimatedStyle(() => ({

    opacity: animationStates2.opacity.value[index],
    bottom: animationStates2.bottom.value[index],
  }));


          const className = index === 0 ? "first" : index === 1 ? "second" : "third";
          const imageUrl =
          index === 0 ? yearImages.firstImg : index === 1 ? yearImages.secondImg : yearImages.thirdImg;
          const videoUrl = ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"][index];
          // const imageUrl = [FirstImg, SecondImg, ThirdImg][index];
          const paragraph = [
            {
              heading: "Passion",
              paragraphs:
                "The passion of P&W people is what turns the possibilities of flight into reality for our customers. The success of the past 100 years would not have been possible without the generations of individuals who helped make Pratt & Whitney what it is today..",
            },
            {
              heading: "Performance",
              paragraphs:
                "Pratt & Whitney continues to transform the aerospace industry. Every step of the process is powered by our innovators, visionaries, and engineers with exacting precision to innovate a new and exciting future. We are powering the horizon of aerospace with the most",
            },
            {
              heading: "Possibilities",
              paragraphs:
                "Pratt & Whitney is focused on powering the future and the limitless potential that lies ahead of us. We are at the forefront of revolutionary advancements in aircraft propulsion technology and advancing sustainable aviation by working smarter, cleaner, & greener. service, the best-positioned",
            },
          ];
          const paragrapModalOpen = [
            {
              heading: "Passion",
              paragraphs1:
                "The passion of P&W people is what turns the possibilities of flight into reality for our customers. The success of the past 100 years would not have been possible without the generations of individuals who helped make Pratt & Whitney what it is today..",
              paragraphs2:
                "The passion of P&W people is what turns the possibilities of flight into reality for our customers. The success of the past 100 years would not have been possible without the generations of individuals who helped make Pratt & Whitney what it is today..",
              paragraphs3:
                "The passion of P&W people is what turns the possibilities of flight into reality for our customers. The success of the past 100 years would not have been possible without the generations of individuals who helped make Pratt & Whitney what it is today..",
            },
            {
              heading: "Performance",
              paragraphs1:
                "Pratt & Whitney continues to transform the aerospace industry. Every step of the process is powered by our innovators, visionaries, and engineers with exacting precision to innovate a new and exciting future. We are powering the horizon of aerospace with the most",
              paragraphs2:
                "Pratt & Whitney continues to transform the aerospace industry. Every step of the process is powered by our innovators, visionaries, and engineers with exacting precision to innovate a new and exciting future. We are powering the horizon of aerospace with the most",
              paragraphs3:
                "Pratt & Whitney continues to transform the aerospace industry. Every step of the process is powered by our innovators, visionaries, and engineers with exacting precision to innovate a new and exciting future. We are powering the horizon of aerospace with the most",
            },
            {
              heading: "Possibilities",
              paragraphs1:
                "Pratt & Whitney is focused on powering the future and the limitless potential that lies ahead of us. We are at the forefront of revolutionary advancements in aircraft propulsion technology and advancing sustainable aviation by working smarter, cleaner, & greener. service, the best-positioned",
              paragraphs2:
                "Pratt & Whitney is focused on powering the future and the limitless potential that lies ahead of us. We are at the forefront of revolutionary advancements in aircraft propulsion technology and advancing sustainable aviation by working smarter, cleaner, & greener. service, the best-positioned",
              paragraphs3:
                "Pratt & Whitney is focused on powering the future and the limitless potential that lies ahead of us. We are at the forefront of revolutionary advancements in aircraft propulsion technology and advancing sustainable aviation by working smarter, cleaner, & greener. service, the best-positioned",
              paragraphs4:
                "Pratt & Whitney is focused on powering the future and the limitless potential that lies ahead of us. We are at the forefront of revolutionary advancements in aircraft propulsion technology and advancing sustainable aviation by working smarter, cleaner, & greener. service, the best-positioned",
            },
          ];
          const paragraphShows = paragraph[index];
          const paragraphShowsModalOpen = paragrapModalOpen[index];

          return (
            <Animated.View key={index} ref={(el) => (divRefs.current[index] = el)} className={`trnasform ${className}  absolute flex items-center justify-center h-full w-full`}  style={[
              className === "first"
                ? firstStyle
                : className === "second"
                ? secondStyle
                : thirdStyle,
            ]}>
              <View className="absolute inset-0 z-[100]">
                <Animated.View className={`para para${index} z-[100] absolute w-[153px] h-[350px] opacity-100 bottom-10 text-white left-3`} style={[animatedStyle]}>
                  <Text className="font-objective text-white text-[1.3rem] font-[800] pb-3">
                    {paragraphShows.heading}
                  </Text>
                  <Text className="font-frutigerReg text-[0.8rem] text-white leading-[21px]">
                    {`${paragraphShows.paragraphs.slice(0, 220)}...`}
                  </Text>
                  <TouchableOpacity
                    onPress={() => handleMoreClick(index)}
                    className="bg-[#D91027] cursor-pointer w-[88px] h-[18px] mt-3 flex justify-center items-center font-[700] text-[15px] text-white gap-5"
                  >
                    <Text className="text-white font-[700] text-[0.65rem]">More</Text>
                  </TouchableOpacity>
                </Animated.View>
                <Animated.View
                  className={`para-2 para-2-${index} absolute w-[433px] opacity-0 -bottom-[10%] text-white left-3 ${activeIndex === index ? 'z-[200]' : 'z-[10]'}`}
                  style={[animatedStyle2]}
                >
                  <Text className="text-white text-[1.3rem] font-[800] pb-3 font-objective">
                    {paragraphShowsModalOpen.heading}
                  </Text>
                  <Text className="text-[0.8rem] font-normal text-white leading-[21px] pb-3 font-frutigerReg">
                    {paragraphShowsModalOpen.paragraphs1}
                  </Text>
                  <Text className="font-frutigerReg text-[0.8rem] font-normal text-white leading-[21px] pb-3">
                    {paragraphShowsModalOpen.paragraphs2}
                  </Text>
                  <Text className="font-frutigerReg text-[0.8rem] font-normal text-white leading-[21px]">
                    {paragraphShowsModalOpen.paragraphs3}
                  </Text>
                  <Text className="font-frutigerReg text-[0.8rem] font-normal text-white leading-[21px]">
                    {paragraphShowsModalOpen?.paragraphs4}
                  </Text>
                  <Text className="relative flex items-center gap-2 mt-4 z-[100] ">
                    <Text
                      onPress={() => handleMoreClick(index - 1)}
                      style={{
                        clipPath:
                          "polygon(0 0, 100% 0, 100% 100%, 18% 100%, 0 78%)",
                      }}
                      className={`cursor-pointer w-[20px] h-[20px]  ${index === 1 || index === 2 ? "bg-[#D91027]" : "bg-[#988A8A]"} flex justify-center items-center`}
                    >
                      <Image source={yearImages.leftArrow} className=""   resizeMode="contain" />
                    
                    </Text>
                    <Text
                      onPress={() => handleMoreClick(index + 1)}
                      style={{
                        clipPath:
                          "polygon(100% 0, 100% 81%, 78% 100%, 0 100%, 0 0%)",
                      }}
                      className={`cursor-pointer w-[20px] h-[20px]  ${index === 1 || index === 0 ? "bg-[#D91027]" : "bg-[#988A8A]"} flex justify-center items-center`}
                    >
                          <Image source={yearImages.rightArrow} className=""   resizeMode="contain" />
                    </Text>
                  </Text>
                </Animated.View>
              </View>
              <TouchableOpacity className="top-4 right-[120px] z-[100] absolute"     onPress={() => handleClose(index)}>
              <CloseButton
        iconSource={yearImages.closeIcon}  // Pass the image dynamically
        bgColor="#918F8F"  // Pass the background color dynamically
      />
              </TouchableOpacity>
     
              {/* <View
                style={{
                  clipPath:
                    "polygon(100% 0, 100% 21%, 100% 66%, 79% 100%, 25% 100%, 0 100%, 0 0)",
                }}
                onClick={handleClose}
                className="absolute top-4 right-[120px] z-[100] w-[44px] bg-[#918F8F] cursor-pointer h-[32px] flex justify-center items-center"
              >
                <View className="w-3 h-3 absolute -bottom-1.5 -right-1.5 bg-transparent" />
                <Image source={yearImages.closeIcon}  />
              </View> */}
              <View className="absolute inset-0 bg-black bg-opacity-40 z-[1] h-full w-full"></View>
              {activeIndex === index ? (
        //         <Video
        //         source={videoUrl}
        //           className={`absolute inset-0 object-cover w-full h-full`}
        //           resizeMode="contain"
        //           paused={true} // Auto-play the video
        // repeat={true} // Loop the video
        //           muted
        //         />
        <video
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        className="absolute inset-0 object-cover w-full h-full"
        autoPlay
        muted
        loop

      />
              ) : (
                <Image
                source={imageUrl}
                resizeMode="contain"
                  style={{ objectFit: "fill" }}
                  className={`absolute inset-0 h-full w-full`}
                />
              )}
            </Animated.View>
          );
        })}
      </View>
    </View>
    </SafeAreaView>
  );
};

export default HundredYears;
