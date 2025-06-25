import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState, useEffect, memo, useRef } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  runOnJS,
  withTiming,
} from 'react-native-reanimated';
import RedDotSvg from "../../components/RedDotSvg";
import CustomCloseButton from '../../components/buttons/CustomCloseButton';
import yearImages from '../../constants/yearImages';
import { useRouter } from 'expo-router';
import { productEngines } from '../../constants/productEngineData';
import ClippedView from '../../components/ClippedView';
import boxShadow from '../../constants/boxShadow';
import { VideoPlayer } from 'expo-video';
import ProductCard from "../../components/ProductCard";
import SlideInCard from '../../components/SlideInCard';
import ProductEngineDetails from '../../components/ProductEngineDetails';


const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

const VISIBLE_COUNT = 3;
const ITEM_SPACING = 20;
const ITEM_HEIGHT = (SCREEN_HEIGHT - ITEM_SPACING * (VISIBLE_COUNT - 1)) / VISIBLE_COUNT;

const EngineItem = memo(({
  item,
  index,
  middleIndex,
  scrollY,
}) => {
  if (item === null) {
    return <View style={{ height: ITEM_HEIGHT, marginBottom: ITEM_SPACING }} />;
  }

  const realIndex = productEngines.filter((e) => e !== null).indexOf(item);

  const scale = useDerivedValue(() => {
    const targetScale = interpolate(
      scrollY.value,
      [
        (realIndex - 1) * (ITEM_HEIGHT),
        realIndex * (ITEM_HEIGHT + ITEM_SPACING),
        (realIndex + 1) * (ITEM_HEIGHT),
      ],
      [0.55, 0.85, 0.55],
      "clamp"
    );

    return withSpring(targetScale, {
      damping: 15,
      stiffness: 90,
    });
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View
      style={[
        {
          width: ITEM_HEIGHT,
          height: ITEM_HEIGHT,
          marginTop: ITEM_SPACING + 2,
        },
        animatedStyle,
      ]}
    >
      <View
        style={{
          width: ITEM_HEIGHT,
          height: ITEM_HEIGHT,
          borderRadius: ITEM_HEIGHT / 2,
          backgroundColor: 'white',
          padding: 18,
          position: 'relative',
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
          ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 6 },
              shadowOpacity: 0.3,
              shadowRadius: 10,
            },
            android: {
              elevation: 10,
            },
          }),
        }}
      >
        {middleIndex === index - 1 && (
          <View style={{ position: 'absolute', width: 150, height: 130, right: '-30%', bottom: '30%', zIndex: 30 }}>
            <ClippedView width={150} height={130} backgroundColor="#E11C37" clipPathId="strap-1" slug="strap1" />
          </View>
        )}
        <View
          style={{
            ...boxShadow("#bdbdbd", 3, 7, 0.2, 20, 6),
            width: ITEM_HEIGHT - 30,
            height: ITEM_HEIGHT - 30,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 6,
            elevation: 8,
          }}
          className="rounded-full bg-white overflow-hidden z-40 p-[18px] relative"
        >
          <View
            style={{ ...boxShadow("#b9b7b730", 1, 0, 0.2, 11, 8) }}
            className={`flex justify-center items-center rounded-full w-full h-full bg-white z-40 ${middleIndex === index
              ? "opacity-100"
              : "opacity-80"
              }`}
          >
            <Text className="text-[1.7rem] text-[#D91027] font-ObjektivMk2Black w-[90%] text-center">
              {item.engine}
            </Text>
            {middleIndex === index - 1 && (
              <Text className="text-[0.85rem] px-2 pt-3 text-center font-ObjektivMk1Bold">
                {item.description}
              </Text>
            )}
          </View>
        </View>
      </View>

      {middleIndex !== index && (
        <View style={{ position: 'absolute', top: -25, left: '50%', transform: [{ translateX: -17.5 }], zIndex: 100 }}>
          <RedDotSvg width={35} height={35} />
        </View>
      )}
    </Animated.View>
  );
});

