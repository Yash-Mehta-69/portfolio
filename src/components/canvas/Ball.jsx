// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import {
//   Decal,
//   Float,
//   OrbitControls,
//   Preload,
//   useTexture,
// } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl]);

//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1,1]} />
//         <meshStandardMaterial attach="material" decal={decal} color="ivory"
//         polygonOffset
//         polygonOffsetFactor={-5} 
//         flatShading
//         />
//         <Decal position={[0,0,1]} map={decal} rotation={[2 * Math.PI, 0 , 6.25]} scale={1} flatShading/>
        
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   return (<Canvas
//       frameloop='demand'
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />
//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   )
// }
// export default BallCanvas;



import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  // Load the texture
  const [decal, error] = useTexture([imgUrl], (texture) => texture, (err) => console.error(err));

  if (error) {
    return (
      <mesh>
        {/* Fallback content if the texture fails to load */}
        <textGeometry attach="geometry" args={["Failed to Load", { size: 1, height: 0.2 }]} />
        <meshStandardMaterial attach="material" color="red" />
      </mesh>
    );
  }

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          attach="material"
          color="ivory"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
