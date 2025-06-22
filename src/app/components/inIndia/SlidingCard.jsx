// SlidingCard.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import ClippedView from '../ClippedView';

const SlidingCard = ({ direction = 'left', show, activeId, cardData }) => {

  console.log("cardData", cardData);
  console.log("activeId", activeId);
  const translateX = useSharedValue(direction === 'left' ? -300 : 300);

  useEffect(() => {
    if (show) {
      translateX.value = withTiming(0, { duration: 500 });
    } else {
      translateX.value = withTiming(direction === 'left' ? -300 : 300, {
        duration: 500,
      });
    }
  }, [show]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <Animated.View style={[styles.card, direction === 'left' ? styles.leftCard : styles.rightCard, animatedStyle]}>
        {/* <ClippedView width={360} height={140} backgroundColor="white" clipPathId="mapcard" slug="map1" /> */}
  
<View className={`${direction === 'left' ? 'ml-[40%] px-5 pt-16 w-[150px]' : 'pt-16 pl-5 '}`}>
      {activeId === 3 && direction === 'right' && (<Text className="text-[#CE2028]  text-[1.4rem] font-ObjektivMk2Black mb-2">{cardData?.name}</Text>)}
        {cardData?.engineData?.map((item, index) => (
          <View key={index} className={`flex flex-row items-center gap-5 mb-5 `}>
            <Image source={item.logo} style={styles.logo} />

            {direction === 'left' && (<View>
              <Text className="text-[#CE2028] text-[1.4rem] font-ObjektivMk2Black">{item.text}</Text>
              <Text className="text-[rgba(0, 0, 0, 0.7)] text-[0.7rem] font-objektiv">{item.desc}</Text>
            </View>)}
            {cardData?.name === "" && direction === 'right' ? (<View>
              <Text className="text-[#CE2028] text-[1.4rem] font-ObjektivMk2Black">{item.text}</Text>
              <Text className="text-[rgba(0, 0, 0, 0.7)] text-[0.7rem] font-objektiv">{item.desc}</Text>
            </View>) : (<Text style={styles.desc}>{item.engine}</Text>)}

          </View>
       
      ))}
       </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    top: 100,
    zIndex: 999,
    padding: 10,
    backgroundColor: '#f1efefab',


    alignSelf: 'center',
    position: "absolute",

  },
  leftCard: {
    top:0,
    left: "20%", // anchor to left
    width: 340,
  },
  rightCard: {
     top:0,
    right: 0, // anchor to right
    width: 240,
  },
  engineCard: {
    flexDirection: 'row',
    gap: 10, // You can also use marginRight/Left for better compatibility
    marginBottom: 12,
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'cover',
    shadowColor: '#6b6464',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
  },
  title: {
    color: '#D91027',
    fontSize: 18,
    fontWeight: '800',
  },
  desc: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 12,
  }
});

export default SlidingCard;
