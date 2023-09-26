import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function JapanRoom(props) {
  const { nodes, materials } = useGLTF("/JapanRoom.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.024, -0.324, 0.273]} scale={[4.351, 0.181, 6.27]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.Tatami}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Tatami}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials["Green around tatami"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_above.geometry}
        material={materials["Roof wood"]}
        position={[0.175, 5.521, 0.323]}
        scale={[4.506, 0.181, 6.294]}
      />
      <group
        position={[4.523, 1.057, 2.627]}
        rotation={[Math.PI / 2, -0.001, -1.569]}
        scale={[8.592, 0.174, 2.081]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials.Wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={materials.Wall}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wood.geometry}
        material={materials.Wood}
        position={[-5.521, 3.508, -6.005]}
        rotation={[0, 0, 1.568]}
        scale={[0.078, 1.23, 0.071]}
      />
      <group
        position={[2.17, 1.018, -6.207]}
        rotation={[1.57, 0, -3.137]}
        scale={[4.978, 0.174, 2.081]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials.Wall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_1.geometry}
          material={materials.Wood}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wood001.geometry}
        material={materials.Wood}
        position={[-4.283, 2.691, -5.916]}
        scale={[0.098, 2.885, 0.057]}
      />
      <group rotation={[0, 0, 1.574]} scale={[2.076, 1.165, 6.288]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.Wall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.Wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials["Roof wood"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wood002.geometry}
        material={materials.Wood}
        position={[-4.367, -0.126, -1.777]}
        rotation={[1.574, 0, 0]}
        scale={[0.098, 4.148, 0.057]}
      />
      <group
        position={[-0.029, 1.91, 6.551]}
        rotation={[1.572, 0, 0]}
        scale={[4.338, 0.174, 2.081]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials.Wall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials.Wood}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wood003.geometry}
        material={materials.Wood}
        position={[-4.26, 2.563, 6.287]}
        scale={[0.082, 2.918, 0.059]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wood004.geometry}
        material={materials.Wood}
        position={[4.36, 2.495, 6.287]}
        scale={[0.082, 2.88, 0.059]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_1.geometry}
        material={materials.Wood}
        position={[-2.953, 2.732, 6.461]}
        rotation={[-1.559, 0, 0]}
        scale={[1, 1, 1.033]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.White_background_window.geometry}
        material={nodes.White_background_window.material}
        position={[-2.986, 2.259, 6.527]}
        scale={[1.129, 1.401, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_3.geometry}
        material={nodes.Window_3.material}
        position={[-3.029, 2.732, 6.609]}
        rotation={[-1.559, 0, 0]}
        scale={[1, 0.523, 1.033]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.White_background_window_2.geometry}
        material={materials["Material.001"]}
        position={[-3.063, 2.259, 6.652]}
        scale={[1.129, 1.401, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Woindow_2.geometry}
        material={materials.Wood}
        position={[-2.953, 2.732, 6.645]}
        rotation={[-1.559, 0, 0]}
        scale={[1, 1, 1.033]}
      />
      <group
        position={[4.466, 1.887, 2.664]}
        rotation={[0, 0, 1.574]}
        scale={[2.085, 0.026, 1.226]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials.Poignet}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials["Japan art 1"]}
        />
        <group
          position={[0.002, 2.101, -0.76]}
          rotation={[0.148, -0.969, -0.749]}
          scale={[0.294, 0.593, 0.071]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials.Poignet}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={materials["Material.003"]}
          />
        </group>
      </group>
      <group
        position={[4.606, 1.887, 5.136]}
        rotation={[0, 0, 1.574]}
        scale={[2.085, 0.026, 1.226]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={materials.Poignet}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027_1.geometry}
          material={materials["japan art 4"]}
        />
        <group
          position={[0.002, 2.101, -0.76]}
          rotation={[0.148, -0.969, -0.749]}
          scale={[0.294, 0.593, 0.071]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={materials.Poignet}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_1.geometry}
            material={materials["Material.003"]}
          />
        </group>
      </group>
      <group
        position={[4.466, 1.887, -2.246]}
        rotation={[0, 0, 1.574]}
        scale={[2.085, 0.026, 1.226]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={materials.Poignet}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028_1.geometry}
          material={materials["Japan art 3"]}
        />
        <group
          position={[0.002, 2.101, -0.76]}
          rotation={[0.148, -0.969, -0.749]}
          scale={[0.294, 0.593, 0.071]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials.Poignet}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_1.geometry}
            material={materials["Material.003"]}
          />
        </group>
      </group>
      <group
        position={[4.606, 1.887, -4.693]}
        rotation={[0, 0, 1.574]}
        scale={[2.085, 0.026, 1.226]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={materials.Poignet}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029_1.geometry}
          material={materials["Japan art 5"]}
        />
        <group
          position={[0.002, 2.101, -0.76]}
          rotation={[0.148, -0.969, -0.749]}
          scale={[0.294, 0.593, 0.071]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials.Poignet}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_1.geometry}
            material={materials["Material.003"]}
          />
        </group>
      </group>
      <group
        position={[4.606, 1.887, 0.196]}
        rotation={[0, 0, 1.574]}
        scale={[2.085, 0.026, 1.226]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={materials.Poignet}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030_1.geometry}
          material={materials["japan art 6"]}
        />
        <group
          position={[0.002, 2.101, -0.76]}
          rotation={[0.148, -0.969, -0.749]}
          scale={[0.294, 0.593, 0.071]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004.geometry}
            material={materials.Poignet}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_1.geometry}
            material={materials["Material.003"]}
          />
        </group>
      </group>
      <group
        position={[3.091, 1.887, -6.275]}
        rotation={[0, 1.557, 1.574]}
        scale={[2.085, 0.026, 1.226]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={materials.Poignet}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031_1.geometry}
          material={materials["Japan art 5"]}
        />
        <group
          position={[0.002, 2.101, -0.76]}
          rotation={[0.148, -0.969, -0.749]}
          scale={[0.294, 0.593, 0.071]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005.geometry}
            material={materials.Poignet}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_1.geometry}
            material={materials["Material.003"]}
          />
        </group>
      </group>
      <group
        position={[-1.56, 1.887, -6.275]}
        rotation={[0, 1.557, 1.574]}
        scale={[2.085, 0.026, 1.226]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube032.geometry}
          material={materials.Poignet}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube032_1.geometry}
          material={materials["Japan art 6"]}
        />
        <group
          position={[0.002, 2.101, -0.76]}
          rotation={[0.148, -0.969, -0.749]}
          scale={[0.294, 0.593, 0.071]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006.geometry}
            material={materials.Poignet}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_1.geometry}
            material={materials["Material.003"]}
          />
        </group>
      </group>
      <group
        position={[0.818, 1.887, -6.158]}
        rotation={[0, 1.557, 1.574]}
        scale={[2.085, 0.026, 1.226]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube079.geometry}
          material={materials.Poignet}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube079_1.geometry}
          material={materials["Japan art 7"]}
        />
        <group
          position={[0.002, 2.101, -0.76]}
          rotation={[0.148, -0.969, -0.749]}
          scale={[0.294, 0.593, 0.071]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007.geometry}
            material={materials.Poignet}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_1.geometry}
            material={materials["Material.003"]}
          />
        </group>
      </group>
      <group
        position={[-0.152, 5.035, 0.188]}
        rotation={[0, 0, -2.544]}
        scale={0.124}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_1.geometry}
          material={materials["mid Bulb"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        material={nodes.Torus.material}
        position={[-0.222, 5.137, 0.188]}
        rotation={[0, 0, -2.544]}
        scale={[0.063, 0.035, 0.069]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus001.geometry}
        material={nodes.Torus001.material}
        position={[-0.23, 5.15, 0.188]}
        rotation={[0, 0, -2.544]}
        scale={[0.063, 0.035, 0.063]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus002.geometry}
        material={nodes.Torus002.material}
        position={[-0.24, 5.164, 0.188]}
        rotation={[0, 0, -2.544]}
        scale={[0.051, 0.035, 0.056]}
      />
    </group>
  );
}

useGLTF.preload("/JapanRoom.glb");
