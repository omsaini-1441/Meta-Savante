import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin ,
    FaPhone,
    FaTwitter
} from "react-icons/fa"
import { FaMapLocation } from 'react-icons/fa6'
import {motion} from "framer-motion"


const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-primary to-primaryDark
    pt-12 pb-8 text-white '>
        <div className="container  ">
            <div className="grid grid-cols-1 sm:grid-cols-2 
            md:grid-cols-3 gap-12 ">
                {/* Company detals */}
                <motion.div 
                    initial={{opacity:0, y:100}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true, amount:0.15}}
                    transition={{
                        delay:0.2,
                        duration:0.6,
                    }}
                className='space-y-6 '>
                    <h1 className='text-3xl font-bold uppercase '>Meta Savante</h1>
                <p className='text-sm max-w-[300px] '>Revolutionize your marketing strategy with AI-powered influencer collaborations.
                 Discover the future of brand-influencer partnerships</p>
                 <div>
                 <p className='flex items-center gap-2 '>
                    <FaPhone /> (+91)-123456789
                    </p>
                    <p className='flex items-center gap-2 mt-2 '>
                        {" "}
                        <FaMapLocation /> Noida, Uttar Pradesh
                    </p>

                 </div>
                </motion.div>
                {/* Footer links */}
                <motion.div 
                     initial={{opacity:0, y:100}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true, amount:0.15}}
                    transition={{
                        delay:0.3,
                        duration:0.6,
                    }}
                className='space-y-6  '>
                    <h1 className='text-3xl font-bold '>Quick Links</h1>
                    <div className='grid grid-cols-2 gap-3'>
                        {/* First column section */}
                        <div>
                            <ul className='space-y-2 '>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        {/* Second column ection */}
                        <div>
                            <ul className='space-y-2'>
                                <li>Careers</li>
                                <li>Testemonials</li>
                                <li>Work with us</li>
                                <li>Blogs</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
                {/* socials */}
                <motion.div
                     initial={{opacity:0, y:100}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true, amount:0.15}}
                    transition={{
                        delay:0.4,
                        duration:0.6,
                    }}
                 className="space-y-6 ">
                 
                    <h1 className='text-3xl  font-bold'>Follow Us</h1>
                 
                    
                    <div className='flex items-center gap-3'>
                        <FaFacebook className='text-4xl
                        hover:scale-110 duration-300' />
                        <FaInstagram className='text-4xl
                        hover:scale-110 duration-300' />
                        <FaLinkedin className='text-4xl
                        hover:scale-110 duration-300' />
                        <FaTwitter className='text-4xl
                        hover:scale-110 duration-300' />
                    </div>
                </motion.div>
            </div>
            {/* Copyright */}
            <p 
                
            className='text-white text-center mt-8 pt-8 border-t-2 '>
                Copyright &copy; 2024 Meta Sevante. All rights reserved 
            </p>
        </div>
    </div>
  )
}

export default Footer