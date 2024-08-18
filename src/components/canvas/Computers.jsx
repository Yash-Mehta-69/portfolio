// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./pc/scene.gltf");

//   return (
//     <mesh>
//       <hemisphereLight intensity={1} groundColor='black' />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={2} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.29 : 0.59}
//         position={isMobile ? [0, -2, -0.6] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//         rotation-y={0}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Add a listener for changes to the screen size
//     const mediaQuery = window.matchMedia("(max-width: 500px)");

//     // Set the initial value of the `isMobile` state variable
//     setIsMobile(mediaQuery.matches);

//     // Define a callback function to handle changes to the media query
//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     // Add the callback function as a listener for changes to the media query
//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     // Remove the listener when the component is unmounted
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);



//   return (
//     <Canvas
//       frameloop='demand'
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//       onContextMenu={(e) => e.preventDefault()}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           autoRotate
//           enableZoom={false}
//           enablePan={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//           autoRotateSpeed={10}
//         />
//         <Computers isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;






import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const { scene, isLoading, error } = useGLTF("./pc/scene.gltf");

  if (error) {
    console.error("Error loading the GLTF model:", error);
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    );
  }

  if (isLoading) {
    return null; // Or some loading placeholder
  }

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
      <primitive
        object={scene}
        scale={isMobile ? 0.29 : 0.9}
        position={isMobile ? [0, -2, -0.6] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [dpr, setDpr] = useState([1, 2]); // Default DPR values

  useEffect(() => {
    // Get the device pixel ratio
    const devicePixelRatio = window.devicePixelRatio;
    console.log(devicePixelRatio)

    // Adjust DPR values based on device pixel ratio
    if (devicePixelRatio > 1) {
      setDpr([1, 2]); // Higher DPR for high-DPI screens
    } else {
      setDpr([1, 1]); // Standard DPR for regular screens
    }

    // Optionally, listen for changes in device pixel ratio if needed
    const handleResize = () => {
      const newDevicePixelRatio = window.devicePixelRatio;
      setDpr(newDevicePixelRatio > 1 ? [1, 2] : [1, 1]);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={dpr}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotateSpeed={10}
        />
        <Computers isMobile={window.devicePixelRatio > 1} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

