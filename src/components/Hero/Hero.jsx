"use client"
import React from 'react'
import Image from 'next/image';
import HeroImg from "../../assets/red-man.png";
import Circle from "../../assets/red.png";
import Wall from "../../assets/Wall.jpg";
import {motion ,delay, animate} from "framer-motion";
import CountUp from "react-countup"

const wallBackground = {
  backgroundImage: `url(${Wall.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export const slideUp = (delay) => {
  return {
    initial : {
      y : 50,
      opacity : 0,
    },
    animate : {
      y : 0,
      opacity : 1,
      transition : {
        duration : 0.5,
        delay : delay,
      },
    },
  };
}

const Hero = () => {
  return (
   <section style={wallBackground} className='bg-black text-white'>
      <div className='bg-gradient-to-b from-primary/50 to-black'>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px]'>
          {/* Brand info */}
          <div className='flex flex-col justify-center md:text-left py-14 md:py-0'>
            <div className='text-center md:text-left space-y-6'>
              <motion.p variants={slideUp(0.3)} initial="initial" animate="animate" className='text-4xl'>Hello, I'm</motion.p>
              <motion.p variants={slideUp(0.5)} initial="initial" animate="animate" className='text-5xl lg:text-7xl font-Satisfy text-outline'>Houannou Marina</motion.p>
              <motion.p variants={slideUp(0.7)} initial="initial" animate="animate" className='text-sm leading-snug'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, laudantium nulla, 
                aspernatur officiis saepe corporis doloremque voluptas sed rem quos at! Delectus, 
                reiciendis deleniti dolore facere impedit qui itaque saepe!
              </motion.p>
              <motion.button variants={slideUp(0.9)} initial="initial" animate="animate" className='btn'>Know More</motion.button>

              {/* hero image */}
              
              <motion.div variants={slideUp(1.1)} initial="initial" animate="animate" className='flex justify-around bg-gradient-to-b from-primary/50 to-black border-2 border-primary/80 rounded-xl hover:red-shdow hover:scale-105 duration-300 md:max-w-[400px] !mt-[44px] p-4'>
                <div className='flex flex-col items-center gap-2 '>
                  <p className='text-2xl font-bold'>
                    <CountUp 
                      start={0}
                      end={100}
                      suffix="+"
                      delay={1.4}
                      
                    />
                  </p>
                  <p className='text-sm'>Experience</p>
                </div>
                <div className='flex flex-col items-center gap-2 '>
                  <p className='text-2xl font-bold'>
                   <CountUp 
                      start={0}
                      end={199}
                      suffix="+"
                      delay={1.4}
                    />
                  </p>
                  <p className='text-sm'>Projects</p>
                </div>
                <div className='flex flex-col items-center gap-2 '>
                  <p className='text-2xl font-bold'>
                  <CountUp 
                      start={0}
                      end={55}
                      suffix="+"
                      delay={1.4}
                    />
                  </p>
                  <p className='text-sm'>Clents</p>
                </div>
              </motion.div>
            </div>
          </div>
          {/* hero image */}
          <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration :0.8,delay: 0.5}} className='flex justify-center md:justify-end items-center relative'>
            <div className='bg-black rouned-3xl overflow-hidden h-[500px] flex items-end relative group hover:red-shadow hover:scale-105 duration-700'>
              <Image src={Circle} alt='circle' className='absolute top-4 -left-0 -z-0 animate-spin group-hover:animate-pulse duration-300' />
              <Image src={HeroImg} alt='circle' className='w-[400px] relative z-10 group-hover:grayscale group-hover:scale-90 duration-700' />
            </div>
          </motion.div>
        </div>
      </div>
   </section>
  )
}

export default Hero
