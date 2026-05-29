import React from 'react'
import Button1 from "../Components/Button1";
import Tags from "../Components/Tags";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Home_banner1 = () => {

  return (
    <>
        <div className="home-top bg-[#161317] h-auto w-full mt-4 p-3 flex flex-wrap justify-around items-center">
        <motion.h1 className="text-5xl p-3 text-white" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay:0.1}}>
          Smart Shopping <br /> Starts Here.....
        </motion.h1>
        <motion.div className="flex justify-end flex-col items-end gap-4" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay:0.3}}>
          <Link to="/services">
            <Button1 buttonText="Predict Now!"/>
          </Link>
          <p className="text-white text-lg w-80 lg:w-90 text-right">Your personalized e-shop advisory system for smarter, safer, and value-driven purchases.</p>
        </motion.div>
      </div>
      <div className="h-auto bg-[#161317] w-full p-5 flex justify-center items-start">
        <motion.div className="banner1-img h-[70vh] w-[95%] bg-[url('/images/banner1.jpg')] bg-cover bg-center rounded-3xl relative" initial={{ opacity: 0, scale:0.7 }} animate={{ opacity: 1, scale:1 }} transition={{ duration: 1, delay:0.5}}>
          <div className="absolute bottom-8 left-10 w-auto h-auto p-2 bg-[#78798a9a] rounded-3xl flex justify-center flex-col items-center flex-wrap gap-3.5 lg:flex-row">
            <Tags tagsTitle='Smart automation'/>
            <Tags tagsTitle='AI manufacturing'/>
            <Tags tagsTitle='Data-driven quality'/>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Home_banner1
