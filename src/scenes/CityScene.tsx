'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function NeonBuilding({ position, height }: { position: [number, number, number]; height: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (glowRef.current) {
      const material = glowRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 
        0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <group position={position}>
      {/* Building Structure */}
      <mesh ref={meshRef}>
        <boxGeometry args={[0.5, height, 0.5]} />
        <meshStandardMaterial
          color="#0F172A"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Neon Glow Edges */}
      <mesh ref={glowRef} position={[0, 0, 0]}>
        <boxGeometry args={[0.52, height + 0.02, 0.52]} />
        <meshStandardMaterial
          color="#EC4899"
          emissive="#EC4899"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>
    </group>
  );
}

function HolographicBillboard({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      (meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 
        0.8 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <planeGeometry args={[1, 0.6]} />
        <meshStandardMaterial
          color="#06B6D4"
          emissive="#06B6D4"
          emissiveIntensity={0.8}
          transparent
          opacity={0.7}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}

function FlyingVehicle({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.5) * 2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <mesh>
        <boxGeometry args={[0.3, 0.1, 0.2]} />
        <meshStandardMaterial
          color="#F472B6"
          emissive="#F472B6"
          emissiveIntensity={1}
        />
      </mesh>
      {/* Trail */}
      <mesh position={[-0.2, 0, 0]}>
        <boxGeometry args={[0.1, 0.02, 0.05]} />
        <meshStandardMaterial
          color="#06B6D4"
          emissive="#06B6D4"
          emissiveIntensity={1.5}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}

export default function CityScene() {
  return (
    <>
      {/* Ambient Lighting */}
      <ambientLight intensity={0.3} />
      
      {/* Neon Lights */}
      <pointLight position={[-3, 2, 2]} color="#EC4899" intensity={2} distance={8} />
      <pointLight position={[3, 2, 2]} color="#06B6D4" intensity={2} distance={8} />
      <pointLight position={[0, 4, -2]} color="#F472B6" intensity={1.5} distance={10} />
      
      {/* Directional Light */}
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#7DD3FC" />

      {/* Buildings Array */}
      <NeonBuilding position={[-2, 0, 0]} height={2} />
      <NeonBuilding position={[-1, 0, -1]} height={3} />
      <NeonBuilding position={[1, 0, 0]} height={2.5} />
      <NeonBuilding position={[2, 0, -0.5]} height={1.8} />
      <NeonBuilding position={[0, 0, -2]} height={3.5} />
      <NeonBuilding position={[-2.5, 0, -2]} height={2.2} />
      
      {/* Holographic Billboards */}
      <HolographicBillboard position={[-1.5, 2, 1]} />
      <HolographicBillboard position={[1.5, 2.5, 0.5]} />
      <HolographicBillboard position={[0, 3, -1]} />
      
      {/* Flying Vehicles */}
      <FlyingVehicle position={[-3, 2, 1]} />
      <FlyingVehicle position={[2, 3, 0]} />
      
      {/* Ground Grid */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[20, 20, 20, 20]} />
        <meshStandardMaterial
          color="#0F172A"
          emissive="#EC4899"
          emissiveIntensity={0.2}
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
      
      {/* Fog */}
      <fog attach="fog" args={['#0F172A', 5, 15]} />
    </>
  );
}
