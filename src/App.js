import React, { Suspense } from "react";
import "./styles.css";
import styled from "styled-components";

import { Model } from "./components/Model";
import Box from "./components/Box";
import DistortedSphere from "./components/Sphere";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <Wrapper className='App'>
      <h1>3D Model Renderer</h1>
      <Canvas className='canvas'>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>

      <Canvas className='canvas'>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>

      <Canvas className='canvas'>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <DistortedSphere />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 100%;
    width: 100%;
  }
`;
