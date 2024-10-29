import React, { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { gsap } from 'gsap';
import { Box, Environment, Grid } from '@react-three/drei';

interface SceneProps {
  currentSection: number;
  onLoad: () => void;
}

export function Scene({ currentSection, onLoad }: SceneProps) {
  const { camera } = useThree();
  const sceneRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (sceneRef.current) {
      onLoad();
    }
  }, [onLoad]);

  useEffect(() => {
    const positions = [
      { pos: [50, 80, 80], target: [0, 0, 0] },
      { pos: [20, 40, 60], target: [20, 0, 0] },
      { pos: [-30, 60, 40], target: [40, 0, 0] },
    ];

    gsap.to(camera.position, {
      x: positions[currentSection].pos[0],
      y: positions[currentSection].pos[1],
      z: positions[currentSection].pos[2],
      duration: 2,
      ease: 'power3.inOut',
    });
  }, [currentSection, camera]);

  return (
    <group ref={sceneRef}>
      <Environment preset="city" />
      <Grid
        renderOrder={-1}
        position={[0, -0.01, 0]}
        infiniteGrid
        cellSize={0.6}
        cellThickness={0.6}
        sectionSize={3.3}
        sectionThickness={1}
        sectionColor={[0.5, 0.5, 10]}
        fadeDistance={30}
        fadeStrength={1}
      />
      {/* Placeholder boxes until models are ready */}
      <Box position={[0, 5, 0]} args={[10, 10, 10]} castShadow>
        <meshStandardMaterial color="#666666" />
      </Box>
      <Box position={[20, 5, 0]} args={[10, 10, 10]} castShadow>
        <meshStandardMaterial color="#666666" />
      </Box>
      <Box position={[40, 5, 0]} args={[10, 10, 10]} castShadow>
        <meshStandardMaterial color="#666666" />
      </Box>
    </group>
  );
}