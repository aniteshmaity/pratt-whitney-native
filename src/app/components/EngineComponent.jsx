import { View, Text, Image, Button, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import yearImages from "../constants/yearImages";
import GalleryCarousel from "./GalleryCarousel";
import tabsData from "../constants/tabsData";

import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from "react-native-reanimated";

export default function EngineComponent() {
  const [activeTab, setActiveTab] = useState(0);
  const contentRef = useRef(null);
  const gtfImageRef = useRef(null);
  const rotateImgRef = useRef(null);
  const redDotRef = useRef(null);
  const scrollableRef = useRef(null);
  const redDot2Ref = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isScrollableOverflowing, setIsScrollableOverflowing] = useState(false);
  const opacity = useSharedValue(0);

const toggleDescription = (index) => {
 setExpandedIndex(expandedIndex === index ? null : index);
};
console.log("activetab",activeTab);
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

  console.log("contentheight",contentHeight);
  console.log("layoutheight",layoutHeight);
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

  console.log("contentheight",contentHeight);
  console.log("layoutheight",layoutHeight);
  if (redDotRef.current) {
    redDotRef.current.style.top = `${scrollPercentage}%`;
  }

};

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

useEffect(() => {

  opacity.value = withTiming(1, { duration: 900 })

}, [activeTab]);

