import React from 'react'
// import { motion } from 'framer-motion'
const Card = ({imgSrc,headText,paraText}) => {
  return (
    <>
        <div className=' card w-70 h-80 bg-white rounded-3xl shadow-lg p-3 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer aboutCard'>
            <img className='h-70 rounded-xl' src={imgSrc}/>
            <h2 className='fn-font text-xl p-2 text-blue-400 font-bold text-center'>{headText}</h2>
            <p className='pop-font text-sm'>{paraText}</p>
        </div>
    </>
  )
}

export default Card