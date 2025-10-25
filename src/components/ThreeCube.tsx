"use client";
"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";


function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  const faces = [
    "Web Development",
    "App Development",
    "UI / UX Design",
    "Digital Marketing",
    "Software Solutions",
    "Creative Studio",
  ];

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      {faces.map((text, i) => (
        <meshStandardMaterial key={i} color="#4338ca" />
      ))}
    </mesh>
  );
}

export default function ThreeCube() {
  return (
    <div className="h-80 w-full bg-gray-900 rounded-3xl shadow-lg flex items-center justify-center">
      <Canvas>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 5]} />
        <RotatingCube />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}
