import React from "react";
import BgImage from "../../assets/bg-slate.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useForm } from "react-hook-form";
import BrandT from "../../assets/website/brand-top.png"
import BrandB from "../../assets/website/brand-bot.png"


const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const SignUp = () => {
  const [sidebar, setSidebar] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main style={bgImage}>
      <section className="relative min-h-[750px] w-full ">
        <div className="container">
          {/* navbar section  */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* SignUp for Influencers */}

          <div className=" justify-items-center place-items-center min-h-[850px]  ">
            <motion.div
             initial={{opacity:0, y:-100 }}
                    whileInView={{opacity:1, y:0}}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.3
                    }}
             className="pt-[40px] ">
              <h1
            className="text-lightOrange text-center pt-6 text-3xl font-semibold uppercase ">Elevate Your <span className="text-primary ">Brand</span>
            </h1>
            </motion.div>
            
              
            {/* SignUP form */}
            <div className="relative ">
            
            <div className=" relative z-40 max-w-lg mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
          
              <motion.h2 
                  initial={{opacity:0, y:100 }}
                    whileInView={{opacity:1, y:0}}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.3
                    }}
              className="text-2xl font-bold mb-6 text-center uppercase">
                <span className="text-darkGray">Register </span><span className="text-primary uppercase ">your Brand</span>
              </motion.h2>
             
              <form onSubmit={handleSubmit(onSubmit)} className=" space-y-4 ">
                {/* Brand Name */}
                <motion.div
                    initial={{opacity:0, y:100 }}
                    animate={{opacity:1, y:0}}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.35
                    }}
                >
                  <label className="block text-sm font-medium text-darkGray ">
                    Brand Name
                  </label>
                  <input
                    {...register("brandName", {
                      required: "Brand Name is required*",
                    })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-md focus:ring-primary focus:border-primary "
                    type="text"
                    placeholder="Enter Brand Name"
                  />
                  {errors.brandName && (
                    <p className="text-primaryDark text-sm mt-1">
                      {errors.brandName.message}
                    </p>
                  )}
                </motion.div>

                {/* Website URL */}
                <motion.div
                   initial={{opacity:0, y:100 }}
                    animate={{opacity:1, y:0}}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.37
                    }}
                >
                  <label className="block text-sm font-medium text-darkGray">
                    Website URL
                  </label>
                  <input
                    {...register("websiteUrl", {
                      required: "Website URL is required*",
                    })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-md focus:accent-primary focus:ring-primary focus:border-primary  "
                    type="url"
                    placeholder="Enter complete Website URL"
                  />
                  {errors.websiteUrl && (
                    <p className="text-primaryDark text-sm mt-1">
                      {errors.websiteUrl.message}
                    </p>
                  )}
                </motion.div>

                {/* Niche/Industry */}
                <motion.div
                       initial={{opacity:0, y:100 }}
                    animate={{opacity:1, y:0}}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.39
                    }}
                >
                  <label className="block text-sm font-medium text-darkGray">
                    Niche/Industry
                  </label>
                  <select
                    {...register("niche", {
                      required: "Niche/Industry is required*",
                    })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-md 
                     focus:accent-primary focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select a Niche</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Health">Health</option>
                    <option value="Technology">Technology</option>
                  </select>
                  {errors.niche && (
                    <p className="text-primaryDark text-sm mt-1">
                      {errors.niche.message}
                    </p>
                  )}
                </motion.div>

                {/* Company Size */}
                <motion.div
                   initial={{opacity:0, y:100 }}
                    animate={{opacity:1, y:0}}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.41
                    }}
                >
                  <label className="block text-sm font-medium text-darkGray">
                    Company Size
                  </label>
                  <select
                    {...register("companySize", {
                      required: "Company Size is required*",
                    })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-md focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select Company Size</option>
                    <option value="Startup">Startup</option>
                    <option value="Small">Small</option>
                    <option value="Mid">Mid</option>
                    <option value="Large">Large</option>
                  </select>
                  {errors.companySize && (
                    <p className="text-primaryDark text-sm mt-1">
                      {errors.companySize.message}
                    </p>
                  )}
                </motion.div>

                {/* Instagram Handle */}
                <motion.div
                   initial={{opacity:0, y:100 }}
                    animate={{opacity:1, y:0}}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.43
                    }}
                >
                  <label className="block text-sm font-medium text-darkGray">
                    Instagram Handle
                  </label>
                  <input
                    {...register("instagramHandle", {
                      required: "Instagram Handle is required*",
                    })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-md focus:ring-primary focus:border-primary"
                    type="text"
                    placeholder="Enter Your Instagram Handle"
                  />
                  {errors.instagramHandle && (
                    <p className="text-primaryDark text-sm mt-1">
                      {errors.instagramHandle.message}
                    </p>
                  )}
                </motion.div>

                {/* Brand Description */}
                <motion.div
                   initial={{opacity:0, y:100 }}
                    animate={{opacity:1, y:0}}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.45
                    }}
                >
                  <label className="block text-sm font-medium text-darkGray">
                    Brand Description
                  </label>
                  <textarea
                    {...register("brandDescription", {
                      required: "Brand Description is required*",
                    })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-md focus:ring-primary focus:border-primary"
                    rows="4"
                    placeholder="Ex. Our brand, Acme Fashion, is dedicated to creating stylish, sustainable clothing for modern women."
                  ></textarea>
                  {errors.brandDescription && (
                    <p className="text-primaryDark text-sm mt-1">
                      {errors.brandDescription.message}
                    </p>
                  )}
                </motion.div>

                <motion.button
                   initial={{opacity:0, y:100 }}
                    animate={{opacity:1, y:0}}
                    viewport={{once:true, amount:0.1}}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.47
                    
                    }}
                  type="submit"
                  className="w-full py-2 px-4 bg-primary hover:bg-primaryDark text-white font-bold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                >
                  Sign Up
                </motion.button>
              </form>

               
              </div>
                {/* RIng Section */}
            <motion.div
                                        initial={{opacity:0, y: -100 }}
                                          animate={{opacity:1, y:0}}
                                          transition={{
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 10,
                                            delay: 0.4
                                          }}
                                      className='h-[220px] w-[240px] absolute top-[2rem] -right-[-16rem]
                                      border-primary border-none rounded-full z-10 '>
                                          <img src={BrandT} alt="" />
                                      </motion.div>

              
                                      <motion.div
                                        initial={{opacity:0, y: 100 }}
                                          animate={{opacity:1, y:0}}
                                          transition={{
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 10,
                                            delay: 0.4
                                          }}
                                      className='h-[220px] w-[240px] absolute -top-[-22rem] -left-[-16rem]
                                      border-primary border-none rounded-full z-10 '>
                                          <img src={BrandB} alt="" />
                                      </motion.div>
            </div>
                   

                   
            </div>

          </div>
        

        {/* Sidebar menu section */}
        {sidebar && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-0 right-0 w-[140px] 
            h-full bg-gradient-to-b from-primary/80 
             to-primaryDark/80 backdrop-blur-sm z-10 "
          >
            <div
              className="w-full h-full flex justify-center
              items-center "
            >
              <div
                className="flex flex-col justify-center
              items-center gap-6 text-white "
              >
                {/* line */}
                <div className="w-[1px] h-[70px] bg-white "></div>
                {/* Social Icons */}
                <div
                  className="inline-block p-2 rounded-full
                    cursor-pointer border border-white "
                >
                  <FaFacebookF className="text-2xl  " />
                </div>
                <div
                  className="inline-block p-2 rounded-full
                    cursor-pointer border border-white "
                >
                  <FaInstagram className="text-2xl  " />
                </div>
                <div
                  className="inline-block p-2 rounded-full
                    cursor-pointer border border-white "
                >
                  <FaYoutube className="text-2xl  " />
                </div>

                <div className="w-[1px] h-[70px] bg-white "></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default SignUp;
