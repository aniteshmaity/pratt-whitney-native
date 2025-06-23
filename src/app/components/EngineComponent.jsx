import { View, Text, Image, Button, TouchableOpacity, ScrollView, Pressable, Dimensions, Modal, ActivityIndicator } from "react-native";
import React, { Suspense, useCallback, useEffect, useRef, useState } from "react";
import yearImages from "../constants/yearImages";
import GalleryCarousel from "./GalleryCarousel";
// import tabsData from "../constants/tabsData";
import Svg, { Defs, ClipPath, Polygon, Rect, Path } from 'react-native-svg';


import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, interpolate, useScrollViewOffset, useAnimatedScrollHandler, withRepeat } from "react-native-reanimated";
import ClippedView from "./ClippedView";
import CustomCloseButton from "./buttons/CustomCloseButton";
import boxShadow from "../constants/boxShadow";
import { ResizeMode, Video } from "expo-av"
import { Gesture, GestureDetector, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useVideoPlayer, VideoView } from 'expo-video';
import { useFocusEffect } from "expo-router";
// import { Canvas, useFrame } from '@react-three/fiber/native';
// import { OrbitControls, useGLTF } from '@react-three/drei/native';
import models3D from "../constants/models3D";
import { Test3d } from "./3dModels/Test3d";

const screenHeight = Dimensions.get("window").height;
const adjustedHeight = screenHeight - 100; // Equivalent to calc(100vh - 100px)
const videoSource =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

// GLB Model Component
// function Model({ url }) {
//   if (typeof url !== "string") {
//     console.error("Invalid URL for 3D model:", url);
//     return null; // Prevent errors if URL is incorrect
//   }

//   const { scene } = useGLTF(url);
//   useFrame(() => {
//     scene.rotation.y += 0.01;
//   });
//   return <primitive object={scene} scale={1} />;
// }

