import { Platform } from "react-native";

const boxShadow = (
  color = "#000",
  offsetX = 0,
  offsetY = 2,
  opacity = 0.2,
  radius = 4,
  elevation = 5
) => {
  return [
    Platform.select({
      ios: {
        shadowColor: color,
        shadowOffset: { width: offsetX, height: offsetY },
        shadowOpacity: opacity,
        shadowRadius: radius,
      },
      android: {
        elevation: elevation,
      },
    }),
  ];
};

export default boxShadow;