const animatedStyle = useAnimatedStyle(() => ({
  opacity: opacity.value,

}));

  const Varients = [
    { img: yearImages.gtf, title: "JT3D" },
    { img: yearImages.gtf, title: "TF33" },
  ];
  return (
    <View
      className="grid grid-cols-2  h-[calc(100vh-100px)] "
      style={{
        clipPath:
          "polygon(100% 0%, 100% 0%, 100% 80%, 90% 100%, 10% 100%, 0% 80%, 0% 0%)",
      }}
    >
      <View className="">
        <View className="relative overflow-hidden h-[54%] bg-[#D91027]">
          <Image
            source={yearImages.machine1}
            alt=""
            className="max-w-[99.5%] max-h-full h-full object-cover pr-1"
            resizeMode="cover"
          />
        </View>
        <View className="bg-[#D91027] h-[46%]  relative px-[2.2px] pb-[2.2px]">
          <View
            className="red-border bg-[#393636] h-full w-full flex flex-col justify-center z-10"
            style={{
              clipPath:
                "polygon(100% 0%, 100% 100%, 90% 100%, 20% 100%, 0% 56%, 0% 0%)",
            }}
          >
            <View className="">
              <View className="w-[90%] m-auto">
                <Image
                  source={yearImages.galleryText}
                  className="w-[30%]"
                  alt=""
                  style={{width:131, height:28}}
                  resizeMode="cover"
                />
              </View>
              <View className="slider-section w-[90%] m-auto mt-8">
                <GalleryCarousel />
              </View>
            </View>
          </View>
        </View>
      </View>

      <View className=" py-4 overflow-y-hidden relative bg-white">
        {/* <View
              // onClick={handleCloseApp}
              id="app_close"
              style={{
                clipPath:
                  "polygon(100% 0%, 100% 0%, 100% 80%, 80% 100%, 10% 100%, 0% 100%, 0% 0%)",
              }}
              className="cursor-pointer  w-[44px] h-[32px] bg-[#918F8F] flex justify-center items-center text-white font-bold absolute right-1 top-0"
            >
              <img src={Close} alt="close_arrow" />
            </View> */}

        <View
          className="bg-[#D91027] w-[78%] pr-1 py-1"
          style={{
            clipPath:
              "polygon(100% 0%, 100% 0%, 100% 50%, 90% 100%, 0% 100%, 0 0)",
          }}
        >
          <View
            className="bg-[#393637] px-5 py-3"
            style={{
              clipPath:
                "polygon(100% 0%, 100% 0%, 100% 50%, 90% 100%, 0% 100%, 0 0)",
            }}
          >
            <Text className="text-[2.2rem] font-[900] leading-tight text-white">
              {" "}
              TF33 Engine
            </Text>
            <Text className="text-[#CE2028] text-[0.8rem] font-medium pt-1">
              A Legend Engine For a legedary Bombar
            </Text>
          </View>
        </View>
        <View className="flex flex-row gap-[40px]  ml-5 mt-5 pb-2 w-[90%] relative">
          <View className=" rounded-full shadow-[3px_7px_20px_10px_#6b646426]  w-[90px] h-[90px] p-1">
            <View className="overflow-hidden w-full h-full  shadow-[3px_7px_10px_5px_#6b646426]  rounded-full">
              <Image
                source={yearImages.gtf}
                alt=""
                className="h-full w-full object-cover object-center"
                resizeMode="cover"
                style={{ width:80, height:80}}
              />
            </View>
          </View>
          <ScrollView onScroll={handleScroll1} ref={scrollableRef}  scrollEventThrottle={16} showsHorizontalScrollIndicator={false}>
          <Text
            
            className="text-[rgba(0, 0, 0, 0.7)] h-[86px]   pr-[40px] text-[0.7rem]"
          >
            The Pratt & Whitney GTF™ engine is the only geared propulsion system
            delivering industry-leading fuel efficiency and sustainability
            benefits. Our geared fan has fundamentally changed how more
            sustainable propulsion works. Having quickly become the foundation
            of our industry’s The Pratt & Whitney GTF™ engine is the only geared
            changed how more sustainable propulsion works. Having quickly become
            the foundation of our industry’s The Pratt & Whitney GTF™ engine is
            the only geared
          </Text>
          </ScrollView>
         
          {isScrollableOverflowing && (
            <View className="bg-[#D9D9D9] w-1.5  right-0 top-0 h-full translate-x-1/2 absolute">
              <View
                ref={redDot2Ref}
                className=" w-5 h-5 bg-[#D9D9D9] rounded-full absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center"
              >
                <View className="bg-red-600 rounded-full w-2.5 h-2.5" />
              </View>
            </View>
          )}
        </View>
        <View className="flex gap-[40px] flex-row ml-5 mt-5 items-center">
          <Text className="text-[#CE2028] text-[12px] font-[800]">Select Variat</Text>

          {Varients.map((item, index) => {
            return (
              <View className="" key={index}>
                <View className=" rounded-full shadow-[3px_7px_20px_10px_#6b646426]  w-[40px] h-[40px] p-1">
                  <View className="overflow-hidden w-full h-full shadow-[3px_7px_10px_5px_#6b646426]  rounded-full">
                    <Image
                      source={item.img}
                      alt=""
                      className="h-full w-full object-cover object-center"
                      resizeMode="cover"
                      style={{ width:'100%', height:'100%'}}
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

        <View className="mt-[14px] relative h-full">
          <View className="w-full h-[24px]  absolute top-[1px] shadow-[-1px_4px_5px_1px_#514b4b33]" />
          <View className="ml-5  overflow-hidden w-[86%]  h-[calc(100%-402px)]">
            {/* Tabs Navigation */}
            <View
              className="flex flex-row justify-between bg-[#918F8F] w-[86%]"
              style={{
                clipPath:
                  "polygon(3% 0px, 97% 0px, 100% 35%, 100% 100%, 0px 100%, 0px 40%)",
              }}
            >
              {tabsData.map((tab, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setActiveTab(index)}
                  className={`flex-1 px-4 py-[6px] text-[0.5rem] font-semibold text-white ${
                    activeTab === index ? "bg-[#CE2028]" : ""
                  } transition duration-300`}
                >
                  {tab.title}
                </TouchableOpacity>
              ))}
            </View>

            {/* Tabs Content */}
            <ScrollView
              ref={contentRef}
              onScroll={handleScroll}   scrollEventThrottle={16} showsHorizontalScrollIndicator={false}
              className="relative mt-4 h-[calc(100%-52px)] w-[89%] no-scrollbar ml-[20px] "
            >
              {tabsData[activeTab].content.map((item, idx) =>
                typeof item === "string" ? (
                  <Text key={idx} className="mb-2">
                    {item}
                  </Text>
                ) : (
                  <Animated.View
                    key={idx}
                    style={[animatedStyle]}
                    className={`flex ${
                      tabsData[activeTab].title === "Platforms"
                        ? "grid grid-cols-[1fr_1fr_4fr]"
                        : "flex justify-between"
                    }  gap-[30px] border-b py-2`}
                  >
                    <Image
                      source={yearImages.gtf}
                      alt=""
                      className="w-[60px] h-[60px] object-cover"
                      style={{ width:40, height:40}}
                      resizeMode="cover"
                    />
                    {tabsData[activeTab].title !== "Platforms" ? (
                      <View>
                        <Text className="font-bold text-[1.2rem]">
                          {item.heading}
                        </Text>
                        {/* <ol className=" text-gray-600 list-disc text-[0.8rem] list-inside">
                                       {item.details.map((detail, i) => (
                                         <li key={i}>{detail}</li>
                                       ))}
                                     </ol> */}
                      </View>
                    ) : (
                      ""
                    )}

                    <View>
                      <Text className="text-[#CE2028] text-[1.5rem] font-[900]">
                        {item.bypassRatio}
                      </Text>
                      <Text className="text-[rgba(0, 0, 0, 0.7)] text-[0.9rem]">
                        {item.enginetext}
                      </Text>
                    </View>
                    {tabsData[activeTab].title !== "Platforms" ? (
                      <View>
                        <Text className="text-[#CE2028] font-[800] text-[1.5rem]">
                          {item.fanDiameter}
                        </Text>
                        <Text className="text-[rgba(0, 0, 0, 0.7)] text-[0.9rem]">
                          Fan diameter
                        </Text>
                      </View>
                    ) : (
                      ""
                    )}
                    {tabsData[activeTab].title === "Platforms" ? (
                      <View>
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
                      ""
                    )}
                  </Animated.View>
                )
              )}
              {/* Custom Scrollbar Red Dot */}
            </ScrollView>
            {isOverflowing && (
              <View className="bg-[#D9D9D9] w-1.5 right-[100px] top-[50px] h-[30%] translate-x-1/2 absolute">
                <View
                  ref={redDotRef}
                  className="w-5 h-5 bg-[#D9D9D9] rounded-full absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center"
                >
                  <View className="bg-red-600 rounded-full w-2.5 h-2.5" />
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