const Product = () => {
  const router = useRouter();
  const scrollY = useSharedValue(0);
  const [middleIndex, setMiddleIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(productEngines[0]);
  const [scrollDirection, setScrollDirection] = useState(null);

  // const scrollHandler = useAnimatedScrollHandler({
  //   onScroll: (event) => {
  //     scrollY.value = event.contentOffset.y;
  //   },
  // });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      const currentOffset = event.contentOffset.y;

      // Detect scroll direction
      if (scrollY.value < currentOffset) {
        runOnJS(setScrollDirection)('up');
      } else if (scrollY.value > currentOffset) {
        runOnJS(setScrollDirection)('down');
      }

      scrollY.value = currentOffset;
    },

    onBeginDrag: () => {
      runOnJS(setScrollDirection)(null);
    },
  });


  useEffect(() => {
    const id = scrollY.value;
    const index = Math.round(id / (ITEM_HEIGHT + ITEM_SPACING));
    const filtered = productEngines.filter(item => item !== null);
    if (index >= 0 && index < filtered.length) {
      const nextItem = filtered[index];
      setMiddleIndex(index);
      setSelectedItem(prev => (prev?.engine === nextItem.engine ? prev : nextItem));
    }
  }, [scrollY.value]); 

  const handleClose = () => {
    router.back();
  };

  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [selectedEngineDetails, setSelectedEngineDetails] = useState(null);
  const enginetranslateY = useSharedValue(500);
  const detailsRef = useRef(null);

  const handleExploreClick = (engineDetails) => {
    console.log("clicked -details");
    setIsDetailsVisible(true);
    setSelectedEngineDetails(engineDetails);
    enginetranslateY.value = 0;
  };

  const handleEngineClose = () => {
    enginetranslateY.value = withTiming(500, { duration: 400 }, (finished) => {
      if (finished) {
        runOnJS(setIsDetailsVisible)(false);
        runOnJS(setSelectedEngineDetails)(null);
      }
    });
  };

  const engineAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(enginetranslateY.value + "%", {
            duration: 1300,
          }),
        },
      ],
      opacity: withTiming(isDetailsVisible ? 1 : 0, { duration: 500 }),
    };
  });


  return (
    <SafeAreaView style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT, backgroundColor: '#f5f5f5' }}>
      <>
        <View
          style={{
            height: 80,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 48,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(128,128,128,0.2)',
            // zIndex: 999
          }}
        >
          <Image
            source={yearImages.pwLogo}
            alt="homeLogo"
            style={{ maxWidth: 180, maxHeight: 50, resizeMode: 'contain' }}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={{
                  color: '#dc2626',
                  fontSize: 18,
                  paddingRight: 8,
                  fontFamily: 'objectiveBlk',
                }}
              >
                INDIA
              </Text>
              <Text style={{ color: 'black', fontSize: 18, fontFamily: 'objectiveBlk' }}>
                INTERACTIVE
              </Text>
            </View>
            <CustomCloseButton onPress={handleClose} />
          </View>
        </View>

        {/* Guideline lines */}
        <View style={{ position: 'absolute', width: '22%', height: 1.5, left: 0, top: '55%', backgroundColor: '#00000014' }} />
        <View style={{ position: 'absolute', width: '12%', height: 1.5, left: '20%', top: '55%', backgroundColor: '#dc2626' }} />
        <View style={{ position: 'absolute', width: 2, height: '90%', bottom: 0, left: '16%', backgroundColor: '#00000014' }} />


        {/* Animated FlatList */}
        <Animated.FlatList
          data={productEngines}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <EngineItem
              item={item}
              index={index}
              middleIndex={middleIndex}
              scrollY={scrollY}
            />
          )}
          showsVerticalScrollIndicator={false}
          snapToInterval={ITEM_HEIGHT + ITEM_SPACING}
          decelerationRate="fast"
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT + ITEM_SPACING,
            offset: (ITEM_HEIGHT + ITEM_SPACING) * index,
            index,
          })}
          contentContainerStyle={{
            paddingLeft: SCREEN_WIDTH * 0.065,
            marginTop: - SCREEN_HEIGHT * 0.09
          }}
        />

        <SlideInCard scrollDirection={scrollDirection} selectedItem={selectedItem} middleIndex={middleIndex} handleExploreClick={handleExploreClick} />

        {isDetailsVisible && (
          <Animated.View
            ref={detailsRef}
            className="absolute inset-0 bg-white z-50 "
            style={[{
              width: "100%",
              height: "100%",
            }, engineAnimatedStyle]}
          >
            <ProductEngineDetails engineData={selectedEngineDetails} handleEngineClose={handleEngineClose} handleExploreClick={handleExploreClick} />
          </Animated.View>
        )}
      </>
    </SafeAreaView>
  );
};

export default React.memo(Product);