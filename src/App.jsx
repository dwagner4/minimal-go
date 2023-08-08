import './App.css';
import { Canvas } from "@react-three/fiber";

import * as React from 'react';
import { appMachine } from './appMachine.js'
import { createActorContext } from '@xstate/react'

import {GoExperience} from './go/GoExperience.jsx'

export const AppContext = createActorContext(appMachine)

console.log(AppContext)

function App() {
  
  return (
    <AppContext.Provider>
      <Canvas
        shadows
        camera={ {
          fov: 45,
          near: 0.1,
          far: 200,
          position: [ 0, 0.5, 1 ]
        } }
      >
        <color attach="background" args={["#ececec"]} />
        <GoExperience />
      </Canvas>

    </AppContext.Provider>
  );
}

export default App;