export default function EngineComponent({ type, onEngineClose, engineData, setShow3DModel, setLoading, onImageClick, yearEngineData, mapData, isFleetData }) {
  // console.log("enginedata---", engineData);
  const [activeTab, setActiveTab] = useState(0);
  const contentRef = useRef(null);
  const gtfImageRef = useRef(null);
  const rotateImgRef = useRef(null);
  const redDotRef = useRef(null);
  const scrollableRef = useRef(null);
  const redDot2Ref = useRef(null);
  const [tabsSize, setTabsSize] = useState({ width: 0, height: 0 });
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [isScrollableOverflowing, setIsScrollableOverflowing] = useState(false);
  const [scrollParentHeight1, setScrollParentHeight1] = useState(0);
  const [scrollParentHeight2, setScrollParentHeight2] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const allEngineData = type === "product" ? engineData : mapData ? mapData : yearEngineData
  const [tabsData, setTabsData] = useState(allEngineData?.defaultTabsData ?? []);

  console.log("allEngineData---", allEngineData);
  const videoRef = useRef(null);
  const rotation = useSharedValue(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeScrollView, setActiveScrollView] = useState(1);
  const [parentWidth, setParentWidth] = useState(0);
  const opacity = useSharedValue(0);

  const scrollY1 = useSharedValue(0);
  const scrollY2 = useSharedValue(0);
  const animatedHeight = useSharedValue(40);
  // console.log("scrollparent-1".scrollParentHeight1);
  // console.log("scrollparent-2".scrollParentHeight1);
  const toggleDescription = (index) => {
    if (expandedIndex === index) {
      // Collapse
      animatedHeight.value = withTiming(40, { duration: 300 });
      setExpandedIndex(null);
    } else {
      // Expand
      setExpandedIndex(index);
      animatedHeight.value = withTiming(140, { duration: 300 });
    }
  };
  // console.log("activetab", activeTab);

  const productPlayer = useVideoPlayer(videoSource, player => {
    player.loop = true;

  });
  const nonProductPlayer = useVideoPlayer(videoSource, player => {
    player.loop = true;
    // player.play();

  });

  // useFocusEffect(
  //   useCallback(() => {
  //     if (type !== "product") {
  //       console.log("Screen focused, starting video"); 
  //       nonProductPlayer.play();
  //     }

  //     return () => {
  //       console.log("Screen blurred, pausing video");
  //       if (type !== "product") {
  //         nonProductPlayer.pause();
  //       }
  //     };
  //   }, [type, nonProductPlayer]) 
  // );
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

  // const handleScroll1 = (event) => {
  //   const contentOffsetY = event.nativeEvent.contentOffset.y; // Vertical scroll position
  //   const contentHeight = event.nativeEvent.contentSize.height; // Total scrollable height
  //   const layoutHeight = event.nativeEvent.layoutMeasurement.height; // Viewable height

  //   // Calculate the scroll percentage
  //   const scrollPercentage = (contentOffsetY / (contentHeight - layoutHeight)) * 100;

  //   // console.log("contentheight", contentHeight);
  //   // console.log("layoutheight", layoutHeight);
  //   if (redDot2Ref.current) {
  //     redDot2Ref.current.style.top = `${scrollPercentage}%`;
  //   }

  // };
  // const handleScroll = (event) => {
  //   const contentOffsetY = event.nativeEvent.contentOffset.y; // Vertical scroll position
  //   const contentHeight = event.nativeEvent.contentSize.height; // Total scrollable height
  //   const layoutHeight = event.nativeEvent.layoutMeasurement.height; // Viewable height

  //   // Calculate the scroll percentage
  //   const scrollPercentage = (contentOffsetY / (contentHeight - layoutHeight)) * 100;

  //   console.log("contentheight", contentHeight);
  //   console.log("layoutheight", layoutHeight);
  //   if (redDotRef.current) {
  //     redDotRef.current.style.top = `${scrollPercentage}%`;
  //   }

  // };
  const handleStartVideo = async () => {
    console.log("👆 Tap Started - Video Should Play");
    rotation.value = withRepeat(withTiming(360, { duration: 1000, easing: Easing.linear }), -1, false);
    // setIsPlaying(true);
    // await videoRef.current?.playAsync();
    productPlayer.play();
  };

  // Function to stop video
  const handleStopVideo = async () => {
    rotation.value = withTiming(0, { duration: 500 });
    // setIsPlaying(false);
    // await videoRef.current?.pauseAsync();
    productPlayer.pause();
  };

  // useEffect(() => {
  //   return () => {
  //     if (player) {
  //       player.pause(); // Pause the video
  //       player.destroy(); // Destroy the player instance (if available)
  //     }
  //   };
  // }, [player]);


  const rotateAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
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
    setContentHeight(contentHeight);
  };
  const redAnimatedStyle1 = useAnimatedStyle(() => ({
    top: interpolate(
      scrollY1.value,
      [0, 50], // Adjust 500 based on the actual scrollable height
      [0, 70], // Moves within the height of the indicator track
      "clamp"
    ),


  }));
  const redAnimatedStyle2 = useAnimatedStyle(() => {
    return {
      top: interpolate(
        scrollY2.value,
        [0, contentHeight - scrollParentHeight2], // Use actual scroll range
        [0, (scrollParentHeight2 + 8) * 0.7], // Adjust scroll track height (70% of parent)
        "clamp"
      ),
    };
  });

  const onTabsLayout = (event) => {
    const { height, width } = event.nativeEvent.layout;
    setTabsSize({ width, height });
  };

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
      className="flex flex-row "
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

      <View className="w-full h-full flex-1 ">
        <ClippedView width={size.width / 2} height={size.height} backgroundColor="#D91027" clipPathId="Engineclip0" slug="variant2" />
        <View className={`relative z-[20] overflow-hidden w-full bg-[#D91027]`} style={{ height: type === "product" ? "54%" : "54%" }}>
          {/* <Image
            source={type === "product" ? yearImages.gtfImg : yearImages.machine1}

            className="w-[99.5%]  h-full  pr-1"
            resizeMode="cover"
          /> */}

          {/* <Video  source={{ uri: "http://commondatastorage.g  oogleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}  */}
          <View className=" h-full bg-slate-500 overflow-hidden" style={{ width: "99.7%" }}>
            <Image source={allEngineData?.logo || yearImages.machine1} className="w-full h-full absolute top-0 left-0" resizeMode="cover" />
            {/* <VideoView
              style={{

                flex: 1, // Fill the parent container
                width: '100%',
                height: '100%',
                aspectRatio: 16 / 9,
              }}
              player={nonProductPlayer}
              allowsFullscreen
              allowsPictureInPicture
            /> */}
          </View>


        </View>
        <View className={`  relative`} style={{ height: type === "product" ? "46%" : "46%", paddingLeft: "1.7" }}>
          {/* {type === "product" ? (
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
          ) : null} */}
          {/* {type === "product" ? (

            
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
            <View style={{ flex: 1 }} pointerEvents="box-none">
            <TouchableOpacity
              className="absolute bg-[#404040] border-[#D91027] border-[8px] w-[130px] h-[130px] rounded-full transform -translate-y-1/2 left-1/2 -translate-x-1/2 z-[999] flex justify-center items-center"
              onPress={() => {setShow3DModel(true)
                setLoading(true);
              }}
            >
              <Text className="w-[65%] text-[17px] text-[#ffff] font-[600] text-center">
                Explore 3D
              </Text>
            </TouchableOpacity>
            </View></>
          ) : null} */}

          <View
            className=" h-full w-full flex flex-col  z-10"
          // style={{
          //   clipPath:
          //     "polygon(100% 0%, 100% 100%, 90% 100%, 20% 100%, 0% 56%, 0% 0%)",
          // }}
          >
            <ClippedView width={Math.max(size.width / 2 - 3, 0)} height={type === "product" ? Math.max(size.height * 0.46 - 2, 0) : Math.max(size.height * 0.46 - 1, 0)} backgroundColor="#393636" clipPathId={type === "product" ? "Engineclip3" : "Engineclip3"} slug={type === "product" ? "variant3" : "variant3"} />
            <View>
              <View className="w-[90%] mt-[60px] pl-[30px]">
                {/* <Image
                  source={yearImages.galleryText}
                  className="w-[30%] h-[28px]"
                  style={{ width: 131, height: 28 }}
                  resizeMode="cover"
                /> */}
                <View style={{ width: 110, height: 42 }} className="relative ">
                  <Text className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white z-40">Gallery</Text>

                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="110"
                    height="42"
                    viewBox="0 0 110 42"
                    preserveAspectRatio="none"
                  >
                    <Path
                      fill="#242021"
                      stroke="#D91027"
                      d="M.5 11.457 11.457.5H109v30.043L98.043 41.5H.5z"
                    ></Path>
                  </Svg>
                  <Svg
                    style={{ position: 'absolute', top: 20, right: -86 }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="88"
                    height="19"
                    fill="none"
                    viewBox="0 0 88 19"
                  >
                    <Path stroke="#D91027" d="M.5 1.25h75.75L87.5 18.5"></Path>
                    <Path
                      fill="#D91026"
                      d="M48.5 1.25h27.75L83 11l-3-.75-4.5-6.75H50.75z"
                    ></Path>
                  </Svg>
                </View>
              </View>
              <View className="slider-section w-[90%] m-auto mt-8" onLayout={(event) => {
                const { width } = event.nativeEvent.layout;
                setParentWidth(width);
              }}>
                {parentWidth > 0 && <GalleryCarousel parentWidth={parentWidth} onImageClick={onImageClick} slideImages={allEngineData?.gallery || null} />}
              </View>
            </View>
          </View>
        </View>
      </View>

      <View className=" overflow-y-hidden relative flex-1 h-full"
      >
        <View className={`${mapData ? "h-[34%] justify-evenly" : "h-[54%] justify-around"} bg-slate-400 flex  `} >
          {/* {type === "product" && (<View className="absolute top-0 right-0 z-50">
            <CustomCloseButton onPress={onEngineClose} type={2} bgOpacity="false" />
          </View>)} */}

          <ClippedView width={Math.max(size.width / 2 - 1, 0)} height={size.height} backgroundColor="white" clipPathId="Engineclip2" slug="variant4" />



          {mapData ? (
            <View className=" pl-[20px] flex flex-row ">
              <Text className="text-black pr-2 text-[1.6rem] font-ObjektivMk2Black">{allEngineData.header1}</Text>
              <Text className="text-[#E11C37] text-[1.6rem] font-ObjektivMk2Black ">{allEngineData.header2}</Text>
            </View>
          ) : (
            <>

              <View className="relative transform -translate-x-[30px]" style={{ width: 533, height: 142, transform: [{ translateX: -10 }], }}>
                <Svg
                  xmlns="http://www.w3.org/200Svg"
                  width="533"
                  height="142"
                  fill="none"
                  viewBox="0 0 493 142"
                  preserveAspectRatio="none"
                >
                  <Path
                    fill="#393637"
                    stroke="#CE1126"
                    strokeWidth="2"
                    d="M491.5 1v74.608L431.062 141H1V1z"
                  ></Path>
                </Svg>
                <View className="absolute pl-[20px] top-1/2 -translate-y-1/2   ">
                  <Text className={`${type === "100year" ? "text-[20px]" : "text-[2.2rem]"}   leading-tight text-white font-ObjektivMk2Black`}> {allEngineData?.title}</Text>
                  <Text className="text-[#CE2028] text-[0.8rem] font-ObjektivMk1Bold ">
                    {allEngineData?.subTitle || "A Legend Engine For a legedary Bombar"}
                  </Text>
                </View>
              </View>
            </>
          )}


          {
            mapData ? (
              <Text

                className="text-[#000000b3] pl-[20px] pr-[40px] text-[0.75rem] font-objektiv"
              >
                {allEngineData?.description || "The Pratt & Whitney GTF™ engine is the only geared propulsion system delivering industry-leading fuel efficiency and sustainability benefits. Its geared fan has fundamentally changed how sustainable propulsion works, quickly becoming a foundation of our industry."}

              </Text>
            ) : (
              <View className="flex flex-row gap-[40px]  ml-5  pb-2 w-[90%] relative h-[90px] overflow-auto" onLayout={onParentLayout1}>
                <View className=" rounded-full   w-[94px] h-[94px] p-2 bg-white" style={{ ...boxShadow("#6b646426", 3, 7, 0.2, 20, 10) }}>
                  <View className="overflow-hidden w-full h-full   rounded-full " style={{ ...boxShadow("#6b646426", 3, 7, 0.2, 10, 5) }}>
                    <Image
                      source={allEngineData?.logo || yearImages.gtf}
                      className="h-full w-full "
                      resizeMode="cover"
                    // style={{ width:80, height:80}}
                    />
                  </View>
                </View>
                <Animated.ScrollView showsVerticalScrollIndicator={false} onContentSizeChange={handleContentSizeChange1}
                  onScroll={scrollHandler1} ref={scrollableRef} scrollEventThrottle={16} showsHorizontalScrollIndicator={false}>
                  <Text

                    className="text-[#000000b3]  pr-[40px] text-[0.75rem] font-objektiv"
                  >
                    {allEngineData?.description || "The Pratt & Whitney GTF™ engine is the only geared propulsion system delivering industry-leading fuel efficiency and sustainability benefits. Its geared fan has fundamentally changed how sustainable propulsion works, quickly becoming a foundation of our industry."}

                  </Text>
                </Animated.ScrollView>

                {isScrollableOverflowing && (
                  <View className="bg-[#D9D9D9] w-[3px]  right-0 top-0 h-[70px] translate-x-1/2  absolute">
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
            )
          }
          {
            mapData ? (
              <View>
                {allEngineData?.variants && allEngineData?.variants.length > 0 && (
                  <View className="flex gap-[40px] flex-row ml-5  items-center ">


                    {allEngineData?.variants.map((item, index) => {
                      return (
                        <View key={index}>
                          <Text className="text-[#E11C37] text-[1.6rem] font-ObjektivMk2Black">
                            {item.title}
                          </Text>
                          <Text className="text-[8px] text-center ">
                            {item.subtitle}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                )
                }
              </View>
            ) : (
              <View>
                {allEngineData?.variants && allEngineData?.variants.length > 0 && (
                  <View className="flex gap-[40px] flex-row ml-5  items-center ">
                    <Text className="text-[#CE2028] text-[12px] font-ObjektivMk1Bold">Select Variant</Text>

                    {allEngineData?.variants.map((item, index) => {
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
                )
                }
              </View>
            )
          }

        </View>

        <View className=" relative   h-[42%] " onLayout={onParentLayout2}>
          {type === "100year" ? (
            <View className="w-full h-[24px]  absolute top-[1px] " style={{ ...boxShadow("#514b4b33", -1, 4, 0.6, 5, 1) }} />) : <View className="w-full h-[24px]  absolute top-[1px] " style={{ ...boxShadow("#514b4b33", -1, 4, 0.6, 5, 1) }} />}
          <View className="ml-5 relative overflow-hidden w-[86%] h-full">
            {/* Tabs Navigation */}
            <View
              className="flex flex-row justify-between  w-[86%]" onLayout={onTabsLayout}
            >
              <ClippedView width={tabsSize.width} height={tabsSize.height} backgroundColor="#918F8F" clipPathId="Engineclip3" slug="variant5" />
              {tabsData?.map((tab, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setActiveTab(index)}
                  className={`flex-1  py-[6px] text-[0.5rem] `}
                >
                  <ClippedView width={tabsSize.width / tabsData.length} height={tabsSize.height} backgroundColor={activeTab === index ? "#D91027" : "#918F8F"} clipPathId="EnginePclip1" slug={"variant8"} />
                  <Text className="text-[0.5rem] font-semibold  text-white  text-center">{tab.title}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Tabs Content */}
            {
              mapData ? (
                <View className="relative w-full " style={{ height: scrollParentHeight2 - 20 + 8 }}>
                  <Animated.ScrollView
                    showsVerticalScrollIndicator={false}
                    ref={contentRef}
                    onContentSizeChange={handleContentSizeChange2}
                    onScroll={scrollHandler2} scrollEventThrottle={16} showsHorizontalScrollIndicator={false}
                    className="  h-[100%] w-[89%] no-scrollbar mt-2"
                  >
                    {tabsData[activeTab]?.content?.map((item, idx) =>
                      typeof item === "string" ? (
                        <Text key={idx} className="mb-2">
                          {item}
                        </Text>
                      ) : (
                        <Animated.View
                          key={idx}
                          style={[idx !== tabsData.length && { borderBottomColor: "#00000014", borderBottomWidth: 1 }, animatedStyle]}
                          className={`flex  flex-row items-center pl-[10px]  gap-[20px] py-4`}
                        >

                          {isFleetData ? (
                            <>
                              <View className="bg-white  rounded-full  overflow-hidden w-[60px] h-[60px]" style={{ ...boxShadow("#6b646426", 3, 7, 0.2, 20, 10) }}>

                                <Image
                                  source={item.image}
                                  className="w-full h-full"

                                  resizeMode="cover"
                                />
                              </View>

                              <View className="flex gap-1">
                                <Text className="text-[#363535] text-[0.7rem] font-ObjektivMk1Bold">{item.content1.enginetext}</Text>
                                <Text className="text-[#CE2028] text-[0.9rem] font-ObjektivMk2Black">{item.content1.engineNumber}</Text>
                                <Text className="text-[rgba(0, 0, 0, 0.7)] text-[0.7rem] font-objektiv">{item.content1.engineCraft}</Text>
                              </View>

                              <View>

                                <View className="bg-white  rounded-full overflow-hidden  w-[60px] h-[60px] p-1" style={{ ...boxShadow("#6b646426", 3, 7, 0.2, 20, 10) }}>

                                  <View className="w-full h-full overflow-hidden  rounded-full " style={{ ...boxShadow("#6b646426", 3, 7, 0.2, 20, 10) }}>

                                    <Image
                                      source={item.content2.image}
                                      className="w-full h-full"

                                      resizeMode="cover"
                                    />
                                  </View>
                                </View>

                                <Text className="text-[rgba(0, 0, 0, 0.7)] text-[0.7rem] font-objektiv">
                                  {item.content2.engineCraft}
                                </Text>
                              </View>

                              {item.content3 && (
                                <View >

                                  <View className="bg-white  rounded-full overflow-hidden  w-[60px] h-[60px] p-1" style={{ ...boxShadow("#6b646426", 3, 7, 0.2, 20, 10) }}>
                                    <View className="w-full h-full overflow-hidden  rounded-full " style={{ ...boxShadow("#6b646426", 3, 7, 0.2, 20, 10) }}>

                                      <Image
                                        source={item.content3.image}
                                        className="w-full h-full"

                                        resizeMode="cover"
                                      />
                                    </View>
                                  </View>

                                  <Text className="text-[rgba(0, 0, 0, 0.7)] text-[0.7rem] font-objektiv">
                                    {item.content3.engineCraft}
                                  </Text>
                                </View>
                              )}
                            </>
                          ) : (
                            <>


                              <View>
                                <Text className="text-[rgba(0, 0, 0, 0.7)] text-[0.7rem] font-ObjektivMk1Bold">{item.enginetext}</Text>
                                <Text className="text-[rgba(0, 0, 0, 0.7)] text-[0.7rem] font-objektiv">{item.description}</Text>
                              </View>
                            </>
                          )}

                        </Animated.View>
                      )
                    )}
                    {/* Custom Scrollbar Red Dot */}
                  </Animated.ScrollView>
                  {isOverflowing && (
                    <View className="bg-[#D9D9D9] w-[3px] right-[20px] top-[0px] h-[80%]  absolute">
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
              ) : (
                <View className="relative w-full " style={{ height: scrollParentHeight2 - 20 + 8 }}>
                  <Animated.ScrollView
                    showsVerticalScrollIndicator={false}
                    ref={contentRef}
                    onContentSizeChange={handleContentSizeChange2}
                    onScroll={scrollHandler2} scrollEventThrottle={16} showsHorizontalScrollIndicator={false}
                    className="  h-[100%] w-[89%] no-scrollbar mt-2"
                  >
                    {tabsData[activeTab]?.content?.map((item, idx) =>
                      typeof item === "string" ? (
                        <Text key={idx} className="mb-2">
                          {item}
                        </Text>
                      ) : (
                        <Animated.View
                          key={idx}
                          style={[idx !== tabsData.length && { borderBottomColor: "#00000014", borderBottomWidth: 1 }, animatedStyle]}
                          className={`flex  ${tabsData[activeTab].title === "Platforms"
                            ? "flex-row items-center pl-[10px]"
                            : " flex-row items-center pl-[10px]"
                            }  gap-[20px] py-4`}
                        >
                          <View className={`${tabsData[activeTab].title == "Specifications" || tabsData[activeTab].title == "Customers" ? "flex" : "flex-1"}  bg-white`}>
                            <View className="bg-white  rounded-full   w-[60px] h-[60px] p-1" style={{ ...boxShadow("#6b646426", 3, 7, 0.2, 20, 10) }}>
                              <View className="w-full h-full overflow-hidden  rounded-full ">
                                <Image
                                  source={item.image}
                                  className="w-full h-full"

                                  resizeMode="cover"
                                />
                              </View>
                            </View>
                          </View>
                          {/* {tabsData[activeTab].title !== "Platforms" ? (
                        <View className="flex-[2] bg-white">
                          <Text className="font-objektiv text-[1rem]">
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
                      )} */}
                          {tabsData[activeTab].title == "Platforms" || tabsData[activeTab].title == "Highlights" ? (
                            <View className="bg-white flex-1">
                              <Text className="text-[rgba(0, 0, 0, 0.7)] text-[0.7rem] font-ObjektivMk1Bold">
                                {item.enginetext}
                              </Text>
                            </View>
                          ) : (
                            null
                          )}


                          {tabsData[activeTab].title == "Specifications" ? (
                            <View className="bg-white flex-1">
                              <Text className="text-[rgba(0, 0, 0, 0.7)] text-[0.7rem] font-objektiv">
                                {item.description}
                              </Text>
                            </View>
                          ) : (
                            null
                          )}
                          {tabsData[activeTab].title == "Customers" ? (
                            <View className="bg-white flex-1">
                              <Text className="text-[rgba(0, 0, 0, 0.7)] text-[0.7rem] font-objektiv">
                                {item.name}
                              </Text>
                            </View>
                          ) : (
                            null
                          )}
                          {tabsData[activeTab]?.title === "Platforms" || tabsData[activeTab]?.title === "Highlights" ? (
                            <View className="flex-[3]">
                              <Animated.View className="" style={{ height: expandedIndex === idx ? animatedHeight : 40, overflow: 'hidden' }}>
                                {
                                  item.description && (
                                    <Text className="text-[0.8rem] font-objektiv">
                                      {expandedIndex === idx
                                        ? item.description
                                        : `${item.description.slice(0, 50)}...`}{" "}
                                      <Text
                                        className="text-[#CE2028] text-[0.7rem] font-frutigerBold cursor-pointer block"
                                        onPress={() => toggleDescription(idx)}
                                      >
                                        {expandedIndex === idx
                                          ? "Tap to collapse"
                                          : "Tap for more"}
                                      </Text>
                                    </Text>
                                  )
                                }

                              </Animated.View>
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
                    <View className="bg-[#D9D9D9] w-[3px] right-[20px] top-[0px] h-[80%]  absolute">
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
              )
            }
          </View>
        </View>
      </View>
    </View>
  );
}
