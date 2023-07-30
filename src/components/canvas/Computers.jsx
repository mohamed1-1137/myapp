import {Suspense, useEffect,useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanavasLoader from "../Loader"

const Computers = ({Mobile}) => {
  const computer =useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight 
      intensity={0.55}  
      groundColor="black" />

      <pointLight intensity={1}/>
      <spotLight 
      position={[-20,50,10]}
      angle={0.12}
      penumbra={1}
      castShadow
      
       />
      <primitive 
      object={computer.scene}
      scale={Mobile? 1: 1.5}
      position={[-1,-2.25,-1.5]}
      rotation={[-0.01,-0.2, -0.1]} />
    </mesh>
  )
}

const ComputerCanvas =()=>{
  const [isMobile,setIsMobile]=useState(true)

  useEffect(()=>{
    const mediaQuery =window.matchMedia("(max-width:500px)")
    
    setIsMobile(mediaQuery.matches)

    const handelMediaQueryChange=(event)=>{
      setIsMobile(event.matches)
    }
    
    mediaQuery.addEventListener('change',
    handelMediaQueryChange)

    return()=>{
      mediaQuery.removeEventListener('change',
      handelMediaQueryChange)
    }

  },[])
  return(
    <Canvas
    frameloop="demand"
    shadows
    camera={{position:[30,3,5], fov:25}}
    gl={{preserveDrawingBuffer:true}}
    >
      <Suspense  fallback={<CanavasLoader/>}>
        <OrbitControls
        enablezoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers Mobile={isMobile}/>

      </Suspense>

      <Preload all />

    </Canvas>
  )
}

export default ComputerCanvas