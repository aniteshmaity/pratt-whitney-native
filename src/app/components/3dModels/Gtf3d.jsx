// import React, { useEffect, useRef, useState } from 'react'
// import { Center, Html, Line, RoundedBox, Text, useGLTF } from '@react-three/drei/native';


// import { useFrame } from '@react-three/fiber/native';
// import * as THREE from 'three';

// import models3D from '../../constants/models3D';

// export function Gtf3d(props) {
//   const { nodes, materials, scene, camera } = useGLTF(models3D.gtfGlb);
//   console.log("props", props);
//   const { setLoading, ...restProps } = props; 
//   useEffect(() => {
//     if (setLoading) setLoading(false); // Hide loading when model is ready
//   }, [setLoading,scene]);

//   console.log("🔹 Gtf3d component rendering",scene);
  
 
//   console.log("nodes", nodes);
//   console.log("material", materials);
//   const [selectedPart, setSelectedPart] = useState(null);
//   const [partPositions, setPartPositions] = useState({});
//   console.log("selected-part", partPositions);

//   // Handle click on a mesh
//   const handleMeshClick = (name) => {
//     setSelectedPart(name);
//   };

  







//   return (
//     <group {...restProps} dispose={null}>
//       <group position={[0, 0, 1.857]} rotation={[0, 0, -Math.PI]} scale={[-1, -1, 1]}>
//         <group rotation={[-Math.PI / 2, 0.262, 0]}>
//           <mesh
   
//             geometry={nodes['GTF-1'].geometry}
//             material={materials['1']}
//           />
//           <mesh

//             geometry={nodes['GTF-2'].geometry}
//             material={materials['2']}
//           />
//           <mesh

//             geometry={nodes['GTF-3'].geometry}
//             material={materials['3']}
//           />
//           <mesh
  
//             geometry={nodes['GTF-4'].geometry}
//             material={materials['4']}
//           />
//           <mesh
    
//             geometry={nodes['GTF-5'].geometry}
//             material={materials['5']}
//           />
//           <mesh
            
//             geometry={nodes['GTF-6'].geometry}
//             material={materials['6']}
//           />
//           <mesh
           
//             geometry={nodes['GTF-7'].geometry}
//             material={materials['7']}
//           />
//           <mesh
         
//             geometry={nodes['GTF-8'].geometry}
//             material={materials['8']}
//           />
//           <mesh
           
//             geometry={nodes['GTF-9'].geometry}
//             material={materials['9']}
//           />
//           <mesh
       
//             geometry={nodes['GTF-10'].geometry}
//             material={materials['10']}
//           />
//           <mesh
           
//             geometry={nodes['Turbine-11'].geometry}
//             material={materials['11']}
//           />
//           <mesh
           
//             geometry={nodes['Turbine-12'].geometry}
//             material={materials['12']}
//           />
//           <mesh
       
//             geometry={nodes['Turbine-13'].geometry}
//             material={materials['13']}
//           />
//         </group>
//       </group>
//     </group>
//   )
// }


// useGLTF.preload(models3D.gtfGlb)