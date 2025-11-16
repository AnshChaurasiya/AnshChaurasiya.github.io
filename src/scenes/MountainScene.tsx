'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Cloud } from '@react-three/drei';
import * as THREE from 'three';

function Mountain({ position, scale }: { position: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <coneGeometry args={[1, 2, 4]} />
      <meshStandardMaterial
        color="#1E293B"
        emissive="#7DD3FC"
        emissiveIntensity={0.1}
        metalness={0.3}
        roughness={0.7}
      />
    </mesh>
  );
}

function IceCrystal({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <mesh position={position}>
        <octahedronGeometry args={[0.1, 0]} />
        <meshStandardMaterial
          color="#7DD3FC"
          emissive="#7DD3FC"
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
          metalness={1}
          roughness={0}
        />
      </mesh>
    </Float>
  );
}

export default function MountainScene() {
  const mountains: Array<{ position: [number, number, number]; scale: number }> = [
    { position: [-4, -1, -3], scale: 1.2 },
    { position: [-2, -1, -2], scale: 1.5 },
    { position: [0, -1, -4], scale: 1.8 },
    { position: [2, -1, -2], scale: 1.4 },
    { position: [4, -1, -3], scale: 1.1 },
  ];

  const crystals: [number, number, number][] = [
    [-3, 1, -2],
    [-1, 1.5, -1],
    [1, 1.2, -1.5],
    [3, 1, -2],
  ];

  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#7DD3FC" />
      <pointLight position={[0, 3, 0]} intensity={1} color="#38BDF8" />
      
      {/* Mountains */}
      {mountains.map((mountain, i) => (
        <Mountain key={i} position={mountain.position} scale={mountain.scale} />
      ))}
      
      {/* Clouds */}
      <Cloud position={[-3, 2, -5]} speed={0.2} opacity={0.3} />
      <Cloud position={[3, 2.5, -6]} speed={0.3} opacity={0.2} />
      <Cloud position={[0, 3, -7]} speed={0.25} opacity={0.25} />
      
      {/* Ice Crystals */}
      {crystals.map((pos, i) => (
        <IceCrystal key={i} position={pos} />
      ))}
      
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#0F172A" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Fog */}
      <fog attach="fog" args={['#020617', 5, 20]} />
    </>
  );
}
