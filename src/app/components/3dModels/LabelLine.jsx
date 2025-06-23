// import { Line,  Text } from "@react-three/drei";
// import { useMemo } from "react";
// import * as THREE from "three";
// import { Shape, ShapeGeometry } from 'three';




// export default function LabelLine({
//   position,
//   rotation,
//   lineLength = 1,
//   label,
//   target,
//   lineWidth = 2,
// }) {

//   const shapeGeometry = useMemo(() => {
//     const width = 1;
//     const height = 1;
//     const cut = 0.05;

//     const halfW = width / 2;
//     const halfH = height / 2;

//     const shape = new THREE.Shape();
//     shape.moveTo(-halfW, -halfH);

//     // Bottom-right corner (cut diagonally)
//     shape.lineTo(halfW - cut, -halfH);
//     shape.lineTo(halfW, -halfH + cut);

//     // Top-right corner (normal)
//     shape.lineTo(halfW, halfH);

//     // Top-left corner (cut diagonally)
//     shape.lineTo(-halfW + cut, halfH);
//     shape.lineTo(-halfW, halfH - cut);

//     // Close the shape
//     shape.lineTo(-halfW, -halfH);

//     return new THREE.ShapeGeometry(shape);
//   }, []);

//   const arrowRotation = useMemo(() => {
//     const from = new THREE.Vector3(...position);
//     const to = new THREE.Vector3(...target);
//     const direction = to.clone().sub(from).normalize();

//     const quaternion = new THREE.Quaternion().setFromUnitVectors(
//       new THREE.Vector3(0, 1, 0), // Default up direction of cone
//       direction
//     );

//     const euler = new THREE.Euler().setFromQuaternion(quaternion);
//     return [euler.x, euler.y, euler.z];
//   }, [position, target]);

//   return (
//     <group position={position} rotation={rotation}>
//       {/* Line connecting the label */}
//       <Line
//        points={[
//         new THREE.Vector3(...position),
//         new THREE.Vector3(...target),
//       ]}
//         color="#710b0b"
//         lineWidth={lineWidth}
//       />

// <mesh
//         position={target}
//         rotation={arrowRotation}
//         scale={[0.4, 0.4,0.4]} // tweak for size
//       >
//         <coneGeometry args={[0.05, 0.2, 8]} />
//         <meshStandardMaterial color="#710b0b" />
//       </mesh>
//         <mesh position={position} rotation={rotation} scale={[0.6, 0.2, 1]}>
//     <planeGeometry />
//     <meshStandardMaterial color="#710b0b" />
//     <primitive object={shapeGeometry} />
//   </mesh>
//       {/* Background for the label */}
//       <mesh position={[position[0], position[1], position[2] + 0.001]} rotation={rotation}  scale={[0.58, 0.18, 1]}>
//         <planeGeometry />
   
//         <meshStandardMaterial color="#1d1c1c" opacity={1} />
//         <primitive object={shapeGeometry} />
//         {/* <primitive object={createTrapezoidGeometry(1, 0.2, 0.1,0.05)} /> */}
//       </mesh>
//       {/* 3D Text Label */}
//       <Text
//         position={[position[0], position[1], position[2]+0.01]}
//         rotation={rotation} // Adjust the position for where the label should appear
//         fontSize={0.08} // Adjust the font size
//         color="white" // Text color
//         anchorX="center" // Anchor in the center
//         anchorY="middle" // Anchor in the middle
//         // Font path (use an appropriate font file)
//       >
//         {label} {/* The label text */}
//       </Text>
//     </group>
//   );
// }
