import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import * as THREE from 'three';

interface ModelProps extends GroupProps {
  position: [number, number, number];
}

export function Model({ position, ...props }: ModelProps) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF('/models/model.glb');

  return (
    <group ref={group} position={position} {...props}>
      {/* This is a placeholder mesh until your actual model is loaded */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[10, 10, 10]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
    </group>
  );
}

useGLTF.preload('/models/model.glb');