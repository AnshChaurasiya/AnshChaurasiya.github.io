'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function Tree({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={position}>
        {/* Tree Trunk */}
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.15, 1, 8]} />
          <meshStandardMaterial color="#4A5D23" />
        </mesh>
        
        {/* Tree Canopy */}
        <mesh position={[0, 0.8, 0]}>
          <coneGeometry args={[0.5, 1, 8]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.2} />
        </mesh>
        
        <mesh position={[0, 1.3, 0]}>
          <coneGeometry args={[0.4, 0.8, 8]} />
          <meshStandardMaterial color="#6EE7B7" emissive="#6EE7B7" emissiveIntensity={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

function GlowingSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
      const material = sphereRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <mesh ref={sphereRef} position={[0, 1, 0]}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial
        color="#FDE68A"
        emissive="#FDE68A"
        emissiveIntensity={0.8}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

export default function ForestScene() {
  const treePositions: [number, number, number][] = [
    [-3, -1, -2],
    [-2, -1, -4],
    [-1, -1, -3],
    [1, -1, -3],
    [2, -1, -4],
    [3, -1, -2],
    [-4, -1, 0],
    [4, -1, 0],
  ];

  return (
    <>
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />
      
      {/* Main Light */}
      <pointLight position={[0, 5, 0]} intensity={1} color="#6EE7B7" />
      <pointLight position={[-5, 3, -5]} intensity={0.5} color="#10B981" />
      <pointLight position={[5, 3, -5]} intensity={0.5} color="#10B981" />
      
      {/* Stars */}
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0.5} fade speed={0.5} />
      
      {/* Forest Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#052E16" />
      </mesh>
      
      {/* Trees */}
      {treePositions.map((pos, i) => (
        <Tree key={i} position={pos} />
      ))}
      
      {/* Glowing Orb */}
      <GlowingSphere />
      
      {/* Fog */}
      <fog attach="fog" args={['#052E16', 5, 15]} />
    </>
  );
}
