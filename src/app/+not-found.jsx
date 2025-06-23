import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import homeImages from './constants/homeImages';
import { useRouter } from 'expo-router';
import CustomTextButton from './components/buttons/CustomTextButton';

const NotFoundPage = () => {

  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white h-screen">
      <View className="items-center ">
        {/* Replace with your 404 image */}
        <Image
          source={homeImages.notFound} // Update the path to your image
          className="w-[400] h-[400] mb-8"
          resizeMode="contain"
        />


        {/* Back to Home Button */}
      <CustomTextButton
                 className={"w-[236px] h-[40px]  absolute"}
                 onPress={() => {
                   router.push("/home");
                 }}
                 num={0}
                 title={"Back to Home"}
                 textClass={"text-xl tracking-widest "}
               />
      </View>
    </SafeAreaView>
  );
};

export default NotFoundPage;