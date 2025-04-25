import { View, Text, Image, Button, TouchableOpacity, ScrollView, Linking, Dimensions, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
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

const { width:screenWidth,height } = Dimensions.get('window');

export default function YearTimelineCarousel({ Year, animateAirplanes, handleChangeYearFlag, setImagePosition, animatedX, onImageClick, handleDataFromChild,yearParam }) {
  const getInitialSlideIndex = () => {
    const index = yearSlideData.findIndex((slide) => slide.year === Year);
    return index !== -1 ? index : 0; // Default to 0 if Year doesn't match
  };
const swiperRef = useRef(null);
const [currentSlide, setCurrentSlide] = useState(0);
const [currrentSlideStatus ,setCurrentSlideStatus] = useState(false);
const [prevContentClones, setPrevContentClones] = useState([]);
const [nextContentClones, setNextContentClones] = useState([]);
const [currentInnerSlide, setCurrentInnerSlide] = useState(0);
const [innerSlideStatus, setInnerSlideStatus] = useState(false);
const [slideDataIndex, setSlideDataIndex] = useState(getInitialSlideIndex);
   const [showLoader, setShowLoader] = useState(true);
const [activeId, setActiveId] = useState(null);
const [activeNextId, setActiveNextId] = useState(null);
const [animationTrigger, setAnimationTrigger] = useState(0);
const [direction, setDirection] = useState("next");
const [navigationDirection,setNavigationDirection] = useState("next");
  const clipWidth = "100%";
  const clipHeight = "350"
  // console.log("activeyeaer",Year);
  const router = useRouter();
  const goToYearExplore = (year, id) => {
    // Navigate to another screen or action

    router.push({
      pathname: '/hundred-years/yearEngineDetails',
      params: { year: year, targetId: id }
    });
  };

  useEffect(() => {
    handleDataFromChild(currentSlide)
  },[handleDataFromChild,currentSlide]);

  useEffect(() => {
 setTimeout(()=> {
setShowLoader(false);
 },500)
  },[]);

  // Function to trigger animation on button click
  // console.log("year-----", Year);
  
 
  // const [lastIndex, setLastIndex] = useState(currentSlide);
  // const targetIndex = useRef(currentSlide);
  // const [isScrolling, setIsScrolling] = useState(false);

  // const [innerSlideStatus, setInnerSlideStatus] = useState(true);
  // const [slideDataIndex, setSlideDataIndex] = useState(getInitialSlideIndex);
  // const [activeId, setActiveId] = useState(null);
  // const [activeNextId, setActiveNextId] = useState(null);
  // const [animationTrigger, setAnimationTrigger] = useState(0);
  // const [direction, setDirection] = useState("next");
  // const [navigationDirection, setNavigationDirection] = useState("next");
  // const [isAnimating, setIsAnimating] = useState(false);
  console.log("currentinner", currentInnerSlide);
  console.log("curren", currentSlide);

  const opacity = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const animateSlide = (x, y) => {

    translateX.value = x;
    translateY.value = y;


    // Then animate to 0% with timing
    setTimeout(() => {
      translateX.value = withTiming(0, { duration: 500 });
      translateY.value = withTiming(0, { duration: 500 });
    }, 0);

  };

  const handleNextClick = () => {
    // if (currentSlide < yearSlideData.length - 1) {
    //   setCurrentSlide(currentSlide + 1); // Move to next slide
    // }
    // console.log("yearlength",yearSlidedata.length);
    if (currentSlide === yearSlidedata.length - 1) return;
    setNavigationDirection("next");
    setDirection("next");
    setPrevContentClones([]);
    setNextContentClones([]);
    setAnimationTrigger(0)
    setCurrentInnerSlide(0);
    setImagePosition((prev) => prev + 50);
    animateAirplanes(currentSlide + 2, "next");
    // setCurrentSlideStatus(false);
    setSlideDataIndex((prev) => prev + 1);

    if (swiperRef.current && currentSlide < yearSlideData.length - 1) {
      swiperRef.current.scrollToIndex({ index: currentSlide + 1, animated: true });
      // setCurrentSlide((prev) => prev + 1)
    }
    //   console.log("clicked," , swiperRef.current);
    setActiveNextId(null);
    setActiveId(null);
  }
  const handlePrevClick = () => {
    if (slideDataIndex === 0 || currentSlide === 0) return;
    setNavigationDirection("prev");
    setPrevContentClones([]);
    setDirection("prev");
    animateAirplanes(currentSlide + 1, "prev");
    setImagePosition((prev) => prev - 50);
    const previousIndex = currentSlide - 1;
    const specificSlide = yearSlidedata[previousIndex];

    setCurrentInnerSlide(specificSlide?.innerSlidesData?.length - 1 || 0);
    setSlideDataIndex((prev) => prev - 1);
    if (swiperRef.current && currentSlide > 0) {
      swiperRef.current.scrollToIndex({ index: currentSlide - 1, animated: true });
    }
    setActiveNextId(null);
    setActiveId(null);
  }

  const handleInnerPrev = () => {

    setAnimationTrigger((prev) => prev + 1);
    animateInnerSlide("prev");
    setDirection("prev");
    setTimeout(() => {
      animateSlide(-90, 150);
    }, 100);
  }
  const handleInnerNext = () => {
    // console.log("ok-2");
    setAnimationTrigger((prev) => prev + 1);
    animateInnerSlide("next");
    setTimeout(() => {
      animateSlide(90, 150);
    }, 100);
    setDirection("next");

  }
  const animateInnerSlide = (direction) => {
    const specificSlide = yearSlideData[slideDataIndex];

    if (direction === "next") {

      const firstCloneIndex = prevContentClones[0]?.name;
      const currentClone = {
        ...specificSlide.innerSlidesData[currentInnerSlide], // Use the current slide's data
        name: `nextContentClone-${currentInnerSlide}`,
        id: currentInnerSlide,
        x: "0%", // Start position for the clone
        y: "0%",
        height: "100%",
        width: "100%",
        maxWidth: "100%",
        opacity: 1,
        scale: 1,
      };

      // Append the new clone to the existing array of NextContentClones
      setNextContentClones((prevClones) => {
        const isDuplicate = prevClones.some((clone) => clone.id === currentInnerSlide);
        if (!isDuplicate) {
          return [...prevClones, currentClone];
        }
        return prevClones; // Return unchanged if duplicate found
      });

      setActiveNextId(currentInnerSlide);
      setCurrentInnerSlide((prevSlide) => {
        const maxIndex = yearSlideData[slideDataIndex].innerSlidesData.length - 1;
        setActiveNextId(prevSlide + 1); // Update active ID
        return prevSlide < maxIndex ? prevSlide + 1 : prevSlide;
      });
      // Remove the first clone from the array without altering others
      setImmediate(() => {
        setPrevContentClones((prev) => prev.filter((clone) => clone.name !== firstCloneIndex));
      });

    }
    if (direction === "prev") {
      // Create a new clone for the prev animation
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
      setImmediate(() => {
        setNextContentClones((prev) => prev.slice(0, prev.length - 1));
      });

      setPrevContentClones((prevClones) => [currentClone, ...prevClones]);
      setActiveId(currentInnerSlide);
      setCurrentInnerSlide((prevSlide) => {
        const maxIndex = yearSlideData[slideDataIndex].innerSlidesData.length - 1;
        setActiveId(prevSlide - 1);
        return prevSlide > 0 ? prevSlide - 1 : maxIndex; // Loop back if at the start
      });

      // setCurrentSlideStatus(false);
    }


  }

  const generatePrevClones = (slideIndex) => {
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
  };
  const generateNextClones = (slideIndex) => {
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
  };


  useEffect(() => {
    setInnerSlideStatus(true);
    const initialPrevClones = generatePrevClones(slideDataIndex);

    const initialNextClones = generateNextClones(slideDataIndex);
    if (navigationDirection === "next") {

      setPrevContentClones(initialPrevClones);
    } else {
      setNextContentClones(initialNextClones);
    }

  }, []);

  useEffect(() => {
    const initialIndex = yearSlideData.findIndex((slide) => slide.year === Year);
    setCurrentSlide(initialIndex);
    // setCurrentInnerSlide(initialIndex)
    animateAirplanes(initialIndex + 1, "next");
  }, [Year])

  useEffect(() => {
    // Pass 'initial' to distinguish page load animation
    setImagePosition((prev) => prev + 50);
  }, []);

  const mainSlideStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      { translateX: translateX.value + "%" },
      { translateY: translateY.value + "%" },
    ],
  }));
  useEffect(() => {
    if (swiperRef.current && yearSlideData.length > currentSlide) {
      swiperRef.current.scrollToIndex({ index: currentSlide, animated: true });
    }
  }, [currentSlide, yearSlideData]);

  useEffect(()=> {
 
    if (yearParam) {
  const yearIndex = yearSlideData.findIndex((e)=> e.year === yearParam)
  if(swiperRef.current){
    swiperRef.current.scrollToIndex({ index: yearIndex, animated: true });
  }
    }
  },[yearParam])

  return (

  <>
 {showLoader && (
      <View className="absolute top-0 left-0 right-0 bottom-0 z-50 bg-white justify-center items-center">
        <ActivityIndicator size="large" color="#ff0000" />
      </View>
    )}
    <View className="relative w-full h-full">
     
      <View className="absolute left-4 top-[40%] -translate-y-1/2 z-50" >
        <PrevNextButton
          isColor="grey"
          isIcon='prev'
          isPolygon="first"
          onPress={nextContentClones?.length > 0 ? handleInnerPrev : handlePrevClick}
        />
      </View>



      <View className="absolute right-4 top-[40%] -translate-y-1/2 z-50 ">
        <PrevNextButton
          isColor="red"
          isIcon='next'
          onPress={prevContentClones?.length > 0 ? handleInnerNext : handleNextClick}
        />

      </View>

      <View className="flex-1 ">
        <FlatList
          ref={swiperRef}
          data={yearSlideData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <YearCard index={index} item={item} currentSlide={currentSlide} currentInnerSlide={currentInnerSlide} mainSlideStyle={mainSlideStyle} innerSlideStatus={innerSlideStatus} prevContentClones={prevContentClones} nextContentClones={nextContentClones} animationTrigger={animationTrigger} activeId={activeId} activeNextId={activeNextId} direction={direction}goToYearExplore={goToYearExplore} yearSlideData ={yearSlideData} Year={Year} onImageClick={onImageClick} setImagePosition={setImagePosition}
             handleChangeYearFlag={handleChangeYearFlag} animateAirplanes={animateAirplanes}swiperRef={swiperRef} setCurrentSlide={setCurrentSlide} />
          )}
          keyExtractor={(item,index) =>  index.toString()}
          // onScroll={scrollHandler} // Track scroll position
          scrollEventThrottle={16}
          snapToInterval={screenWidth}
          onMomentumScrollEnd={(e) => {
            const offsetX = e.nativeEvent.contentOffset.x;
            const index = Math.round(offsetX / screenWidth);
            console.log("indexex",index);
            setCurrentSlide(index); 
            setSlideDataIndex(index);
            animateAirplanes(index + 1, "next");
          }}
          getItemLayout={(data, index) => (
            { length: screenWidth, offset: screenWidth * index, index }
          )}
       
          initialScrollIndex={currentSlide}
        />
      </View>

      {/* Swiper Slider */}
      {/* Apply Tailwind styles to the container */}



    </View></>

  )
}

