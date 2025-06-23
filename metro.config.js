const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.assetExts = [
  ...config.resolver.assetExts,
  'glb',
  'gltf',
];

const reanimatedConfig = wrapWithReanimatedMetroConfig(config);

module.exports = withNativeWind(reanimatedConfig, { input: "./src/styles/global.css" });