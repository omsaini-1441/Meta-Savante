import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import {motion} from "framer-motion"
import { Link } from "react-router-dom";

const Navbar = ({sidebar,setSidebar}) => {
  return (
    <nav className='absolute top-0 left-0 w-full pt-10
     text-white z-40  '>
        <div className="container">
            <div  className='flex justify-between items-center '>
                {/* Logo Section */}
                <Link to='/'>
                <motion.h1
                     initial={{opacity:0, y: -100 }}
                    animate={{opacity:1, y:0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.25
                    }}
                 className='text-2xl font-semibold '>
                META <span className='text-primary '>SAVANTE</span></motion.h1>
                </Link>
                {/* Hamburger menu */}
                <motion.div
                initial={{opacity:0, y: -100 }}
                    animate={{opacity:1, y:0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.25
                    }}
                    onClick={()=> setSidebar(!sidebar) }
                    >
                    <GiHamburgerMenu className='text-3xl cursor-pointer 
                    '/>
                </motion.div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar