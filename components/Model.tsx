'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function MeshComponent() {
  const fileUrl = '/model/scene.gltf';
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);
  // uso del hook frame para animar el modelo.
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

const Model = () => {
  return (
    <div className="flex justify-center">
      <Canvas className="h-2xl w-2xl" camera={{ position: [4, 4, 4] }}>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[7, 7, 7]} />
        <MeshComponent />
      </Canvas>
    </div>
  );
};

extend({ Model });

export default Model;
