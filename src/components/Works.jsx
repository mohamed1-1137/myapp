import {Tilt} from "react-tilt"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { styles } from "../styles"
import { motion } from "framer-motion"
import { fadeIn,textVariant } from "../utils/motion"
import { github,LiveDemo } from "../assets"

const ProjectCard=({index,name,description,tags,image,source_code_link,liveDemo_Link})=>{
  return(
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
      <Tilt options={{
        max:45,
        speed:450,
        scale:1,
      }}
      className="  bg-[#151030] p-5 rounded-2xl sm:w-[360px] text-white  w-full  min-h-full"
      >
        <div className="relative w-full h-[230px] ">
          <img src={image} alt={name} 
            className="object-cover w-full h-full rounded-2xl" />
            <div className="absolute  text-white inset-0 flex justify-end  m-3">
              <div 
              onClick={()=>window.open(liveDemo_Link,"_target")}
              className=" bg-white w-10 h-10 text-white flex  rounded-full justify-center items-center cursor-pointer">
                <img 
                src={LiveDemo}
                alt="github"
                className="w-1/2 h-1/2 object-contain"/>
              </div>
              <div 
              onClick={()=>window.open(source_code_link,"_target")}
              className="black-gradient w-10 h-10 flex ml-auto rounded-full justify-center items-center cursor-pointer">
                <img 
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"/>
              </div>
              
            </div>
        </div >
        <div className="mt-5 min-h-40 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className=" text-gray-300 text-[17px] leading-6 ">{description}</p>
        </div>
        <div className=" flex flex-wrap gap-2">
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
        
      </Tilt>
    </motion.div>

  )
}


const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>
          My Work
        </p>
        <h2 className={`${styles.sectionHeadText} `}>
          Project.
        </h2>
      </motion.div>
    <div className="w-full flex ">
      <motion.p 
      variants={fadeIn("","",0.1,1)}
      className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
      </motion.p>
    </div>
    <div  className="mt-20 flex flex-wrap gap-7">
      {projects.map((project,index)=>{
        return(
          <ProjectCard 
          key={`project-${index}`}
          index={index}
          {...project}/>
        )
      })}
    </div>
    </>
  )
}

export default SectionWrapper(Works,"") 