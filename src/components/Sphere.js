import React from "react";

import { Sphere, MeshDistortMaterial } from "@react-three/drei";

function DistortedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={1.7}>
      <MeshDistortMaterial color='aqua' attach='material' />
    </Sphere>
  );
}

export default DistortedSphere;
