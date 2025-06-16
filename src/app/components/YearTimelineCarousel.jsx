import { View, Text, Image, Button, TouchableOpacity, ScrollView, Linking, Dimensions, ActivityIndicator } from 'react-native'
import React, { useCallback, useEffect, useRef, useState, useMemo } from 'react'
import CloseButton from './CloseButton ';

import Swiper from "react-native-swiper";
import PrevNextButton from './buttons/PrevNextButton';
import yearSlideData from '../constants/yearSlideData'
import CloneItem from './CloneItem';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import yearSlidedata from '../constants/yearSlideData';
import InnerCarousel from './InnerCarousel';
import { useRouter } from 'expo-router';
import Svg, { Defs, ClipPath, Polygon, Rect, G } from 'react-native-svg';
import boxShadow from '../constants/boxShadow';
import MyTextBtn from './buttons/MyTextBtn';
import CustomCloseButton from './buttons/CustomCloseButton';
import ClippedView from './ClippedView';  
import yearImages from '../constants/yearImages';
import { FlatList } from 'react-native-gesture-handler';
import CustomTextButton from './buttons/CustomTextButton';
import Carousel from 'react-native-reanimated-carousel';

const { width:screenWidth,height } = Dimensions.get('window');

// Memoized Slide Item Component
const SlideItem = React.memo(({ slide, index, currentInnerSlide, innerSlideStatus, onImageClick, goToYearExplore, prevContentClones, nextContentClones, activeId, activeNextId, animationTrigger, direction, mainSlideStyle }) => {
  const description = innerSlideStatus
    ? slide?.innerSlidesData[currentInnerSlide]?.description
    : slide?.description;
  const formattedDescription = Array.isArray(description)
    ? description
    : [{ text: description, bold: false }];

  const slideImages =
    slide?.innerSlidesData[currentInnerSlide]?.slideImages ||
    slide?.slideImages ||
    [];

  return (
    <View
      key={index}   
      className=" flex-1 slider-item w-full h-full "
    >
      <View className="relative w-[430px] m-auto ">
        <View className="w-[16px] h-[170px] absolute bg-[#E11C37] top-0 -left-[16px]" />
        <View className="main_box  h-[350px] ">
        
       
          <Animated.View className="main_box2 card_clip py-[30px] pl-[20px] pr-[30px] h-full " style={[ mainSlideStyle ]}>
              <ClippedView width={430} height={350} backgroundColor="white" clipPathId="slidecard1" slug="variant11" />
            <View className='w-full flex flex-row'>
              <View className=" flex-1 ">
                <TouchableOpacity
                  onPress={() => onImageClick(0, slideImages)}
                >
                  <Image
                    style={{ width: "90%", height: 150, resizeMode: 'cover' }}
                    source={
                      innerSlideStatus
                        ? slide?.innerSlidesData[currentInnerSlide]?.image
                        : slide?.image
                    }
                    alt="Slide main Image"
                  />
                </TouchableOpacity>
                      
                <View className=" pt-3 w-[90%]">
                  <InnerCarousel
                    onImageClick={onImageClick}
                    images={
                      slide?.innerSlidesData[currentInnerSlide]?.slideImages ?? []
                    }
                  />
                </View>
              </View>
             
              <View className="w-full  flex-1">
                <View className="">
                  <Text className="year  text-[1.5rem] text-red-600 font-objectiveBlk">
                    {innerSlideStatus
                      ? slide?.innerSlidesData[currentInnerSlide]?.year
                      : slide?.year}
                  </Text>
            
                  <Text className=" text-[1.15rem] leading-tight font-ObjektivMk2Black">
                    {innerSlideStatus
                      ? slide?.innerSlidesData[currentInnerSlide]?.title
                      : slide.title}
                  </Text>
                </View>
                <Text className="text-[20px]  mt-2">
                  <Text className=" text-[0.82rem] font-ObjektivSBd">
                    {innerSlideStatus
                      ? slide?.innerSlidesData[currentInnerSlide]?.subtitle
                      : slide?.subtitle}
                  </Text>
                </Text>
                <ScrollView className="h-[60px] mt-3">
                  <Text style={{ fontSize: 14, lineHeight: 18, fontFamily: "Frutiger" }}>
                    {formattedDescription?.map((part, index) => (
                      part.link ? (
                        <Text
                          key={index}
                          className="text-blue-600 text-[0.7rem] underline leading-tight font-frutigerReg"
                          onPress={() => Linking.openURL(part.link)} 
                        >
                          {part.text}
                        </Text>
                      ) : (
                        <Text 
                          key={index} 
                          className={`text-[0.7rem]   leading-tight ${part.bold ? "font-frutigerBlack" : "font-frutigerReg"}`}
                        >
                          {part.text}
                        </Text>
                      )
                    ))}
                  </Text>
                </ScrollView>
                <View className="flex flex-row z-50 mt-3">
                  <CustomTextButton
                    className={"w-[98px] h-[26px] "}
                    onPress={() => goToYearExplore(slide.year, slide?.innerSlidesData[currentInnerSlide].id)}
                    title={"Explore"}
                    textClass={" font-[700] text-[0.65rem] font-objektiv tracking-widest "}
                    boxLeftClass={"w-[13px] h-[13px] -left-[6.5px]  -top-[6.5px] bg-white"}
                    boxRightClass={"w-[13px] h-[13px] -right-[6.5px] -bottom-[6.5px] bg-white"} 
                  />
                </View>
              </View>
            </View>
          </Animated.View>

          {prevContentClones &&
            prevContentClones.map((clone, index) => (
              <CloneItem 
                key={clone.id}
                clone={clone}
                index={index}
                activeId={activeId}
                isPrev={true}
                slide={slide}
                animationTrigger={animationTrigger}
                direction={direction}
                currentInnerSlide={currentInnerSlide ?? 0} 
                bgColor={"white" }
              />
            ))}

          {nextContentClones &&
            nextContentClones.map((clone, index) => (
              <CloneItem 
                key={clone.id}
                clone={clone}
                index={index}
                activeId={activeNextId}
                isPrev={false}
                slide={slide}
                animationTrigger={animationTrigger}
                currentInnerSlide={currentInnerSlide ?? 0} 
                direction={direction}
                bgColor={"white" }
              />
            ))}
        </View>
      </View>

      {/* Timeline Content */}
      <View className="h-[3px] w-full absolute bg-[#00000014] top-1/2 -translate-y-1/2   -z-10">
        {slide.timeline.map((timeline, i) => (
          <View
            key={i}
            className={`w-[3px] absolute h-[260px] ${i === 0 ? "left-[7%]" : "right-[7%]"} bg-[#00000014] bottom-0`}
          >
            <View className="bg-[#B7B7B7] w-2.5 h-2.5 rounded-full absolute bottom-0 left-1/2 trasform -translate-x-1/2"></View>
      
            <View className="w-[95px] h-[95px] bg-white  rounded-full p-2  left-1/2 transform -translate-x-1/2 "   style={{  ...boxShadow("#dddddd80", 0, 3, 0.2, 5, 5) }}>
              <View className=" rounded-full w-full h-full  bg-white flex justify-center items-center " style={{  ...boxShadow("#dddddd80", 0, 3, 0, 5, 5) }}>
                <View className="p-1">
                  <Text className="text-red-400  text-[20px] text-center font-objectiveBlk">
                    {timeline.year}
                  </Text>
                  <Text className="text-[0.5rem] font-[800] text-center font-objektiv">
                    {timeline.text}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
});

export default function YearTimelineCarousel({ Year, animateAirplanes, handleChangeYearFlag, setImagePosition, animatedX, onImageClick, handleDataFromChild,yearParam }) {
  const getInitialSlideIndex = useCallback(() => {
    const index = yearSlideData.findIndex((slide) => slide.year === Year);
    return index !== -1 ? index : 0;
  }, [Year]);

const carouselRef = useRef(null);
const [currentSlide, setCurrentSlide] = useState(0);
const [prevContentClones, setPrevContentClones] = useState([]);
const [nextContentClones, setNextContentClones] = useState([]);
const [isManualChange, setIsManualChange] = useState(false);
const [currentInnerSlide, setCurrentInnerSlide] = useState(0);
const [innerSlideStatus, setInnerSlideStatus] = useState(true);
const [slideDataIndex, setSlideDataIndex] = useState(getInitialSlideIndex);
const [activeId, setActiveId] = useState(null);
const [activeNextId, setActiveNextId] = useState(null);
const [animationTrigger, setAnimationTrigger] = useState(0);
const [direction, setDirection] = useState("next");
const [navigationDirection,setNavigationDirection] = useState("next");

  const router = useRouter();

  console.log("slideDataIndex",slideDataIndex);
  const goToYearExplore = useCallback((year, id) => {
    router.push({
      pathname: '/hundred-years/yearEngineDetails',
      params: { 
        year: year, 
        targetId: id
      }
    });
  }, [router]);

  useEffect(() => {
    handleDataFromChild(currentSlide)
  },[currentSlide]);

  // Create shared values outside of any render cycle
  const opacity = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  
  const animateSlide = useCallback((x, y) => {
    'worklet';
    translateX.value = x;
    translateY.value = y;

    // Use runOnJS to schedule the animation on the JS thread
    setTimeout(() => {
      translateX.value = withTiming(0, { duration: 500 });
      translateY.value = withTiming(0, { duration: 500 });
    }, 0);
  }, []);

  const mainSlideStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      { translateX: translateX.value + "%" },
      { translateY: translateY.value + "%" },
    ],
  }));

  const handleNextClick = useCallback(() => {
    setIsManualChange(true);
    if (currentSlide === yearSlideData.length - 1) return;
    setNavigationDirection("next");
    setDirection("next");
    setPrevContentClones([]);
    setNextContentClones([]);
    setAnimationTrigger(0)
    setCurrentInnerSlide(0);
    setImagePosition((prev) => prev + 50);
    animateAirplanes(currentSlide + 2, "next");
    setSlideDataIndex((prev) => prev + 1);

    if (carouselRef.current && currentSlide < yearSlideData.length - 1) {
      carouselRef.current?.scrollTo({ index: currentSlide + 1 });
    }
    setActiveNextId(null);
    setActiveId(null);
  }, [currentSlide, yearSlideData.length, setImagePosition, animateAirplanes]);

  const handlePrevClick = useCallback(() => {
    setIsManualChange(true);
    if (slideDataIndex === 0 || currentSlide === 0) return;
    setNavigationDirection("prev");
    setPrevContentClones([]);
    setDirection("prev");
    animateAirplanes(currentSlide + 1, "prev");
    setImagePosition((prev) => prev - 50);
    const previousIndex = currentSlide - 1;
    const specificSlide = yearSlideData[previousIndex];

    setCurrentInnerSlide(specificSlide?.innerSlidesData?.length - 1 || 0);
    setSlideDataIndex((prev) => prev - 1);
    if (carouselRef.current && currentSlide > 0) {
      carouselRef.current?.scrollTo({ index: currentSlide - 1 });
    }
    setActiveNextId(null);
    setActiveId(null);
  }, [slideDataIndex, currentSlide, setImagePosition, animateAirplanes]);

  const handleInnerPrev = useCallback(() => {
    setAnimationTrigger((prev) => prev + 1);
    setDirection("prev");
    
    // Create clone for previous slide
    const specificSlide = yearSlideData[slideDataIndex];
    const previousInnerIndex = currentInnerSlide > 0 ? currentInnerSlide - 1 : specificSlide?.innerSlidesData?.length - 1;
    
    const currentClone = {
      ...specificSlide.innerSlidesData[currentInnerSlide],
      name: `prevContentClone-${currentInnerSlide}`,
      id: currentInnerSlide,
      x: "0%",
      y: "0%",
      height: "100%",
      width: "100%",
      maxWidth: "100%",
      opacity: 0,
      scale: 1,
    };

    // Add clone to prevContentClones
    setPrevContentClones((prevClones) => [currentClone, ...prevClones]);
    setActiveId(currentInnerSlide);
    
    // Update current inner slide
    setCurrentInnerSlide(previousInnerIndex);
    setActiveId(previousInnerIndex);
    
    // Remove from nextContentClones if exists
    setNextContentClones((prev) => prev.slice(0, prev.length - 1));
    
    // Trigger slide animation
    setTimeout(() => {
      animateSlide(-90, 150);
    }, 100);
  }, [slideDataIndex, currentInnerSlide, animateSlide]);

  const handleInnerNext = useCallback(() => {
    setAnimationTrigger((prev) => prev + 1);
    setDirection("next");
    
    // Create clone for next slide
    const specificSlide = yearSlideData[slideDataIndex];
    const nextInnerIndex = currentInnerSlide < specificSlide?.innerSlidesData?.length - 1 ? currentInnerSlide + 1 : 0;
    
    const currentClone = {
      ...specificSlide.innerSlidesData[currentInnerSlide],
      name: `nextContentClone-${currentInnerSlide}`,
      id: currentInnerSlide,
      x: "0%",
      y: "0%",
      height: "100%",
      width: "100%",
      maxWidth: "100%",
      opacity: 0,
      scale: 1,
    };

    // Add clone to nextContentClones
    setNextContentClones((prevClones) => [...prevClones, currentClone]);
    setActiveNextId(currentInnerSlide);
    
    // Update current inner slide
    setCurrentInnerSlide(nextInnerIndex);
    setActiveNextId(nextInnerIndex);
    
    // Remove from prevContentClones if exists
    setPrevContentClones((prev) => prev.slice(1));
    
    // Trigger slide animation
    setTimeout(() => {
      animateSlide(90, 150);
    }, 100);
  }, [slideDataIndex, currentInnerSlide, animateSlide]);

  const generatePrevClones = useCallback((slideIndex) => {
    const specificSlide = yearSlideData[slideIndex];

    if (specificSlide?.innerSlidesData) {
      return specificSlide.innerSlidesData
        .slice(1)
        .map((innerSlide, index) => ({
          ...innerSlide,
          name: `prevContentClone-${index + 1}`,
          id: index + 1,
          x: `${150 + index * 30}%`,
          y: "100%",
          scale: 0.9,
          opacity: 1,
          isActive: false,
        }));
    }
    return [];
  }, []);

  const generateNextClones = useCallback((slideIndex) => {
    const specificSlide = yearSlideData[slideIndex];

    if (specificSlide?.innerSlidesData) {
      return specificSlide.innerSlidesData
        .slice(0, -1)
        .map((innerSlide, index) => ({
          ...innerSlide,
          name: `nextContentClone-${index}`,
          id: index,
          x: `${-180 + index * 30}%`,
          y: "100%",
          height: "80px",
          width: "200px",
          scale: 0.9,
          opacity: 1,
        }));
    }
    return [];
  }, []);

  useEffect(() => {
    const initialPrevClones = generatePrevClones(slideDataIndex);
    const initialNextClones = generateNextClones(slideDataIndex);
    
    if (navigationDirection === "next") {
      setPrevContentClones(initialPrevClones);
    } else {
      setNextContentClones(initialNextClones);
    }
  }, [slideDataIndex, navigationDirection]);

  useEffect(() => {
    const initialIndex = yearSlideData.findIndex((slide) => slide.year === Year);
    setCurrentSlide(initialIndex);
    // animateAirplanes(initialIndex + 1, "next");
  }, [Year, animateAirplanes])

  useEffect(() => {
    setImagePosition((prev) => prev + 50);
  }, [setImagePosition]);

  useEffect(() => {
    const yearIndex = yearSlideData.findIndex((e)=> e.year === Year)
    setSlideDataIndex(yearIndex)
    carouselRef.current?.scrollTo({ index: yearIndex, animated: true });
  }, [Year]);

  useEffect(()=> {
    if (yearParam) {
      const yearIndex = yearSlideData.findIndex((e)=> e.year === yearParam)
      if(carouselRef.current){
        carouselRef.current.scrollTo(yearIndex,true);
      }
    }
  },[yearParam]);

  const handleSlideChange = useCallback((index) => {
    console.log("handelslide");
    if(index > currentSlide ){
      setNavigationDirection("next");
      setDirection("next");
      // setPrevContentClones([]);
      setNextContentClones([]);
      setAnimationTrigger(0)
      setCurrentInnerSlide(0);
      setImagePosition((prev) => prev + 50);
      animateAirplanes(index + 1, "next");
    } else {
      setNavigationDirection("prev");
      setPrevContentClones([]);
      setDirection("prev");
      animateAirplanes(index , "prev");
      setImagePosition((prev) => prev - 50);
      const previousIndex = currentSlide - 1;
      const specificSlide = yearSlideData[previousIndex];
      setCurrentInnerSlide(specificSlide?.innerSlidesData?.length - 1 || 0);
    }
  }, [currentSlide, setImagePosition, animateAirplanes]);

  // Memoize the renderItem function to prevent unnecessary re-renders
  const renderItem = useCallback(({ item: slide, index }) => {
    return (
      <SlideItem
        slide={slide}
        index={index}
        currentInnerSlide={currentInnerSlide}
        innerSlideStatus={innerSlideStatus}
        onImageClick={onImageClick}
        goToYearExplore={goToYearExplore}
        prevContentClones={prevContentClones}
        nextContentClones={nextContentClones}
        activeId={activeId}
        activeNextId={activeNextId}
        animationTrigger={animationTrigger}
        direction={direction}
        mainSlideStyle={mainSlideStyle}
      />
    );
  }, [
    currentInnerSlide,
    innerSlideStatus,
    onImageClick,
    goToYearExplore,
    prevContentClones,
    nextContentClones,
    activeId,
    activeNextId,
    animationTrigger,
    direction,
    mainSlideStyle
  ]);

  return (
    <View className="relative w-full h-full">
      <View className="absolute left-4  top-[40%]  -translate-y-1/2 z-50" >
        <PrevNextButton
          isColor="grey" 
          isIcon='prev'
          isPolygon="first"
          onPress={ nextContentClones?.length > 0 ? handleInnerPrev : handlePrevClick }
        />
      </View>
        
      <View className="absolute right-4  top-[40%]  -translate-y-1/2 z-50 ">
        <PrevNextButton
          isColor="red"
          isIcon='next'
          onPress={ prevContentClones?.length > 0 ? handleInnerNext : handleNextClick}
        />
      </View>

      <Carousel
        ref={carouselRef}
        width={screenWidth}
        height={height}
        data={yearSlideData}
        autoPlay={false}
        loop={false}
        windowSize={2}
        onSnapToItem={(index) =>  {
          setCurrentSlide(index)
          setSlideDataIndex(index)
          handleSlideChange(index)
        }}
        renderItem={renderItem}
      />
    </View>
  )
}



