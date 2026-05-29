import React from "react";
import { motion } from "framer-motion";

const Home_banner2 = () => {
  return (
    <>
      <div className='bg-[url("https://cdn.prod.website-files.com/689095056646b8e900d5c0e0/6895825b5e84578cc4fb23c0_decoration-02.svg")] bg-cover bg-center h-auto min-h-170 w-full bg-fixed flex justify-around items-center flex-wrap p-4'>
        <motion.img
          className="h-110 w-85 rounded-4xl rotate-5 lg:h-130 lg:w-120"
          src="https://images.pexels.com/photos/4533076/pexels-photo-4533076.jpeg?_gl=1*1fn323s*_ga*MjEzMzIzMDE4Ny4xNzY5MzM1NDA4*_ga_8JE65Q40S6*czE3NjkzMzU0MDgkbzEkZzEkdDE3NjkzMzU1ODEkajIxJGwwJGgw"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        />
        <div>
          <motion.h1 className="fun-font align-middle w-80 text-4xl p-3 text-white font-bold lg:w-145 lg:text-5xl" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.7 }} viewport={{ once: true, amount: 0.5 }}>
            Experience the Future of Shopping with Our AI-Powered Predictor!
          </motion.h1>
          <motion.p className="text-white text-xl mt-4 w-80 p-3 lg:w-145 lg:text-2xl" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} viewport={{ once: true, amount: 0.5 }}>
            Unlock smarter shopping decisions with our cutting-edge AI
            predictor. Get personalized recommendations, compare products, and
            save time and money on every purchase. Embrace the future of
            shopping today!
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Home_banner2;
