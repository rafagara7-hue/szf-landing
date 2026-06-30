"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleField({ count = 700 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // distribute on a fuzzy sphere shell
      const r = 3.4 + Math.random() * 2.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.035;
      ref.current.rotation.x += delta * 0.012;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        color="#9a82ff"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Core() {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.18;
    // gentle parallax toward the cursor
    group.current.rotation.x +=
      (pointer.y * 0.25 - group.current.rotation.x) * 0.04;
    group.current.position.x +=
      (pointer.x * 0.4 - group.current.position.x) * 0.04;
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
        {/* wireframe shell */}
        <Icosahedron args={[1.7, 6]}>
          <MeshDistortMaterial
            color="#7c5cff"
            emissive="#4a37d6"
            emissiveIntensity={0.5}
            wireframe
            distort={0.32}
            speed={1.6}
            roughness={0.2}
            metalness={0.6}
          />
        </Icosahedron>

        {/* inner solid glow */}
        <Icosahedron args={[1.18, 3]}>
          <meshStandardMaterial
            color="#0b0e16"
            emissive="#2de2e6"
            emissiveIntensity={0.35}
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.85}
          />
        </Icosahedron>
      </Float>
    </group>
  );
}

/** 3D centerpiece for the hero. Rendered client-only (no SSR). */
export default function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[6, 6, 6]} intensity={2.4} color="#a78bff" />
      <pointLight position={[-6, -3, 2]} intensity={1.6} color="#2de2e6" />
      <Core />
      <ParticleField />
    </Canvas>
  );
}
