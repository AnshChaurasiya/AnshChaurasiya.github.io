'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, Trail } from '@react-three/drei';
import * as THREE from 'three';

function Nebula({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      (meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 
        0.5 + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial
        color="#8B5CF6"
        emissive="#8B5CF6"
        emissiveIntensity={0.5}
        transparent
        opacity={0.3}
        wireframe={false}
      />
    </mesh>
  );
}

function Planet({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={orbitRef}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Orbit Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[Math.sqrt(position[0]**2 + position[2]**2), Math.sqrt(position[0]**2 + position[2]**2) + 0.02, 64]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function AsteroidBelt() {
  const asteroidCount = 50;
  const asteroidPositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < asteroidCount; i++) {
      const angle = (i / asteroidCount) * Math.PI * 2;
      const radius = 8 + Math.random() * 2;
      positions.push([
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 0.5,
        Math.sin(angle) * radius
      ]);
    }
    return positions;
  }, []);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {asteroidPositions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <dodecahedronGeometry args={[0.1 + Math.random() * 0.1]} />
          <meshStandardMaterial
            color="#64748B"
            emissive="#475569"
            emissiveIntensity={0.1}
            roughness={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

function Comet() {
  const cometRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (cometRef.current) {
      const t = state.clock.elapsedTime * 0.5;
      cometRef.current.position.x = Math.cos(t) * 5;
      cometRef.current.position.y = Math.sin(t * 2) * 2;
      cometRef.current.position.z = Math.sin(t) * 5;
    }
  });

  return (
    <group ref={cometRef}>
      <Trail
        width={1}
        length={8}
        color="#A78BFA"
        attenuation={(t) => t * t}
      >
        <mesh>
          <sphereGeometry args={[0.2]} />
          <meshStandardMaterial
            color="#C4B5FD"
            emissive="#C4B5FD"
            emissiveIntensity={2}
          />
        </mesh>
      </Trail>
    </group>
  );
}

function BlackHole() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = -state.clock.elapsedTime * 0.8;
      (ringRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 
        1 + Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <group position={[0, 0, -5]}>
      {/* Black Core */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#000000"
          emissive="#000000"
          emissiveIntensity={0}
        />
      </mesh>
      
      {/* Accretion Disk */}
      <mesh ref={ringRef} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.2, 0.3, 16, 100]} />
        <meshStandardMaterial
          color="#A855F7"
          emissive="#A855F7"
          emissiveIntensity={1}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}

export default function GalaxyScene() {
  return (
    <>
      {/* Starfield Background */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      
      {/* Ambient Lighting */}
      <ambientLight intensity={0.2} />
      
      {/* Purple Galaxy Light */}
      <pointLight position={[0, 0, 0]} color="#8B5CF6" intensity={2} distance={20} />
      <pointLight position={[5, 5, -5]} color="#A78BFA" intensity={1} distance={15} />
      
      {/* Nebula Clouds */}
      <Nebula position={[-4, 2, -3]} />
      <Nebula position={[5, -3, -4]} />
      
      {/* Planets */}
      <Planet position={[3, 0, 0]} color="#EC4899" />
      <Planet position={[-4, 1, 2]} color="#06B6D4" />
      <Planet position={[2, -2, -3]} color="#F59E0B" />
      
      {/* Asteroid Belt */}
      <AsteroidBelt />
      
      {/* Comet */}
      <Comet />
      
      {/* Black Hole */}
      <BlackHole />
      
      {/* Fog for depth */}
      <fog attach="fog" args={['#0F0818', 10, 30]} />
    </>
  );
}
