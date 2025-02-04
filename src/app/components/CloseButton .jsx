// CloseButton.js
import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import yearImages from "../constants/yearImages";

const CloseButton = ({ onPress }) => {

  return (
    <TouchableOpacity onPress={onPress}>
    <View
      style={{
        clipPath: "polygon(100% 0, 100% 21%, 100% 66%, 79% 100%, 25% 100%, 0 100%, 0 0)",
        backgroundColor: "#918F8F",
      }}

      className="  z-[100] w-[40px] cursor-pointer h-[32px] flex justify-center items-center"
    >
      <View className="w-3 h-3 absolute -bottom-1.5 -right-1.5 bg-transparent" />
      <Image source={yearImages.closeIcon} />
    </View>
    </TouchableOpacity>
  );
};

export default CloseButton;
