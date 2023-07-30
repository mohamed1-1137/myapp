import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {styles} from "../styles"
import {logo, menu, close} from "../assets/index"
import {navLinks} from "../constants"

 const Navbar = () => {
  const [active,setActive]=useState('')
  const [toggle,setToggle]=useState(false)
  return (
    <nav className={`${styles.paddingX} bg-[#151030]   w-full flex items-center py-5 fixed   z-50 top-0 `}>
    
    <div className='w-full flex justify-between items-center max-w-8xl '>
      <Link   
      to="/" 
      className="flex gap-3  items-center "
      onClick={()=>{
        setActive("")
        window.scrollTo(0,0)
      }}
      >
        <img src={logo} alt="logo" className="w-9 h-9 object-contain "/>
        <p className="cursor-pointer text-white-900 ">Mohamed Talat</p>
      </Link>
      
      <ul className="list-none hidden sm:flex flex-row gap-10"> 
          {navLinks.map((link)=>(
            <li 
            key={link.id}
            className={`${
              active === link.title?
              "text-white":"text-secondary"
            }hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={()=>setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img src={toggle?close:menu} alt="menu" className="cursor-pointer w-[28px] h-[28px] object-contain "
        onClick={()=>setToggle(!toggle)}/>
        <div className={`${!toggle?'hidden':'flex'}
        black-gradient p-4 absolute top-20 right-0 mx-4 my-1 min-w-[140px]
        z-10 rounded-xl
        `}>
          <ul className="list-none justify-end items-start  flex-row gap-10"> 
          {navLinks.map((link)=>(
            <li 
            key={link.id}
            className={`${
              active === link.title?
              "text-white":"text-secondary"
            }hover:font-popins font-medium cursor-pointer text-[16px] p-2 `}
            onClick={()=>
            {setActive(link.title)
            setToggle(!toggle)}
            }>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
      </ul>
        </div>
      </div>
    </div>
    </nav>
  )
}
export default Navbar

