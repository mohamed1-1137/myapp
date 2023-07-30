import React from "react"
import {Tilt} from 'react-tilt'
import {motion} from "framer-motion"
import {styles} from "../styles"
import { services } from '../constants/index'
import {fadeIn,textVariant} from "../utils/motion"
import { SectionWrapper } from "../hoc/index"

const ServiceCard=({title,icon,index})=>{
  return(
    <Tilt className="sm:w-[250px] w-full  ">
      <motion.div
      variants={fadeIn("right","spring",0.5*index,0.75)}
      className="w-full   green-pink-gradient  p-[1px] rounded-[20px] ">
        <div
        className=" flex flex-col justify-center items-center bg-[#151030] text-white shadow-lg  shadow-gray-800  rounded-[20px] py-5 px-12 min-h-[280px]"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain "/>
          <h3 className=" mt-6 text-center font-bold text-white text-[18px]">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


 const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p 
      variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] mx-w-3xl leading-[30px]"
      >
        I'm a skilled frontend  developer with experience in JavaScript, and expertise in frameworks like React. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-10 flex flex-wrap  gap-10">
        {services.map((service,index)=>{return(
          <ServiceCard key={service.title} index={index} {...service} />
          
        )})}
      </div>
      
    </>
  )
}
export default SectionWrapper(About,'about') 

