/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useGLTF, useFBX, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";

export function Avatar(props) {
  const {animation, point} = props;

  const group = useRef();
  const { nodes, materials,  } = useGLTF("models/dean.glb");
  console.log(nodes)

  const { animations: typingAnimation } = useFBX("animations/Typing.fbx")
  const { animations: standingAnimation } = useFBX("animations/StandingIdle.fbx")
  const { animations: fallingAnimation } = useFBX("animations/FallingIdle.fbx")
  const { animations: sittingAnimation } = useFBX("animations/SittingIdle.fbx")
  const { animations: getupAnimation } = useFBX("animations/GettingUp.fbx")

  typingAnimation[0].name = "Typing";
  standingAnimation[0].name = "Standing";
  fallingAnimation[0].name = "Falling";
  sittingAnimation[0].name = "Sitting";
  getupAnimation[0].name = "GetUp";
  

  const { mixer, actions } = useAnimations([typingAnimation[0], standingAnimation[0], fallingAnimation[0], sittingAnimation[0], getupAnimation[0]], group);


  // actions["GetUp"].repetitions
 
  // const rightArmBone = group.current.getObjectByName("Head")
  // console.log(group.current.getObjectByName)

  useFrame((state) => {
    // if(headFollow) {
    //   group.current.getObjectByName("Head").lookAt(state.camera.position);
    // }
    // if (cursorFollow) 
    // {
    //   const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1)
    //   group.current.getObjectByName("Spine2").lookAt(target);
    // }
    const rightShoulderBone = group.current.getObjectByName("RightShoulder")
    const rightArmBone = group.current.getObjectByName("RightArm")
    const rightForeArmBone = group.current.getObjectByName("RightForeArm")

    if(point) {
      rightArmBone.lookAt(state.camera.position);
    }
  })
  
  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play();
    return () => {
      actions[animation].reset().fadeOut(0.5)
    }
  }, [animation])

  // useEffect(() => {
  //   Object.values(materials).forEach((material) => {
  //     material.wireframe = wireframe;
  //   })
  // }, [wireframe])

  return (
    <group {...props} rotation-x={-Math.PI / 2} ref={group} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Beard"
        geometry={nodes.Wolf3D_Beard.geometry}
        material={materials.Wolf3D_Beard}
        skeleton={nodes.Wolf3D_Beard.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Outfit_Top"
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Outfit_Top.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Outfit_Top.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Outfit_Bottom"
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Outfit_Bottom.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Outfit_Bottom.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Outfit_Footwear"
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        morphTargetDictionary={
          nodes.Wolf3D_Outfit_Footwear.morphTargetDictionary
        }
        morphTargetInfluences={
          nodes.Wolf3D_Outfit_Footwear.morphTargetInfluences
        }
      />
      <skinnedMesh
        name="Wolf3D_Body"
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Body.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Body.morphTargetInfluences}
      />

    </group>
  );
}

useGLTF.preload("models/dean.glb");