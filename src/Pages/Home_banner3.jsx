import React from 'react'
import Card from '../Components/Card'
import { motion } from 'framer-motion'

const Home_banner3 = () => {
  return (
    <>
        <div className='bg-[#161317] w-full min-h-163 h-auto p-10 flex justify-center items-center flex-col gap-6'>
            <motion.h1 className='fun-font text-white text-4xl font-bold text-center capitalize' initial={{y:-200, opacity:0}} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.7 }} viewport={{ once: true, amount: 0.5 }}>Why choose E shop Advisory System ?</motion.h1>
            <motion.p className='text-white text-lg' initial={{y:200, opacity:0}} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 1 }} viewport={{ once: true, amount: 0.5 }}>Helping you to find the best E-Shop based on products Price, Reliability, and Customer Reviews.</motion.p>

            <motion.div className='p-3 h-auto w-auto flex justify-center items-center gap-10 flex-wrap' initial={{y:200, opacity:0}} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 1.2 }} viewport={{ once: true, amount: 0.5 }}>
              <Card imgSrc='https://cdn.pixabay.com/photo/2025/10/15/11/48/flat-illustration-9896165_1280.png' headText='Best Product' paraText='Browse by Product Category'/>
              <Card imgSrc='https://cdn.dribbble.com/userupload/34332157/file/original-4b0b67876a2a9856addee3535bf12af0.png?resize=752x&vertical=center' headText='Price Range Control' paraText='Adjust your budget'/>
              <Card imgSrc='https://cdn.dribbble.com/userupload/23199509/file/original-f726fc204ee36dbb6e789282bb956d2b.png?resize=752x&vertical=center' headText='Smart Recommendation' paraText='Compare e-shop easily.'/>
            </motion.div>
        </div>
    </>
  )
}

export default Home_banner3