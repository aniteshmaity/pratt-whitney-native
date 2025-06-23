import React from "react";
import { Dimensions, View, Image } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
import yearImages from "../constants/yearImages"; // adjust path if needed

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width / 5;

const cards = [
  { id: 1, img: yearImages.layer1 },
  { id: 2, img: yearImages.layer1 },
  { id: 3, img: yearImages.layer3 },
  { id: 4, img: yearImages.layer2 },
  { id: 5, img: yearImages.layer2 },
  { id: 6, img: yearImages.layer3 },
  { id: 7, img: yearImages.layer3 },
];

export default function IndiaCarousel() {
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const renderItem = ({ item, index }) => {
    const animatedStyle = useAnimatedStyle(() => {
      const inputRange = [
        (index - 2) * ITEM_WIDTH,
        (index - 1) * ITEM_WIDTH,
        index * ITEM_WIDTH,
        (index + 1) * ITEM_WIDTH,
        (index + 2) * ITEM_WIDTH,
      ];

      const scale = interpolate(scrollX.value, inputRange, [0.7, 0.7, 1, 0.7, 0.7], "clamp");

      return {
        transform: [{ scale }],
      };
    });

    return (
      <Animated.View key={item.id} style={[{ width: ITEM_WIDTH, alignItems: "center" }, animatedStyle]}>
        <Image
          source={item.img}
          style={{
            width: ITEM_WIDTH * 0.9,
            height: 100,
            borderRadius: 10,
            resizeMode: "cover",
          }}
        />
      </Animated.View>
    );
  };

  return (
    <View style={{ marginTop: 100 }}>
      <Animated.FlatList
        horizontal
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: (width - ITEM_WIDTH) / 2,
        }}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      />
    </View>
  );
}
