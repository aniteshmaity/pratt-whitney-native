import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import yearImages from "../../constants/yearImages";
import CustomCloseButton from "../../components/buttons/CustomCloseButton";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import EngineComponent from "../../components/EngineComponent";
import ProductEngineDetails from "../../components/ProductEngineDetails";
import ProductCard from "../../components/ProductCard";
import boxShadow from "../../constants/boxShadow";
import ClippedView from "../../components/ClippedView";
import { useRouter } from "expo-router";
const { height } = Dimensions.get("window");
const ITEM_HIGHT = (height - 80) / 5 ;
const ContainerHeight = height - 80

const Engine = [
  null,
  null,
  { engine: "Military Engines", description: "This is the description 3 " },
  { engine: "Pratt Engines", description: "This is the description 4" },
  { engine: "Commercial Engines", description: "This is the description 5" },
  { engine: "Auxiliary Engines", description: "This is the description 6" },
  { engine: "Aftermarket", description: "This is the description 7" },
  null,
  null,
];

const EngineItem = ({
  item,
  index,
  currentIndex,
  middleIndex,
  onItemPress,
  scrollToIndex,
  setCurrentIndex,
}) => {
  console.log("middleindex", middleIndex);
  console.log("curr", currentIndex);
  // console.log("index",index);
  const scale = useSharedValue(0.5);
  const animatedStyle = useAnimatedStyle(() => {
    scale.value = withSpring(index === middleIndex ? 1 : 0.5, {
      damping: 20,
      stiffness: 100,
    });
    return {
      transform: [{ scale: scale.value }],
    };
  });

  if (item === null) {
    // Render an empty placeholder for null items
    return <View style={{ height: ITEM_HIGHT }} />;
  }

  return (
    <TouchableOpacity onPress={() => onItemPress(index)}>
      <Animated.View
        style={[{ width: ITEM_HIGHT, height: ITEM_HIGHT }, animatedStyle]}
        className={`item-${index} ${middleIndex === index ? "active" : ""} ${
          middleIndex > index ? "top" : "bottom"
        }`}
      >
        <View
          style={{  ...boxShadow("#6b646426", 3, 7, 0.2, 20, 10),width: ITEM_HIGHT, height: ITEM_HIGHT }}
          className="rounded-full bg-white overflow-hidden   z-40 p-[13px]  relative"
        >
          {middleIndex === index && (
            <View className="absolute bg-[#E11C37] right-0 w-[90px] h-[70px] top-[25%] -z-10" />
          )}
          <View
          style={{...boxShadow("#b9b7b730", 1, 0, 0.2, 11, 8)}}
            className={`flex  justify-center items-center rounded-full w-full h-full  bg-white ${
              middleIndex === index
                ? "opacity-100"
                : "bg-white text-black opacity-80"
            }`}
          >
            <Text className="text-[0.7rem] font-[800] text-[#D91027] font-objektiv w-[90%] text-center">
              {item.engine}
            </Text>
            <Text className="text-[0.45rem] p-2 font-bold text-center font-objektiv">
              {item.description}
            </Text>
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default function Products() {
  const router = useRouter();
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Initial current index
  const [middleIndex, setMiddleIndex] = useState(2); // Initial middle index (3rd card)
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [cardSize, setCardSize] = useState({ width: 0, height: 0 });
  // const [containerHeight, setContainerHeight] = useState(0);
  // const [cardHeight, setCardHeight] = useState(0);
  const detailsRef = useRef(null);
  const currentTranslateY = useSharedValue(50); // Start at 0% (visible)
  const nextTranslateY = useSharedValue(400); // Start at 400% (hidden)
  const currentTranslateX = useSharedValue(-50); // Start at 0% (visible)
  const nextTranslateX = useSharedValue(-400); // Start at 400% (hidden)
  const middleIndexShared = useSharedValue(2);
  // console.log("containerheight",containerHeight);
  // console.log("cardheight",cardHeight);
  const handleClose = () => {
 router.push("home")
  };
  const validEngines = Engine.filter((item) => item !== null);
  const translateYValues = validEngines.map((_, index) =>
    useSharedValue(index === 0 ? ContainerHeight * 0.5 - 538 * 0.5 : ContainerHeight * 4)
  );
  const translateXValues = validEngines.map((_, index) =>
    useSharedValue(index === 0 ? -30 : -ContainerHeight * 4)
  );
  console.log("fullengine", validEngines);
  console.log("container-height",ContainerHeight);
  const scrollToIndex = (index) => {
    flatListRef.current.scrollToIndex({ animated: true, index });
  };
  const onItemPress = (index) => {
    if (middleIndex === index) return;
  
    if (middleIndex > index) {
      translateYValues[currentIndex].value = withTiming(ContainerHeight * 4, { duration: 900 });
      translateXValues[currentIndex].value = withTiming(-ContainerHeight * 4, { duration: 900 });
      // Animate the next item to 50%
      translateYValues[index - 2].value = withTiming(ContainerHeight * 0.5 - 538 * 0.5, { duration: 900 });
      translateXValues[index - 2].value = withTiming(30, { duration: 900 });
      setCurrentIndex(currentIndex - 1);
      setMiddleIndex(middleIndex - 1);
      scrollToIndex(currentIndex - 1);
      // currentTranslateY.value = withTiming(-400, { duration: 500 });
      // currentTranslateX.value = withTiming(-400, { duration: 500 });
      // Move new item from 400% → 0%
      // nextTranslateY.value = withTiming(50, { duration: 500 });
      // nextTranslateX.value = withTiming(-50, { duration: 500 });
    } else {
      translateYValues[currentIndex].value = withTiming(-ContainerHeight * 4, { duration: 900 });
      translateXValues[currentIndex].value = withTiming(-ContainerHeight * 4, { duration: 900 });
      // Animate the next item to 50%
      translateYValues[index - 2].value = withTiming(ContainerHeight * 0.5 - 538 * 0.5, { duration: 900 });
      translateXValues[index - 2].value = withTiming(30, { duration: 900 });
      setCurrentIndex(currentIndex + 1);
      setMiddleIndex(middleIndex + 1);
      scrollToIndex(currentIndex + 1);
      // currentTranslateY.value = withTiming(-400, { duration: 500 });
      // currentTranslateX.value = withTiming(-400, { duration: 500 });

      // Delay new item entrance
      // setTimeout(() => {
      //   nextTranslateY.value = withTiming(50, { duration: 500 });
      //   nextTranslateX.value = withTiming(-50, { duration: 500 });
      // }, 400);
    }
    console.log("clicked-index", index);
  };
  const onScrollEnd = (event) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    console.log("conttenty", contentOffsetY);
    const newIndex = Math.round(contentOffsetY / ITEM_HIGHT); // Calculate the nearest index
    scrollToIndex(newIndex);
  };

  // // Move the currently active item up (-400%)
  // const animateOut = () => {
  //   translateY.value = withTiming(-400, { duration: 800 });
  // };

  // // Move the new active item from (400%) to (0%)
  // const animateIn = () => {
  //   translateY.value = withTiming(50, { duration: 800 });
  // };
  const enginetranslateY = useSharedValue(500); 
  const handleExploreClick = () => {
    console.log("clicked -details");
    setIsDetailsVisible(true);
    enginetranslateY.value= 0;
  };
  const handleEngineClose = () => {
    enginetranslateY.value= 500;
    setTimeout(()=> {
      setIsDetailsVisible(false);
    },500);
  }

  const engineAnimatedStyle = useAnimatedStyle(() => {
    return {
        transform: [{ translateY: withTiming(enginetranslateY.value + "%",{
          duration: 1300,
      }) }], // Use withTiming and easing
        opacity: withTiming(isDetailsVisible ? 1 : 0, {duration: 500}),

    };
});
  return (
    <SafeAreaView className="w-screen h-screen bg-white">
      {/* Header */}
      <View className="h-[80px]  flex-row justify-between items-center px-12">
        <Image
          source={yearImages.pwLogo}
          alt="homeLogo"
          className="max-w-[180px] max-h-[50px]"
          resizeMode="contain"
        />
        <View className="flex-row items-center gap-4">
          <View className="flex-row">
            <Text className="text-red-600 text-[1.3rem]  pr-2 font-objectiveBlk">
              INDIA
            </Text>
            <Text className="text-black text-[1.3rem]  font-objectiveBlk">
              INTERACTIVE
            </Text>
          </View>
          <CustomCloseButton onPress={handleClose} />
        </View>
      </View>

      {/* Main Content */}
      <View className="flex-1 flex-row h-[calc(100vh-80px)] gap-5 px-12">
        {/* Sidebar Navigation */}
        <View className="w-[58px] justify-start items-center ">
        <ClippedView width={58} height={26} backgroundColor="#918F8F" clipPathId="backClip" slug="variant7" />
          <TouchableOpacity onPress={handleClose} className=" px-3 py-2 flex flex-row justify-center items-center gap-2">
            <Image source={yearImages.leftArrow} className="w-[7px] h-[7px]" resizeMode="contain" />
            <Text className=" text-[10px] font-frutigerBlack text-white">
              Back
            </Text>
          </TouchableOpacity>
        </View>
        <View className=" bg-gray-100 ">
          <FlatList
            ref={flatListRef}
            data={Engine}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            snapToInterval={ITEM_HIGHT} // Snap to each engine card
            decelerationRate="fast"
            onMomentumScrollEnd={onScrollEnd}
            renderItem={(
              { item, index } // Corrected: Added parentheses for implicit return
            ) => (
              <EngineItem
                item={item}
                index={index}
                middleIndex={middleIndex}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                scrollToIndex={scrollToIndex}
                onItemPress={onItemPress}
              />
            )}
            scrollEventThrottle={16} // Smooth scroll event handling
            getItemLayout={(data, index) => ({
              length: ITEM_HIGHT,
              offset: ITEM_HIGHT * index,
              index,
            })}
          />
        </View>

        {/* Content Section */}
        <View className="flex-1 items-center px-4 ml-10"   >
          {validEngines?.map((item, index) => {
           const animatedStyle = useAnimatedStyle(() => ({
            transform: [{ translateY: translateYValues[index].value },
            { translateX: translateXValues[index].value }],
          }));
            return (
              <Animated.View
                className=" shadow-lg bg-white  w-full absolute"
                key={index}
                onLayout={(event) => {
                  const { width, height } = event.nativeEvent.layout;
                  setCardSize({ width, height });
                }}
                style={animatedStyle}
              >
                {/* <View
    style={{
      position: "absolute",
      width: cardSize.width ,
      height: cardSize.height ,
      backgroundColor: "transparent",
      borderRadius: 10,
      shadowColor: "red",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 5, // Required for Android shadows
    }}
  > */}
                  {/* <ClippedView width={cardSize.width} height={cardSize.height} backgroundColor="#fff" clipPathId="Cardclip" slug="variant9" /> */}
                 {/* </View>  */}
                <Image
                  style={{ height: 240, width: "100%" }}
                  className="w-full"
                  resizeMode="cover"
                  source={yearImages.blueEngine}
                  alt=""
                />
                <View className="w-full py-5 px-6">
                  <Text className="text-[2.2rem] font-bold pb-2font-objektiv">
                    {item?.engine}
                  </Text>
                  <Text className="text-[0.95rem] pb-5 font-objektiv">
                    Experience a history of development engines from the first
                    radial cooled engine in 1925 to the hybrid electric
                    technologies of today.
                  </Text>
                  <ProductCard handleExploreClick={handleExploreClick} />
                  {/* <TouchableOpacity
                    className="bg-slate-400 "
                    onPress={handleExploreClick}
                  >
                    <Text>Explore</Text>
                  </TouchableOpacity> */}
                </View>
              </Animated.View>
            );
          })}
        </View>
      </View>

      {isDetailsVisible && (
        <Animated.View
          ref={detailsRef}
          className="absolute inset-0 bg-white z-50 "
          style={[{
            width: "100%",
            height: "100%",
          },engineAnimatedStyle]}
        >
          <ProductEngineDetails handleEngineClose={handleEngineClose} />
        </Animated.View>)}
    </SafeAreaView>
    
  );
}
