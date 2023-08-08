/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function WhiteStone(props) {
  const { nodes, materials } = useGLTF("/go/whiteStone.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.white.geometry}
        material={materials.go_white}
        position={[0, 0.0035, 0]}
      />
    </group>
  );
}

useGLTF.preload("/go/whiteStone.glb");