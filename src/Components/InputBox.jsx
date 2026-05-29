import React from 'react'
import { motion } from 'framer-motion'

const InputBox = ({p_holder,type}) => {
  return (
    <div>
        <motion.input initial={{y:200,opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.5}} placeholder={p_holder} type={type} className='pop-font h-14 w-80 lg:w-110 p-3 text-white bg-black rounded mt-8 text-sm'/>
    </div>
  )
}

export default InputBox