'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

function MeshComponent() {
  const mesh = useRef<Mesh>(null!);
  // uso del hook frame para animar el modelo.
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[5, 5, 5]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
}

const Box = () => {
  return (
    <div className="flex justify-center">
      <Canvas className="h-2xl w-2xl" camera={{ position: [4, 4, 4] }}>
        <OrbitControls />
        <pointLight position={[7, 7, 7]} color="yellow" intensity={1.6} />
        <MeshComponent />
      </Canvas>
    </div>
  );
};

extend({ Box });

export default Box;
