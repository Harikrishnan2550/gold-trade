"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { MeshDistortMaterial, Float, PerspectiveCamera } from "@react-three/drei";

function Particles({ count = 20 }) {
  const mesh = useRef<THREE.Group>(null!);
  const particles = Array.from({ length: count }, () => ({
    position: [Math.random() * 1.5 - 0.75, Math.random() * 1.5 - 0.75, Math.random() * 1.5 - 0.75],
    speed: Math.random() * 0.01,
  }));

  useFrame((state) => {
    mesh.current.rotation.y += 0.005;
    mesh.current.rotation.x += 0.003;
  });

  return (
    <group ref={mesh}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position as any}>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={2} />
        </mesh>
      ))}
    </group>
  );
}

export default function GoldCube() {
  return (
    <div className="h-full w-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#D4AF37" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <mesh>
            <boxGeometry args={[2.5, 2.5, 2.5]} />
            <meshPhysicalMaterial 
              transparent 
              opacity={0.2} 
              transmission={0.9} 
              thickness={0.5} 
              roughness={0} 
              metalness={0.1}
              color="#ffffff"
            />
            {/* The wireframe edge for the tech look */}
            <lineSegments>
                <edgesGeometry args={[new THREE.BoxGeometry(2.5, 2.5, 2.5)]} />
                <lineBasicMaterial color="#D4AF37" linewidth={2} />
            </lineSegments>
            <Particles />
          </mesh>
        </Float>
      </Canvas>
    </div>
  );
}