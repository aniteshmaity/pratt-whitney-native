import { View, Text, Image, Button, TouchableOpacity, ScrollView, Pressable, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import yearImages from "../constants/yearImages";
import GalleryCarousel from "./GalleryCarousel";
import tabsData from "../constants/tabsData";
import Svg, { Defs, ClipPath, Polygon, Rect } from 'react-native-svg';


import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, interpolate, useScrollViewOffset, useAnimatedScrollHandler, withRepeat } from "react-native-reanimated";
import ClippedView from "./ClippedView";
import CustomCloseButton from "./buttons/CustomCloseButton";
import boxShadow from "../constants/boxShadow";
import {Video} from "expo-av"
import { Gesture, GestureDetector, TouchableWithoutFeedback } from "react-native-gesture-handler";

const screenHeight = Dimensions.get("window").height;
const adjustedHeight = screenHeight - 100; // Equivalent to calc(100vh - 100px)

export default function EngineComponent({ type, onEngineClose }) {
  console.log("type---", type);
  const [activeTab, setActiveTab] = useState(0);
  const contentRef = useRef(null);
  const gtfImageRef = useRef(null);
  const rotateImgRef = useRef(null);
  const redDotRef = useRef(null);
  const scrollableRef = useRef(null);
  const redDot2Ref = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [isScrollableOverflowing, setIsScrollableOverflowing] = useState(false);
  const [scrollParentHeight1, setScrollParentHeight1] = useState(0);
  const [scrollParentHeight2, setScrollParentHeight2] = useState(0);
  const videoRef = useRef(null);
  const rotation = useSharedValue(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeScrollView, setActiveScrollView] = useState(1);
  const [parentWidth, setParentWidth] = useState(0);
  const opacity = useSharedValue(0);

  const scrollY1 = useSharedValue(0);
  const scrollY2 = useSharedValue(0);
  console.log("scrollparent-1".scrollParentHeight1);
  console.log("scrollparent-2".scrollParentHeight1);
  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  console.log("activetab", activeTab);
  // useEffect(() => {
  //   const content = contentRef.current;

  //   const handleScroll = () => {
  //     if (content && redDotRef.current) {
  //       const scrollPercentage =
  //         (content.scrollTop / (content.scrollHeight - content.clientHeight)) *
  //         100;
  //       redDotRef.current.style.top = `${scrollPercentage}%`;
  //     }
  //   };

  //   const checkOverflow = () => {
  //     setIsOverflowing(content.scrollHeight > content.clientHeight);
  //   };

  //   if (content) {
  //     content.addEventListener("scroll", handleScroll);
  //     checkOverflow(); // Check overflow when component mounts
  //   }

  //   return () => {
  //     if (content) content.removeEventListener("scroll", handleScroll);
  //   };
  // }, [tabsData, activeTab]);

  const handleScroll1 = (event) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y; // Vertical scroll position
    const contentHeight = event.nativeEvent.contentSize.height; // Total scrollable height
    const layoutHeight = event.nativeEvent.layoutMeasurement.height; // Viewable height

    // Calculate the scroll percentage
    const scrollPercentage = (contentOffsetY / (contentHeight - layoutHeight)) * 100;

    // console.log("contentheight", contentHeight);
    // console.log("layoutheight", layoutHeight);
    if (redDot2Ref.current) {
      redDot2Ref.current.style.top = `${scrollPercentage}%`;
    }

  };
  const handleScroll = (event) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y; // Vertical scroll position
    const contentHeight = event.nativeEvent.contentSize.height; // Total scrollable height
    const layoutHeight = event.nativeEvent.layoutMeasurement.height; // Viewable height

    // Calculate the scroll percentage
    const scrollPercentage = (contentOffsetY / (contentHeight - layoutHeight)) * 100;

    console.log("contentheight", contentHeight);
    console.log("layoutheight", layoutHeight);
    if (redDotRef.current) {
      redDotRef.current.style.top = `${scrollPercentage}%`;
    }

  };
  const handleStartVideo = async () => {
    console.log("👆 Tap Started - Video Should Play");
    rotation.value = withRepeat(withTiming(360, { duration: 1000, easing: Easing.linear }), -1, false);
    setIsPlaying(true);
    await videoRef.current?.playAsync();
  };

  // Function to stop video
  const handleStopVideo = async () => {
    rotation.value = withTiming(0, { duration: 500 });
    setIsPlaying(false);
    await videoRef.current?.pauseAsync();
  };

  const rotateAnimatedStyle = useAnimatedStyle(() => ({
    transform: [ { rotate: `${rotation.value}deg` }],
  }));

  // const hoverGesture = Gesture.Tap()
  // .onStart(() => {
  //   console.log("👆 Tap Started - Video Should Play");
  //   handleStartVideo();
  // })
  // .onEnd(() => {
  //   console.log("✋ Tap Ended - Video Should Stop");
  //   handleStopVideo();
  // });

  useEffect(() => {
    const element = scrollableRef.current;
    if (element) {
      const contentHeight = element.scrollHeight;
      const layoutHeight = element.clientHeight;

      // Update the overflow state based on content size
      setIsScrollableOverflowing(contentHeight > layoutHeight);
    }
  }, []);
  useEffect(() => {
    const element = contentRef.current;
    if (element) {
      const contentHeight = element.scrollHeight;
      const layoutHeight = element.clientHeight;

      // Update the overflow state based on content size
      setIsOverflowing(contentHeight > layoutHeight);
    }
  }, []);

  const onParentLayout1 = (event) => {
    const { height } = event.nativeEvent.layout;
    setScrollParentHeight1(height);
  };

  // ✅ Get parent height for second ScrollView
  const onParentLayout2 = (event) => {
    const { height } = event.nativeEvent.layout;
    setScrollParentHeight2(height);
  };

  const scrollHandler1 = useAnimatedScrollHandler((event) => {
    scrollY1.value = event.contentOffset.y;
  });

  // ✅ Scroll handler for second ScrollView
  const scrollHandler2 = useAnimatedScrollHandler((event) => {
    scrollY2.value = event.contentOffset.y;
  });
  // ✅ Check if content overflows for first ScrollView
  const handleContentSizeChange1 = (contentWidth, contentHeight) => {
    setIsScrollableOverflowing(contentHeight > scrollParentHeight1);
  };

  // ✅ Check if content overflows for second ScrollView
  const handleContentSizeChange2 = (contentWidth, contentHeight) => {
    setIsOverflowing(contentHeight > scrollParentHeight2);
  };
  const redAnimatedStyle1 = useAnimatedStyle(() => ({
    top: interpolate(
      scrollY1.value,
      [0, 50], // Adjust 500 based on the actual scrollable height
      [0, 40], // Moves within the height of the indicator track
      "clamp"
    ),


  }));
  const redAnimatedStyle2 = useAnimatedStyle(() => {
    return {
      top: interpolate(scrollY2.value, [0, 500], [0, scrollParentHeight2 * 0.8], "clamp"),
    };
  });



  useEffect(() => {

    opacity.value = withTiming(1, { duration: 300 })
  }, [activeTab]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,

  }));

  const Varients = [
    { img: yearImages.gtf, title: "JT3D" },
    { img: yearImages.gtf, title: "TF33" },
  ];


  // const handleTouchStart = () => {
  //   rotateScale.value = withTiming(1.1, { duration: 900 });
  //   rotateRotation.value = withTiming(360, { duration: 900 });
  // };

  // const handleTouchEnd = () => {
  //   rotateScale.value = withTiming(1, { duration: 900 });
  //   rotateRotation.value = withTiming(0, { duration: 900 });
  // };

  // const rotateAnimatedStyle = useAnimatedStyle(() => ({
  //   transform: [{ scale: rotateScale.value }, { rotate: `${rotateRotation.value}deg` }],
  // }));
  return (
    <View
      className="flex flex-row"
      style={{ height: adjustedHeight }}
      // style={{
      //   clipPath:
      //     "polygon(100% 0%, 100% 0%, 100% 80%, 10% 100%, 0% 0%)",
      // }}
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout;
        setSize({ width, height });
      }}
    >

      <View className="w-full h-full flex-1">
        <ClippedView width={size.width / 2} height={size.height} backgroundColor="#D91027" clipPathId="Engineclip0" slug="variant2" />
        <View className={`relative z-[20] overflow-hidden w-full `} style={{ height: type === "product" ? "50%" : "54%" }}>
          {/* <Image
            source={type === "product" ? yearImages.gtfImg : yearImages.machine1}

            className="w-[99.5%]  h-full  pr-1"
            resizeMode="cover"
          /> */}

    {/* <Video  source={{ uri: "http://commondatastorage.g  oogleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}  */}
    
