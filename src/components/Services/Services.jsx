import React from 'react'
import {motion} from "framer-motion"
import Service1 from "../../assets/coffee/ban1.png"
import Service2 from "../../assets/coffee/Ban2.png"
import Service3 from "../../assets/coffee/Ban3.png"


const servicesData = [
    {
    id:1,
    image: Service1,
    title: "Seamless Collab Support",
    subtitle: "Benefit from prompt assistance, guidance, and resources to ensure a smooth and successful collaboration process"
},
{
    id:2,
    image: Service2,
    title: "Innovative Campaigns",
    subtitle: "Participate in innovative and creative campaigns that go beyond traditional influencer marketing"
},
{
    id:3,
    image: Service3,
    title: "Tailored Collaborations",
    subtitle: "Discover collaborations that align with your unique style, interests, and values"
},
];

const cardVariants ={
            hidden: { opacity:0 , y:20 },
            visible:{
                opacity:1, y:0 , 
                transition:{
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                    ease: "easeInOut",
                },
            },
};

const containerVariants ={
             hidden:{ opacity:1},
             visible: {
                opacity:1,
                transition:{
                    delay: 0.6,
                    staggerChildren: 0.4,
                },
             },   
}; 

const Services = () => {
  return (
    <div className='container my-16 space-y-4  '>
    
    {/* Header section */}
    <div className='text-center max-w-lg mx-auto space-y-2  '>
        <motion.h1 
            initial={{opacity:0, y: 100 }}
            whileInView={{opacity:1, y:0}}
            transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 10,
                      delay: 0.2
                    }}
        className='text-3xl font-bold text-lightGray  '>
           How We <span className='text-primary '>Elevate</span> Your <span className='text-primary '>Potential</span>
        </motion.h1>
        <motion.p 
          initial={{opacity:0, scale:0.5 }}
            whileInView={{opacity:1, scale:1 }}
            transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 10,
                      delay: 0.6
                    }}
        className='text-sm opacity-50 '>
        Receive personalized support from our dedicated team throughout your influencer journey
        </motion.p>
    </div>    
    {/* Card Section */}
    <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount:0.4, }}
    className='grid grid-cols-1 sm:grid-grid-cols-2 md:grid-cols-3
    gap-8 '>

       { servicesData.map((service)=>(
        <motion.div 
        variants={cardVariants}
        className='text-center p-4 space-y-6 '>
            <img src={service.image} alt="" className='img-shadow2 
            max-w-[250px] mx-auto hover:scale-110
            duration-300 cursor-pointer ' />
            <div className='space-y-2 '>
                <h1 className='text-2xl font-bold text-primary '>{service.title}</h1>
                <p className='text-darkGray  '>{service.subtitle}</p>
            </div>
        </motion.div>
         ))}
    </motion.div>
    </div>
  )
}

export default Services