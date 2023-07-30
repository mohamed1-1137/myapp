import {Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const {progress}=useProgress()
  return (
    <Html>
      <span >
      <p className="border-[#915eff]   border-x  border-spacing-4 w-20 h-20 flex items-center justify-center rounded-full border-gray-600">{progress.toFixed()}</p>
      </span>
    </Html>
  )
}

export default Loader