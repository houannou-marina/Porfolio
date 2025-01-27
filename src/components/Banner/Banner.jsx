"use client";
import React from 'react'
import BannerImg from "../../assets/man2.jpeg";
import Grains from "../../assets/grains.png";
import Image  from 'next/image';
import {motion} from "framer-motion";
import { FiDownload } from 'react-icons/fi';
import { slideUp } from '../Hero/Hero';
const bgGrains= {
    backgroundImage: `url(${Grains.src})`,
    backgroundPosition: "center",
};

const Banner = () => {
  return (
    <section className='bg-black text-white'>
        <div className="container pb-10">
            <div style={bgGrains} className='bg-gray-950 rounded-3xl py-14 px-5 grid grid-cols-2 md:grid-cols-2 space-y-2 md:space-y-0 translate-y-36'>
                {/* Banner Image */}
                    < motion.div  initial={{opacity: 0}} whileInView={{opacity:1}} transition={{duration :0.8,delay: 0.5}}  className=' flex items-end'>
                        <Image
                            src={BannerImg}
                            alt='banner'
                            className='w-[300] lg:w-[400px]'
                        />
                    </motion.div>
                {/* Banner Info */}
                <div className='flex flex-col justify-center'>
                    <div className='text-left space-y-7 lg:max-w-[400px]'>
                        <motion.h1 variants={slideUp(0.3)} initial="initial" whileInView={"animate"} className='text-3xl lg:text-4xl font-bold'>I am a Full Stack Developper</motion.h1>
                        <motion.p  variants={slideUp(0.3)} initial="initial" whileInView={"animate"} className='text-white/70'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Esse maxime, mollitia dolorum alias odio ratione, dolorem numquam,
                             vel neque voluptatem atque sint adipisci at a commodi eum expedita porro tempora!
                        </motion.p>
                        <div className='flex items-center gap-4'>
                            <motion.button variants={slideUp(0.7)} initial="initial" whileInView={"animate"} className='btn text-x5 py-3 md:text-base'>
                                know more
                            </motion.button>
                            <motion.button variants={slideUp(0.9)} initial="initial" whileInView={"animate"} className='border border-white/50 rounded-lg px-4 text-xs md:text-base flex items-center gap-2 md:py-3'>
                                <FiDownload/>
                                Download Resume
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner
