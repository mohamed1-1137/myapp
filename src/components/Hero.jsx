import {motion} from "framer-motion"
import {ComputersCanvas} from "./canvas"
import {hero} from "../assets/index"
import {styles} from "../styles"

 const Hero = () => {
  return (
    <div>
      <section className="relative" >
        <img src={hero} alt="hero" className=" w-full h-screen bg-cover bg-no-repeat"/>
        <div>
          {/* hero text */}
          <div className={`${styles.paddingX} absolute  inset-0 top-[80px] max-w-7xl mx-auto flex flex-col items-start gap-3 `}>
          <div className="flex flex-row bg-transparent gap-5">
          <div className="flex flex-col mt-5 items-center justify-center">
            <div className="h-5 w-5 bg-[#915eff] rounded-full " />
            <div className="violet-gradient h-40 sm:h-80  w-1 " />
          </div>
          <div>
          <h2 className={`${styles.heroHeadText} text-white`}>Hi,im <span className="text-[#915eff]">Mohamed <b className="sm:block hidden" /> Talat</span></h2>
          <p className={` mt-7 text-white-100 ${styles.heroSubText}`}>I'm a frontend developer  </p>
          </div>
          </div>
        <ComputersCanvas className="z-20 mt-10" />
          </div>
           {/* animation icon to scroll to next section */}
        <div className="absolute    bottom-2
        flex w-full justify-center   items-center" >
          <a href="#about">
            <div className=" flex  items-center justify-center w-[32px] rounded-3xl border-secondary h-[64px]  border-2 ">
              <motion.dev 
              className=" w-2 h-2 bg-white rounded-full mb-1 mt-1 "
              animate={{
                y:[0,-24,24, 0]
              }}
              transition={{
                duration:2,
                repeat:Infinity,
                repeatType:'loop'
              }}
              />
            </div>
          </a>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
