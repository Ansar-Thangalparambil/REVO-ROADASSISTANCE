import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PresentationControls, Environment, ContactShadows, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Apple-style sleek metallic gear/ring
function PrecisionRing(props: any) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} {...props}>
      <torusGeometry args={[2.2, 0.15, 64, 128]} />
      <meshPhysicalMaterial 
        color="#ffffff" 
        metalness={1} 
        roughness={0.15} 
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
}

// Inner rotating mechanism (brushed titanium)
function TitaniumCore(props: any) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = -(state.clock.elapsedTime * 0.4);
      groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group ref={groupRef} {...props}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.4, 1.4, 0.4, 64]} />
        <meshPhysicalMaterial 
          color="#d1d1d6" 
          metalness={0.8} 
          roughness={0.4} 
        />
      </mesh>
      {/* Precision cutouts to simulate engine/tool head */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <mesh key={i} position={[Math.cos((i * Math.PI) / 3) * 1.4, 0, Math.sin((i * Math.PI) / 3) * 1.4]}>
          <cylinderGeometry args={[0.2, 0.2, 0.5, 32]} />
          <meshPhysicalMaterial color="#1C1C1E" metalness={0.9} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

// Center glowing/glass element (Revive core)
function GlassCore(props: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} {...props}>
      <sphereGeometry args={[0.8, 64, 64]} />
      <MeshTransmissionMaterial 
        backside
        samples={4}
        thickness={2}
        chromaticAberration={0.05}
        anisotropy={0.1}
        distortion={0.2}
        distortionScale={0.3}
        temporalDistortion={0.1}
        color="#D93025" 
        transmission={1}
        roughness={0.1}
      />
    </mesh>
  );
}

// Sleek floating bolt
function FloatingBolt({ speed, offset, ...props }: any) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime;
      meshRef.current.position.y = props.position[1] + Math.sin(t * speed + offset) * 0.3;
      meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.5;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={meshRef} {...props}>
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 0.15, 6]} />
        <meshPhysicalMaterial color="#f5f5f7" metalness={0.9} roughness={0.1} clearcoat={1} />
      </mesh>
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.8, 32]} />
        <meshPhysicalMaterial color="#8e8e93" metalness={1} roughness={0.3} />
      </mesh>
    </group>
  );
}

export default function MechanicalScene() {
  return (
    <div style={{ width: '100%', height: '100%', cursor: 'grab' }}>
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 2]}>
        <color attach="background" args={['#F7F7F5']} />
        
        {/* Studio Lighting Setup */}
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={1} color="#D93025" />
        
        {/* Environment Map for hyper-realistic metallic reflections */}
        <Environment preset="studio" />

        <PresentationControls 
          global 
          config={{ mass: 1, tension: 170, friction: 26 }} 
          snap={{ mass: 2, tension: 1500 }} 
          rotation={[0.1, 0.3, 0]} 
          polar={[-Math.PI / 4, Math.PI / 4]} 
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <group position={[0, -0.2, 0]}>
              <PrecisionRing />
              <TitaniumCore />
              <GlassCore />
              
              {/* Floating accent elements */}
              <FloatingBolt position={[2.5, 1.5, -1]} rotation={[0.5, 0.2, 0.5]} speed={1} offset={0} />
              <FloatingBolt position={[-2, -1.5, 1.5]} rotation={[-0.2, 0.5, -0.5]} speed={1.2} offset={Math.PI} scale={0.8} />
              <FloatingBolt position={[1.5, -2, 2]} rotation={[1, 0, 0]} speed={0.8} offset={Math.PI / 2} scale={0.6} />
            </group>
          </Float>
        </PresentationControls>

        {/* Soft, realistic shadow catching */}
        <ContactShadows 
          position={[0, -3.2, 0]} 
          opacity={0.6} 
          scale={15} 
          blur={2.5} 
          far={4} 
          color="#1C1C1E" 
        />
      </Canvas>
    </div>
  );
}
