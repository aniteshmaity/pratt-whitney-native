import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";

const Loader = () => {
  return (
    <View  className="absolute inset-0 flex items-center justify-center bg-red">
      <ActivityIndicator size="80" color="white" />
    </View>
  );
};

export default Loader;

