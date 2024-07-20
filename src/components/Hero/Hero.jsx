import React from 'react'
import BgImage from "../../assets/bg-slate.png" 
import BlackCoffee from "../../assets/Hero-t.png"
import Navbar from '../Navbar/Navbar'
import {motion} from "framer-motion";
import { FaFacebookF , FaInstagram, FaYoutube } from 'react-icons/fa';

const bgImage ={
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  
}

const Hero = () => {

  const[sidebar,setSidebar] = React.useState(false);


  return (
    <main style={bgImage}>
        <section className='relative min-h-[750px] w-full '>
            <div className="container">
              {/* navbar section  */}
              <Navbar sidebar={sidebar} setSidebar={setSidebar} />
              {/* Hero section  */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px] ">
                {/* text-content section */}
                <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28 '>
                  
                  <motion.h1 
                    initial={{opacity:0, y:-100 }}
                    whileInView={{opacity:1, y:0}}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.56
                    }}
                   className='text-7xl font-bold leading-tight ml-14 '>
                    Meta Savante
                  </motion.h1>

                  <motion.div 
                     initial={{opacity:0, y: 100 }}
                    whileInView={{opacity:1, y:0}}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.6
                    }}
                  className='relative '>
                    <div className='relative z-10 space-y-4   '>
                      <h1 className='text-3xl '>Elevate Your Influence! Join Savante</h1>
                      <h1 className='text-xl opacity-55 leading-loose '>"Experience seamless, impactful connections that drive results.
                       Join the revolution in influencer marketing with <span className='text-primary '>Meta Savante</span> " 
                      
                      </h1>
                    </div>
                    <div className='absolute -top-6 -left-10 w-[290px] h-[190px]
                    bg-gray-700/25  '>

                    </div>
                  </motion.div>

                </div>
                
                {/* Hero image section */}
                <div className='relative '>
                <motion.img 
                   initial={{opacity:0, scale:0 }}
                    whileInView={{opacity:1, scale:1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.35
                    }}
                src={BlackCoffee} alt="" className='relative z-40 h-[250px] w-[350px]
                md:h-[360px] md:w-[530px] img-shadow '/>

                {/* Orange Ring circle*/}
                <motion.div
                   initial={{opacity:0, y: 100 }}
                    whileInView={{opacity:1, y:0}}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.45
                    }}
                 className='h-[180px] w-[180px] absolute top-8 -right-2
                border-pink border-[20px] rounded-full z-10 '>

                </motion.div>
                {/* Big Text Section */}
                <motion.div 
                   initial={{opacity:0, x: -100 }}
                    whileInView={{opacity:1, x:0}}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.5,
                    }}
                className='absolute -top-20 left-[200px] z-[1] '>
                <h1 className='text-[140px] scale-150 font-bold 
                text-darkGray/40 leading-none '>
                  Meta Sevante
                  </h1>
                </motion.div>

                </div>
                {/* third div section */}
                <motion.div 
                   initial={{opacity:0, y: 100 }}
                    whileInView={{opacity:1, y:0}}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.6
                    }}
                className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28 '>
                  <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14 '>
                    Meta Savante
                  </h1>
                  <div className='relative '>
                    <div className='relative z-10 space-y-4   '>
                      <h1 className='text-3xl '>Unleash Your Brand’s Potential</h1>
                      <h1 className='text-xl opacity-55 leading-loose '>"<span className='text-primary'>Revolutionize</span> your marketing 
                      strategy with AI powered influencer collaborations. Discover the future of brand-influencer
                       partnerships"
                      </h1>
                    </div>
                    <div className='absolute -top-4 -right-2 w-[290px] h-[190px]
                    bg-darkGray/50  '>

                    </div>
                  </div>
                </motion.div>
                <div></div>
              </div>
            
            </div>
            {/* Sidebar menu section */}
                {
                  sidebar && (<motion.div
                             initial={{opacity:0, x: 100 }}
                               animate={{opacity:1, x:0}}
                    

                   className='absolute top-0 right-0 w-[140px] 
            h-full bg-gradient-to-b from-primary/80 
             to-primaryDark/80 backdrop-blur-sm z-10 '>

              <div className='w-full h-full flex justify-center
              items-center '>
              <div className='flex flex-col justify-center
              items-center gap-6 text-white '>
              {/* line */}
                <div className='w-[1px] h-[70px] bg-white '></div>
                      {/* Social Icons */}
                    <div className='inline-block p-2 rounded-full
                    cursor-pointer border border-white '>
                      <FaFacebookF className='text-2xl  ' />  
                    </div>
                    <div className='inline-block p-2 rounded-full
                    cursor-pointer border border-white '>
                      <FaInstagram className='text-2xl  ' />
                    </div>
                    <div className='inline-block p-2 rounded-full
                    cursor-pointer border border-white '>
                      <FaYoutube className='text-2xl  ' />
                    </div>
                    

                <div className='w-[1px] h-[70px] bg-white '></div>
              </div>
              </div>
            </motion.div>
                )}

            
        </section>
    </main>
  )
}

export default Hero;