import React from 'react';
import { View } from 'react-native';
import Svg, { Defs, ClipPath, Polygon, Rect, FeDropShadow } from 'react-native-svg';

const ClippedView = ({ width, height, backgroundColor, clipPathId, children, slug }) => {

  const getPolygonPoints = () => {
    switch (slug) {
      case "variant1":
        return `${width},0 ${width},0 ${width},${height / 2} ${width * 0.9},${height} 0,${height} 0,0`;
      case "variant2": // New Polygon based on given points
        return `${width},0 ${width},0 ${width},${height} ${width * 0.2},${height} 0,${height * 0.8} 0,0`;
      case "variant3": // New Polygon based on given points
        return `${width},0 ${width},${height} ${width},${height} ${width * 0.2},${height} 0,${height * 0.56} 0,0`;
      case "variant4": // New Polygon based on given points
        return `${width},0 ${width},0 ${width},${height * 0.8} ${width * 0.8},${height} 0,${height} 0,${height} 0,0`;
      case "variant5": // New Polygon based on given points
   return `${width * 0.02},0 ${width},0 ${width},${height * 0.7} ${width * 0.98},${height} 0,${height} 0,${height * 0.35}`;
      case "variant6": // New Polygon based on given points
        return `${width * 0.09},0 ${width},0 ${width},${height} 0,${height} 0,${height} 0,${height * 0.3}`;
      case "variant7": // New Polygon based on given points
        return `0,0 ${width},0 ${width},${height * 0.7} ${width * 0.91},${height} 0,${height} 0,${height}`;
      case "variant8":
        return `${width * 0.05},0 ${width},0 ${width},${height * 0.7} ${width * 0.95},${height} 0,${height} 0,${height * 0.4}`;
      case "variant9": // New Polygon based on given points
        return `${width},0 ${width},0 ${width},${height * 0.8} ${width * 0.9},${height} 0,${height} 0,${height} 0,0`;
      case "variant10":
        return `${width},0 ${width},${height} ${width * 0.9},${height} ${width * 0.2},${height} 0,${height * 0.6} 0,0`;
      case "variant11":
        return `${width * 0.5},0, ${width},0, ${width},${height * 0.8}, ${width * 0.83},${height}, ${width * 0.53},${height}, 0,${height}, 0,0`;
      case "map1":
        return `${width * 0.5},0 ${width},0 ${width},${height * 0.57} ${width * 0.79},${height} ${width * 0.53},${height} 0,${height} 0,0`;
        case "strap1":
          return `${width * 0.5} 0, ${width} ${height * 0.5}, ${width * 0.5} ${height}, 0 ${height * 0.5}`;
           case "left":
               return `0,0 ${width},0 ${width},${height} ${width * 0.15},${height} 0,${height * 0.95}`;
               case "right":
              return `0,0 ${width},0 ${width},${height * 0.85} ${width * 0.85},${height} 0,${height}`;
      default:
        return `${width},0 ${width},0 ${width},${height / 2} ${width * 0.9},${height} 0,${height} 0,0`;
    }
  };
  return (

    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      style={{ position: 'absolute', top: 0, left: 0 }}
    >
      <Defs>
        {/* <Filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <FeDropShadow dx="4" dy="4" stdDeviation="4" floodOpacity="0.3" />
        </Filter> */}
        <ClipPath id={clipPathId}>
          {/* Define the clipping polygon */}
          <Polygon points={getPolygonPoints()} />
        </ClipPath>
      </Defs>

      <Rect width={width} height={height} fill={backgroundColor} clipPath={`url(#${clipPathId})`} />
    </Svg>



  );
};

export default ClippedView;
