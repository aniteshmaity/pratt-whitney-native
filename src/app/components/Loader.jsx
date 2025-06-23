// import React, { useEffect, useRef } from 'react'

// import { Html } from '@react-three/drei/native';
// import { Animated, Easing, View } from 'react-native';



// const Loader = () => {

//   const rotation = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(rotation, {
//         toValue: 1,
//         duration: 1500,
//         easing: Easing.linear,
//         useNativeDriver: true,
//       })
//     ).start();
//   }, [rotation]);

//   const rotateInterpolate = rotation.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg']
//   });
//   return (
//     <Html center>
//        <View className="flex justify-center items-center">
//       <Animated.View
//       style={[ { transform: [{ rotate: rotateInterpolate }] }]}
//         className={`w-[90px] h-[90px] border-[6px] border-t-transparent border-white rounded-full animate-spin`}
//       />
//     </View>
//   </Html>
//   )
// }

// export default Loader