<Video ref={videoRef} style={{width:"99.5%", height:"100%"}}  className="  pr-1" source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }} isLooping  
        resizeMode="cover" shouldPlay={isPlaying}  allowsPictureInPicture />

        </View>
        <View className={`  relative px-[2.2px] pb-[2.2px]`} style={{ height: type === "product" ? "50%" : "46%" }}>
          {type === "product" ? (
            <>
              <View className="top-0 absolute w-[150px] h-[150px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[15]" >
                <Animated.Image
                  ref={rotateImgRef}
                  source={yearImages.rotateImg}
                  style={[{ width: "100%", height: "100%" }, rotateAnimatedStyle]}
                  resizeMode="cover"
                  className=" object-cover"
                />
              </View>
   
              <View
                // onPressOut={handleTouchEnd}
                className="w-[100px] z-[20] m-auto relative  cursor-pointer"
              >            
              <TouchableWithoutFeedback
  onPressIn={handleStartVideo} 
  onPressOut={handleStopVideo}
>
                <View className="absolute  bg-[#404040] border-[#D91027] border-[8px] w-[130px] h-[130px] rounded-full  transform  -translate-y-1/2 left-1/2 -translate-x-1/2 text-center z-[999]  flex justify-center items-center">
                  <Text className="w-[65%] text-[17px] text-[#ffff] font-[600] text-center">Explore 3D</Text>
                </View>
                </TouchableWithoutFeedback>
              </View>
              </>
          ) : null}

          <View
            className="red-border  h-full w-full flex flex-col justify-center z-10"
          // style={{
          //   clipPath:
          //     "polygon(100% 0%, 100% 100%, 90% 100%, 20% 100%, 0% 56%, 0% 0%)",
          // }}
          >
            <ClippedView width={Math.max(size.width / 2 - 4, 0)} height={type === "product" ? Math.max(size.height * 0.5 - 2, 0) : Math.max(size.height * 0.46 - 2, 0)} backgroundColor="#393636" clipPathId="Engineclip1" slug={type === "product" ? "variant10" : "variant3"} />
            <View>
              <View className="w-[90%] m-auto">
                <Image
                  source={yearImages.galleryText}
                  className="w-[30%] h-[28px]"
                  style={{ width: 131, height: 28 }}
                  resizeMode="cover"
                />
              </View>
              <View className="slider-section w-[90%] m-auto mt-8" onLayout={(event) => {
                const { width } = event.nativeEvent.layout;
                setParentWidth(width);
              }}>
                {parentWidth > 0 && <GalleryCarousel parentWidth={parentWidth} />}
              </View>
            </View>
          </View>
        </View>
      </View>

      <View className=" overflow-y-hidden relative flex-1 h-full"
      >
        <View className=" h-[54%] bg-slate-400 flex  justify-around">
          <TouchableOpacity className="w-[40px] absolute z-40 right-[8px] top-[1px]">
            <View><CustomCloseButton onPress={onEngineClose} /></View>
          </TouchableOpacity>
          <ClippedView width={Math.max(size.width / 2 - 1, 0)} height={size.height} backgroundColor="white" clipPathId="Engineclip2" slug="variant4" />


          <View
            className=" pr-1 py-1"
          >
            <ClippedView width={404} height={95} backgroundColor="#d91027" clipPathId="clip1" />
            <View
              className=" px-5 py-3"
            >

              <ClippedView width={400} height={87} backgroundColor="#393637" clipPathId="clip2" />
              <Text className="text-[2.2rem] font-[900] leading-tight text-white">

                {type === "product" ? "GTF Engine" : "TF33 Engine"}
              </Text>
              <Text className="text-[#CE2028] text-[0.8rem] font-medium pt-1">
                A Legend Engine For a legedary Bombar
              </Text>
            </View>
          </View>
          <View className="flex flex-row gap-[40px]  ml-5  pb-2 w-[90%] relative h-[90px] overflow-auto" onLayout={onParentLayout1}>
            <View className=" rounded-full   w-[94px] h-[94px] p-2 bg-white" style={{ ...boxShadow("#6b646426", 3, 7, 0.2, 20, 10) }}>
              <View className="overflow-hidden w-full h-full   rounded-full " style={{ ...boxShadow("#6b646426", 3, 7, 0.2, 10, 5) }}>
                <Image
                  source={yearImages.gtf}
                  className="h-full w-full "
                  resizeMode="cover"
                // style={{ width:80, height:80}}
                />
              </View>
            </View>
            <Animated.ScrollView onContentSizeChange={handleContentSizeChange1}
              onScroll={scrollHandler1} ref={scrollableRef} scrollEventThrottle={16} showsHorizontalScrollIndicator={false}>
              <Text

                className="text-[#000000b3]  pr-[40px] text-[0.75rem] font-objektiv"
              >
                The Pratt & Whitney GTF™ engine is the only geared propulsion system
                delivering industry-leading fuel efficiency and sustainability
                benefits. Our geared fan has fundamentally changed how more
                sustainable propulsion works. Having quickly become the foundation
                of our industry’s The Pratt & Whitney GTF™ engine is the only geared
                changed how more sustainable propulsion works. Having quickly become
                the foundation of our industry’s The Pratt & Whitney GTF™ engine is
                the only geared.
                Having quickly become
                the foundation of our industry’s The Pratt & Whitney GTF™ engine is
                the only geared.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, fuga animi. Beatae nulla sed, doloremque voluptate et eius esse recusandae ea corporis dolor nesciunt, non consequuntur, aliquid vero deleniti tempora?
              </Text>
            </Animated.ScrollView>

            {isScrollableOverflowing && (
              <View className="bg-[#D9D9D9] w-1.5  right-0 top-0 h-[40px] translate-x-1/2  absolute">
                <Animated.View
                  ref={redDot2Ref}
                  style={[redAnimatedStyle1]}
                  className=" w-5 h-5 bg-[#D9D9D9] rounded-full absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center"
                >
                  <View className="bg-red-600 rounded-full w-2.5 h-2.5" />
                </Animated.View>
              </View>
            )}
          </View>
          <View className="flex gap-[40px] flex-row ml-5  items-center">
            <Text className="text-[#CE2028] text-[12px] font-[800]">Select Variat</Text>

            {Varients.map((item, index) => {
              return (
                <View key={index}>
                  <View className=" rounded-full   w-[40px] h-[40px] p-1 bg-white" style={{ ...boxShadow("#6b646426", 3, 7, 0.2, 20, 10) }}>
                    <View className="overflow-hidden w-full h-full   rounded-full" style={{ ...boxShadow("#6b646426", 3, 7, 0.2, 10, 5) }}>
                      <Image
                        source={item.img}
                        className="h-full w-full"
                        resizeMode="cover"
                        style={{ width: '100%', height: '100%' }}
                      />
                    </View>
                  </View>
                  <Text className="text-[8px] text-center mt-2">
                    {item.title}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        <View className=" relative   h-[45%] " onLayout={onParentLayout2}>
          {type === "100year" ? (<View className="w-full h-[24px]  absolute top-[1px] " style={{ ...boxShadow("#514b4b33", -1, 4, 0.6, 5, 1) }} />) : null}
          <View className="ml-5  overflow-hidden w-[86%] h-full">
            {/* Tabs Navigation */}
            <View
              className="flex flex-row justify-between  w-[86%]"

            >

              {/* <ClippedView width={381} height={24} backgroundColor="#918F8F" clipPathId="Engineclip3" slug="variant5" /> */}
              {tabsData?.map((tab, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setActiveTab(index)}
                  className={`flex-1 px-4 py-[6px] text-[0.5rem] `}
                >
                         <ClippedView width={98} height={20} backgroundColor={activeTab === index ? "#D91027" : "#918F8F"} clipPathId="EnginePclip1" slug={type === "product" ? "variant8" : "variant5"}  />
                  <Text className="text-[0.5rem] font-semibold  text-white text-center">{tab.title}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Tabs Content */}
            <Animated.ScrollView
              ref={contentRef}
              onContentSizeChange={handleContentSizeChange2}
              onScroll={scrollHandler2} scrollEventThrottle={16} showsHorizontalScrollIndicator={false}
              className="relative mt-1 h-[100%] w-[89%] no-scrollbar pl-[20px] "
            >
              {tabsData[activeTab]?.content?.map((item, idx) =>
                typeof item === "string" ? (
                  <Text key={idx} className="mb-2">
                    {item}
                  </Text>
                ) : (
                  <Animated.View
                    key={idx}
                    style={[{borderBottomColor: "#d9d9d9e9", borderBottomWidth: 1},animatedStyle]}
                    className={`flex  ${tabsData[activeTab].title === "Platforms"
                        ? "flex-row "
                        : " flex-row "
                      }  gap-[30px] py-2`}
                  >
                    <View className="bg-white  rounded-full   w-[60px] h-[60px] p-1" style={{ ...boxShadow("#6b646426", 3, 7, 0.2, 20, 10) }}>
                      <View className="w-full h-full overflow-hidden  rounded-full">
                        <Image
                          source={yearImages.gtf}
                          className="w-full h-full"

                          resizeMode="cover"
                        />
                      </View>
                    </View>
                    {tabsData[activeTab].title !== "Platforms" ? (
                      <View>
                        <Text className="font-bold text-[1rem]">
                          {item.heading}
                        </Text>
                        <View>
      {item.details.map((detail, index) => (
        <View key={index} className="flex flex-row items-center gap-1">
          <Text className="text-[0.6rem]">•</Text>
          <Text className="text-[0.6rem] font-objektiv">{detail}</Text>
        </View>
      ))}
    </View>
                      </View>
                    ) : (
                      null
                    )}

                    <View>
                      <Text className="text-[#CE2028] text-[1.3rem] font-[900] font-objektiv">
                        {item.bypassRatio}
                      </Text>
                      <Text className="text-[rgba(0, 0, 0, 0.7)] text-[0.7rem] font-objektiv">
                        {item.enginetext}
                      </Text>
                    </View>
                    {tabsData[activeTab].title !== "Platforms" ? (
                      <View>
                        <Text className="text-[#CE2028] font-[800] text-[1.3rem] font-objektiv">
                          {item.fanDiameter}
                        </Text>
                        <Text className="text-[rgba(0, 0, 0, 0.7)] text-[0.7rem] font-objektiv">
                          Fan diameter
                        </Text>
                      </View>
                    ) : (
                      null
                    )}
                    {tabsData[activeTab]?.title === "Platforms" ? (
                      <View className="flex-1">
                        <Text className="text-[0.8rem]">
                          {expandedIndex === idx
                            ? item.description
                            : `${item.description.slice(0, 50)}...`}{" "}
                          <Text
                            className="text-[#CE2028] text-[0.7rem] font-medium cursor-pointer block"
                            onPress={() => toggleDescription(idx)}
                          >
                            {expandedIndex === idx
                              ? "Tap to collapse"
                              : "Tap for more"}
                          </Text>
                        </Text>
                      </View>
                    ) : (
                      null
                    )}
                  </Animated.View>
                )
              )}
              {/* Custom Scrollbar Red Dot */}
            </Animated.ScrollView>
            {isOverflowing && (
              <View className="bg-[#D9D9D9] w-1.5 right-[100px] top-[50px] h-[30%] translate-x-1/2 absolute">
                <Animated.View
                  ref={redDotRef}
                  style={[redAnimatedStyle2]}
                  className="w-5 h-5 bg-[#D9D9D9] rounded-full absolute left-1/2 transform -translate-x-1/2 flex flex-row justify-center items-center"
                >
                  <View className="bg-red-600 rounded-full w-2.5 h-2.5" />
                </Animated.View>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
