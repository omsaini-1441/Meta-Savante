import React from "react";
import bannerImg from "../../assets/website/Banner.png";
import icon1 from "../../assets/website/icon1.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BannerStyle = {
  backgroundImage: `url(${bannerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgrounddRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  return (
    <div className="container my-14 ">
      <div
        style={BannerStyle}
        className="sm:min-h-[400px] sm:flex 
        sm:justify-end sm:items-center rounded-xl "
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto ">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="text-2xl text-center 
                        sm:text-4xl font-semibold "
            >
              Work with Us{" "}
              <img
                src={icon1}
                alt=""
                className="h-20 w-20 inline-block mb-10 "
              />{" "}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.25,
              }}
              className="text-center sm:px-20 "
            >
              "Transform your marketing journey. Whether you're a brand seeking
              perfect influencer matches or an influencer looking to partner
              with top brands, Register now to connect, collaborate, and grow!"{" "}
            </motion.p>
            {/* imagess/buttons links */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.3,
              }}
              className="flex justify-center items-center gap-4 "
            >
              <Link
                to="/SignUp"
                className="max-w-[150px] sm:max-w-[220px]
                            md:max-w-[200px]  "
              >
                <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-primary rounded-md group">
                  <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-primaryDark rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-primaryDark rounded group-hover:-ml-4 group-hover:-mb-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out  -translate-x-full bg-primary rounded-md group-hover:translate-x-0"></span>
                  <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                    REGISTER YOURSELF!
                  </span>
                </button>
              </Link>

              <Link
                to="/SignUpBrand"
                className="max-w-[150px] sm:max-w-[220px]
                            md:max-w-[200px]  "
              >
                <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-primary rounded-md group">
                  <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-primaryDark rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-primaryDark rounded group-hover:-ml-4 group-hover:-mb-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out  -translate-x-full bg-primary rounded-md group-hover:translate-x-0"></span>
                  <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                    REGISTER YOUR BRAND!
                  </span>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
