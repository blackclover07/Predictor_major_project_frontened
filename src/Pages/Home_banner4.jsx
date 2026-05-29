import React from 'react'
import Button1 from '../Components/Button1'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home_banner4 = () => {
  return (
    <>
        <div className='h-auto min-h-120 w-full flex flex-col justify-center items-center bg-[#2a262b]'>
        <motion.h1 className='fun-font text-4xl w-70 font-bold text-center text-white mb-6 lg:w-200' initial={{y:200, opacity:0}} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay:0.6 }} viewport={{ once: true, amount: 0.5 }}>Ready to find the best E Shop for your product?</motion.h1>
        <motion.p className='pop-font text-lg md:text-xl text-center max-w-3xl mb-8 px-4 text-white' initial={{y:200, opacity:0}} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 1 }} viewport={{ once: true, amount: 0.5 }}>Get started now and make smarter shoppindg choice.</motion.p>
        <Link to='/services' className='text-black'> <motion.button className='pop-font p-4 text-lg capitalize bg-green-600 text-white rounded-xl hover:cursor-pointer scale-100' initial={{y:200, opacity:0}} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 1.2 }} viewport={{ once: true, amount: 0.5 }}> Get started </motion.button>  </Link>
        </div>
    </>
  )
}

export default Home_banner4
