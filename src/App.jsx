import './App.css';
import { Canvas } from "@react-three/fiber";

import * as React from 'react';
import { RootFSM } from './logic/RootFSM.js'
import { createActorContext } from '@xstate/react'

import {GoExperience} from './go/GoExperience.jsx'
import { Auth } from './components/auth/Auth.jsx'
import { Chat } from './components/chat/Chat.jsx'
import { GameNego } from './components/gamenego/GameNego.jsx'
import { Menu } from './components/menu/Menu.jsx'
import { Splash } from './components/splash/Splash.jsx'

export const AppContext = createActorContext(RootFSM)

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
      <Auth />
      <Chat />
      <GameNego />
      <Menu />
      <Splash />
    </AppContext.Provider>
  );
}

export default App;
