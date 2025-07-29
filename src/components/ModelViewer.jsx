// ------------ //
// Model Viewer //
// ------------ //

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Load and display my room.
function Model({ modelPath }) 
{
  const { scene } = useGLTF(modelPath);

  scene.position.set(0, -5, 0);

  return <primitive object={scene} />;
}

// Main Component.
function ModelViewer({ modelPath = "/models/Room.glb" }) 
{
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        camera={{ position: [20, 10, -20], fov: 40 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Suspense for loading fallback. */}
        <Suspense fallback={null}>
          <Model modelPath={modelPath} />
        </Suspense>
        
        {/* Camera controls for orbiting around the model */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
        />
      </Canvas>
    </div>
  );
}

export default ModelViewer;