const YearCard = ({ item, index,mainSlideStyle,currentInnerSlide,currentSlide,innerSlideStatus,prevContentClones,nextContentClones,animationTrigger,activeId,activeNextId,direction,goToYearExplore,yearSlideData,Year,animateAirplanes,handleChangeYearFlag,setImagePosition,onImageClick ,swiperRef,setCurrentSlide}) => {

  
  // const getInitialSlideId = () => {
  //   return item.year === Year ? item.id : null;
  // };
  // const [innerSlideStatus, setInnerSlideStatus] = useState(true);
  // const [currentInnerSlide, setCurrentInnerSlide] = useState(0);
  // const [currrentSlideStatus, setCurrentSlideStatus] = useState(false);
  // const [prevContentClones, setPrevContentClones] = useState([]);
  // const [nextContentClones, setNextContentClones] = useState([]);
  // const [slideDataIndex, setSlideDataIndex] = useState(getInitialSlideId);
  // const [activeId, setActiveId] = useState(null);
  // const [activeNextId, setActiveNextId] = useState(null);
  // const [animationTrigger, setAnimationTrigger] = useState(0);
  // const [direction, setDirection] = useState("next");
  // const [navigationDirection, setNavigationDirection] = useState("next");

  // const opacity = useSharedValue(1);
  // const translateX = useSharedValue(0);
  // const translateY = useSharedValue(0);
  // const animateSlide = (x, y) => {

  //   translateX.value = x;
  //   translateY.value = y;


  //   // Then animate to 0% with timing
  //   setTimeout(() => {
  //     translateX.value = withTiming(0, { duration: 500 });
  //     translateY.value = withTiming(0, { duration: 500 });
  //   }, 0);

  // };
  const description = innerSlideStatus
  ? item?.innerSlidesData[currentInnerSlide]?.description
  : item?.description;
  const formattedDescription = Array.isArray(description)
  ? description
  : [{ text: description, bold: false }];
// console.log("formattedDescription",formattedDescription);
 
  // const handleClose = () => {
  //   console.log("cl");
  // }

  // const getPrevHandler = () =>  {
  //   if (nextContentClones?.length > 0) {
  //     handleInnerPrev();
  //   } else {
  //     handlePrevClick();
  //   }
  // };
  // const handleNextClick = () => {
   
  //   if (currentSlide === yearSlidedata.length - 1) return;
  //   setNavigationDirection("next");
  //   setDirection("next");
  //   setPrevContentClones([]);
  //   setNextContentClones([]);
  //   setAnimationTrigger(0)
  //   setCurrentInnerSlide(0);
  //   setImagePosition((prev) => prev + 50);
  //   animateAirplanes(currentSlide + 2, "next");
  //   // setCurrentSlideStatus(false);
  //   setSlideDataIndex((prev) => prev + 1);

  //   if (swiperRef.current && currentSlide < yearSlideData.length - 1) {
  //     swiperRef.current.scrollToIndex(1);
  //   }
  //   //   console.log("clicked," , swiperRef.current);
  //   setActiveNextId(null);
  //   setActiveId(null);
  // }
  // const handlePrevClick = () => {
  //   if (slideDataIndex === 0 || currentSlide === 0) return;
  //   setNavigationDirection("prev");
  //   setPrevContentClones([]);
  //   setDirection("prev");
  //   animateAirplanes(currentSlide + 1, "prev");
  //   setImagePosition((prev) => prev - 50);
  //   const previousIndex = currentSlide - 1;
  //   const specificSlide = yearSlidedata[previousIndex];

  //   setCurrentInnerSlide(specificSlide?.innerSlidesData?.length - 1 || 0);
  //   setSlideDataIndex((prev) => prev - 1);
  //   if (swiperRef.current && currentSlide > 0) {
  //     swiperRef.current.scrollToIndex(-1);
  //   }
  //   setActiveNextId(null);
  //   setActiveId(null);
  // }

  // const handleInnerPrev = () => {

  //   setAnimationTrigger((prev) => prev + 1);
  //   animateInnerSlide("prev");
  //   setDirection("prev");
  //   setTimeout(() => {
  //     animateSlide(-90, 150);
  //   }, 100);
  // }
  // const handleInnerNext = () => {
  //   // console.log("ok-2");
  //   setAnimationTrigger((prev) => prev + 1);
  //   animateInnerSlide("next");
  //   setTimeout(() => {
  //     animateSlide(90, 150);
  //   }, 100);
  //   setDirection("next");

  // }
  // const animateInnerSlide = (direction) => {
  //   const specificSlide = yearSlideData[slideDataIndex];

  //   if (direction === "next") {

  //     const firstCloneIndex = prevContentClones[0]?.name;
  //     const currentClone = {
  //       ...specificSlide.innerSlidesData[currentInnerSlide], // Use the current slide's data
  //       name: `nextContentClone-${currentInnerSlide}`,
  //       id: currentInnerSlide,
  //       x: "0%", // Start position for the clone
  //       y: "0%",
  //       height: "100%",
  //       width: "100%",
  //       maxWidth: "100%",
  //       opacity: 1,
  //       scale: 1,
  //     };

  //     // Append the new clone to the existing array of NextContentClones
  //     setNextContentClones((prevClones) => {
  //       const isDuplicate = prevClones.some((clone) => clone.id === currentInnerSlide);
  //       if (!isDuplicate) {
  //         return [...prevClones, currentClone];
  //       }
  //       return prevClones; // Return unchanged if duplicate found
  //     });

  //     setActiveNextId(currentInnerSlide);
  //     setCurrentInnerSlide((prevSlide) => {
  //       const maxIndex = yearSlideData[slideDataIndex].innerSlidesData.length - 1;
  //       setActiveNextId(prevSlide + 1); // Update active ID
  //       return prevSlide < maxIndex ? prevSlide + 1 : prevSlide;
  //     });
  //     // Remove the first clone from the array without altering others
  //     setImmediate(() => {
  //       setPrevContentClones((prev) => prev.filter((clone) => clone.name !== firstCloneIndex));
  //     });

  //   }
  //   if (direction === "prev") {
  //     // Create a new clone for the prev animation
  //     const currentClone = {
  //       ...specificSlide.innerSlidesData[currentInnerSlide],
  //       name: `prevContentClone-${currentInnerSlide}`,
  //       id: currentInnerSlide,
  //       x: "0%",
  //       y: "0%",
  //       height: "100%",
  //       width: "100%",
  //       maxWidth: "100%",
  //       opacity: 0,
  //       scale: 1,
  //     };
  //     setImmediate(() => {
  //       setNextContentClones((prev) => prev.slice(0, prev.length - 1));
  //     });

  //     setPrevContentClones((prevClones) => [currentClone, ...prevClones]);
  //     setActiveId(currentInnerSlide);
  //     setCurrentInnerSlide((prevSlide) => {
  //       const maxIndex = yearSlideData[slideDataIndex].innerSlidesData.length - 1;
  //       setActiveId(prevSlide - 1);
  //       return prevSlide > 0 ? prevSlide - 1 : maxIndex; // Loop back if at the start
  //     });

  //     // setCurrentSlideStatus(false);
  //   }


  // }
  // const data = [
  //   { id: 1, text: 'Hello Swiper' },
  //   { id: 2, text: 'Beautiful' },
  //   { id: 3, text: 'And simple' },
  //   { id: 4, text: 'Another Slide' }, // Example additional data
  // ];

  // const generatePrevClones = (slideIndex) => {
  //   const specificSlide = yearSlideData[slideIndex];

  //   if (specificSlide?.innerSlidesData) {
  //     return specificSlide.innerSlidesData
  //       .slice(1)
  //       .map((innerSlide, index) => ({
  //         ...innerSlide,
  //         name: `prevContentClone-${index + 1}`,
  //         id: index + 1,
  //         x: `${150 + index * 30}%`,
  //         y: "100%",
  //         scale: 0.9,
  //         opacity: 1,
  //         isActive: false,
  //       }));
  //   }
  //   return [];
  // };
  // const generateNextClones = (slideIndex) => {
  //   const specificSlide = yearSlideData[slideIndex];

  //   if (specificSlide?.innerSlidesData) {
  //     return specificSlide.innerSlidesData
  //       .slice(0, -1)
  //       .map((innerSlide, index) => ({
  //         ...innerSlide,
  //         name: `nextContentClone-${index}`,
  //         id: index,
  //         x: `${-180 + index * 30}%`,
  //         y: "100%",
  //         height: "80px",
  //         width: "200px",
  //         scale: 0.9,
  //         opacity: 1,
  //       }));

  //   }
  //   return [];
  // };


  // useEffect(() => {
  //   setInnerSlideStatus(true);
  //   const initialPrevClones = generatePrevClones(slideDataIndex);

  //   const initialNextClones = generateNextClones(slideDataIndex);
  //   if (navigationDirection === "next") {

  //     setPrevContentClones(initialPrevClones);
  //   } else {
  //     setNextContentClones(initialNextClones);
  //   }

  // }, [slideDataIndex, navigationDirection]);

  // useEffect(() => {
  //   const initialIndex = yearSlideData.findIndex((slide) => slide.year === Year);
  //   setCurrentSlide(initialIndex);
  //   animateAirplanes(initialIndex + 1, "next");
  // }, [Year])

  // useEffect(() => {
  //   // Pass 'initial' to distinguish page load animation
  //   setImagePosition((prev) => prev + 50);
  // }, []);
  // const handleBackYears = (curr) => {
  //   handleChangeYearFlag(curr)
  //   animateAirplanes(currentSlide + 1, "prev");

  // }



 

  // console.log("slide", yearSlideData);
  return (

    <>
   

          <View
      key={index}

      className=" flex-1  w-full h-full "
      style={{width:screenWidth}}
    >
      <View className="relative w-[430px] m-auto ">
        {/* style={{   ...boxShadow("#00000040", 0, 25, 0.25, 50, 10)}}   */}


        <View className="w-[16px] h-[170px] absolute bg-[#E11C37] top-0 -left-[16px]" />
        <View className="main_box  h-[350px] ">
          <ClippedView width={430} height={350} backgroundColor="white" clipPathId="slidecard1" slug="variant11" />


          <Animated.View className="main_box2 card_clip py-[30px] pl-[20px] pr-[30px] h-full bg-transparent" style={[mainSlideStyle]}>
            <View className="absolute top-0 right-0">
              {/* <CustomCloseButton onPress={() => handleBackYears(currentSlide)} type={2} bgOpacity="true" /> */}
            </View>

            <View className="relative w-full flex flex-row items-center">
              <Image
                style={{ width: 160, height: 100, resizeMode: 'contain' }}
                source={
                  innerSlideStatus
                    ? item?.innerSlidesData[currentInnerSlide]?.image
                    : item?.image
                }
                alt="Slide Image"
              />
              <View className="" style={{ flex: 1 }}>

                <Text className="year  text-[1.5rem] text-red-600 font-objectiveBlk">
                  {innerSlideStatus
                    ? item?.innerSlidesData[currentInnerSlide]?.year
                    : item?.year}
                </Text>

                <Text className=" text-[1.15rem] leading-tight font-ObjektivMk2Black">
                  {innerSlideStatus
                    ? item?.innerSlidesData[currentInnerSlide]?.title
                    : item.title}
                </Text>
              </View>
            </View>
            <View className=" pt-3 ">
              <InnerCarousel
                onImageClick={onImageClick}
                images={
                  item?.innerSlidesData[currentInnerSlide]?.slideImages ?? []
                }
              />

            </View>
            <View className="w-full pt-5">
              <Text className="text-[20px]  pb-2">
                <Text className=" text-[0.82rem] font-ObjektivSBd">
                  {innerSlideStatus
                    ? item?.innerSlidesData[currentInnerSlide]?.subtitle
                    : item?.subtitle}
                </Text>
              </Text>
              <ScrollView className="h-[60px] ">
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
                      // <TouchableOpacity key={index} onPress={() => Linking.openURL(part.link)}>

                      // </TouchableOpacity>
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
            </View>

            <View className="flex flex-row z-50 mt-3">
              {/* <MyTextBtn onPress={goToYearExplore}  className={"w-[96px] h-[26px]"}
                                        title={"Gallery"}
                                        bg="black"
                                        textClass={" font-[700] text-[0.65rem] font-objektiv tracking-widest "} /> */}


              {/* <MyTextBtn onPress={() => goToYearExplore(item.year, item?.innerSlidesData[currentInnerSlide].id)} className={"w-[96px] h-[26px] "}
                title={"Explore"}
                textClass={" font-[700] text-[0.65rem] font-objektiv tracking-widest "} /> */}
                  <CustomTextButton
                               className={"w-[98px] h-[26px] "}
                              onPress={() => goToYearExplore(item.year, item?.innerSlidesData[currentInnerSlide].id)}
                
                              title={"Explore"}
                              textClass={" font-[700] text-[0.65rem] font-objektiv tracking-widest "}
                              boxLeftClass={"w-[13px] h-[13px] -left-[6.5px]  -top-[6.5px] bg-white"}
    boxRightClass={"w-[13px] h-[13px] -right-[6.5px] -bottom-[6.5px] bg-white"} 
                            />


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
                slide={item}
                animationTrigger={animationTrigger}
                direction={direction}
                currentInnerSlide={currentInnerSlide ?? 0}
                bgColor={"white"}
              // bgColor={index % 2 === 0 ? "white" : "#fafafa"}
              //   redDot={redDot}
              //   activeRedDot={activeRedDot}
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
                slide={item}
                animationTrigger={animationTrigger}
                currentInnerSlide={currentInnerSlide ?? 0}
                direction={direction}
                bgColor={"white"}
              // bgColor={index % 2 === 0 ? "#fafafa" : "white"}
              //   redDot={redDot}
              //   activeRedDot={activeRedDot}
              />
            ))}

        </View>
      </View>

      {/* Timeline Content */}
      <View className="h-[3px] w-full absolute bg-[#00000014] top-1/2 -translate-y-1/2   -z-10">
        {item.timeline.map((timeline, i) => (
          <View
            key={i}
            className={`w-[3px] absolute h-[260px] ${i === 0 ? "left-[7%]" : "right-[7%]"} bg-[#00000014] bottom-0`}
          >
            <View className="bg-[#B7B7B7] w-2.5 h-2.5 rounded-full absolute bottom-0 left-1/2 trasform -translate-x-1/2"></View>


            <View className="w-[95px] h-[95px] bg-white  rounded-full p-2  left-1/2 transform -translate-x-1/2 " style={{ ...boxShadow("#dddddd80", 0, 3, 0.2, 5, 5) }}>
              <View className=" rounded-full w-full h-full  bg-white flex justify-center items-center " style={{ ...boxShadow("#dddddd80", 0, 3, 0, 5, 5) }}>
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
    </>
    
  )
}

