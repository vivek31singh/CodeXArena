"use client";

import * as React from "react";

import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// NAVBAR IMPORTS
import Navbar from '../components/(navbar)/page';

export default function Home() {
 
  const boxRef = React.useRef<THREE.Mesh>(null); // Typed ref for THREE.Mesh

  const earthTexture = 'https://th.bing.com/th/id/OIP.TPwQ0HIephRezzPr3s5ulAHaD4?rs=1&pid=ImgDetMain'; // Earth surface texture
  // const earthBumpMap = 'path_to_earth_bump_map.jpg'; // Optional: bump or normal map for elevation effect

  const Box = React.forwardRef<THREE.Mesh, JSX.IntrinsicElements["mesh"]>(
    (props, ref) => {
      const texture = useLoader(THREE.TextureLoader, earthTexture); // Load the custom image as a texture
      // const bumpMap = useLoader(THREE.TextureLoader, earthBumpMap); // Optional
  
      // Rotate the globe
      useFrame(() => {
        if (ref && (ref as React.MutableRefObject<THREE.Mesh>).current) {
          const mesh = (ref as React.MutableRefObject<THREE.Mesh>).current;
          mesh.rotation.x += 0.01; // Only rotating on Y axis to simulate Earth spin
          mesh.rotation.y += 0.01; // Only rotating on Y axis to simulate Earth spin
          mesh.rotation.y += 0.01; // Only rotating on Y axis to simulate Earth spin
        }
      });
  
      return (
        <mesh ref={ref as React.Ref<THREE.Mesh>} {...props}>
          <sphereGeometry args={[2, 64, 64]} />
          <meshStandardMaterial
            map={texture}
            // bumpMap={bumpMap} // Optional: Adds surface detail
            bumpScale={0.05} // Adjust the bump scale for more or less detail
          />
        </mesh>
      );
    }
  );

  // Add display name for better debugging and to avoid warnings
  Box.displayName = "Box";

  return (
   <>
   <Navbar/>
   </>
  );
}
