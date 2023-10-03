

import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.jsx'
import { Goban } from './Goban.jsx'
import { GoBowl } from './GoBowl.jsx'
import { Spaces } from './Spaces.jsx'
import { JapanRoom } from '../components/JapanRoom.jsx'
import { Avatar } from '../components/Avatar.jsx'
import { useControls } from "leva";



export function GoExperience()
{
    const {animation, point} = useControls({
        animation: {
          value: "Sitting",
          options: ["Sitting", "Falling", "Standing", "Typing", "GetUp"]
        },
        point: false
    })

    return (
        <>
            <OrbitControls makeDefault />
            <Lights />
            <JapanRoom scale={0.25} position-y={0.037} />
            <Avatar position-z={-0.7} scale={0.6} animation={animation} point={point}/>
            <Goban />
            <GoBowl position={[ 0,0,0.3 ]}/>
            <Spaces />
            
        </>
    )
}