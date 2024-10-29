import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Scene } from './components/Scene';
import { Loader } from './components/Loader';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleSceneLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="w-full h-screen">
      <ErrorBoundary>
        <Canvas
          shadows
          camera={{ position: [50, 80, 80], fov: 45 }}
          className="w-full h-full bg-gray-900"
        >
          <color attach="background" args={['#1a1a1a']} />
          <fog attach="fog" args={['#1a1a1a', 60, 100]} />
          <ambientLight intensity={0.5} />
          <directionalLight
            castShadow
            position={[2.5, 8, 5]}
            intensity={1.5}
            shadow-mapSize={[1024, 1024]}
          >
            <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10]} />
          </directionalLight>
          <Suspense fallback={null}>
            <Scene currentSection={currentSection} onLoad={handleSceneLoad} />
          </Suspense>
        </Canvas>
        {isLoading && <Loader />}
      </ErrorBoundary>
    </div>
  );
}

export default App;