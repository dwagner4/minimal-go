

import { OrbitControls, Html, Environment } from '@react-three/drei'
import Lights from './Lights.jsx'
import Arena from './Arena.jsx'
import { Goban } from './Goban.jsx'
import { GoBowl } from './GoBowl.jsx'
import { Spaces } from './Spaces.jsx'
import { JapanRoom } from '../components/JapanRoom.jsx'
import { Avatar } from '../components/Avatar.jsx'



export function GoExperience()
{
    return (
        <>
            <OrbitControls makeDefault />
            <Lights />
            {/* <Arena /> */}
            {/* <Environment /> */}
            <JapanRoom scale={0.25} position-y={0.037} />
            <Avatar position-z={-0.3} />
            <Goban />
            <GoBowl position={[ 0,0,0.3 ]}/>
            <Spaces />
            
        </>
    )
}