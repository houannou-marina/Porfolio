"use client";
import React from "react";
import RedBg from "../../assets/redbg2.png";
import { CiPen } from "react-icons/ci";
import { IoFolderOpen } from "react-icons/io5";
import { FiMonitor, FiDownload } from "react-icons/fi";
import { delay, motion } from "framer-motion";
import { slideUp } from "../Hero/Hero";

const bgStyle = {
    backgroundImage: `url(${RedBg.src})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};

const ServicesData = [
    {
        id: 1,
        title: "Website Development",
        icon: <CiPen className="text-3xl" />,
        link: "/services",
        desc: "Lorem ipsum dolor sit amet consectetur.",
        delay: 1.2,
    },
    {
        id: 2,
        title: "Website Development",
        link: "#",
        desc: "Lorem ipsum dolor sit amet consectetur.",
        icon: <IoFolderOpen className="text-3xl" />,
        delay: 1.6,
    },
    {
        id: 3,
        title: "App Development",
        link: "#",
        desc: "Lorem ipsum dolor sit amet consectetur.",
        icon: <FiMonitor className="text-3xl" />,
        delay: 2,
    },
];

const reveal = (delay)=>{
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

const Services = () => {
    return (
        <section style={bgStyle}>
            <div className="bg-gradient-to-b from-black to-primary/5 text-white pt-40">
                <div className="container py-40">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Services info */}
                        <div className="flex flex-col justify-center">
                            <div className="text-left space-y-7 lg:max-w-[400px]">
                                <motion.h1 variants={slideUp(0.3)} initial="initial" whileInView={"animate"} className="text-3xl lg:text-4xl font-bold">
                                    Services
                                </motion.h1>
                                <motion.p variants={slideUp(0.5)} initial="initial" whileInView={"animate"} className="text-white/70">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse maxime,
                                    mollitia dolorum alias odio ratione, dolorem numquam, vel neque voluptatem atque
                                    sint adipisci at a commodi eum expedita porro tempora!
                                </motion.p>
                                <div className="flex items-center gap-4">
                                    <motion.button variants={slideUp(0.7)} initial="initial" whileInView={"animate"} className="bg-white text-primary rounded font-bold px-5 py-3 md:text-base hover:red-shadow">
                                        Know more
                                    </motion.button>
                                    <motion.button variants={slideUp(0.9)} initial="initial" whileInView={"animate"} className="border border-white/50 rounded-lg px-4 text-xs md:text-base flex items-center gap-2 md:py-3">
                                        <FiDownload />
                                        Download Resume
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                        {/* Services card */}
                        <div className="flex justify-center items-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {ServicesData.map((service) => (
                                    <motion.div
                                    variants={reveal(service.delay)} initial= "initial" whileInView={"animate"}
                                        key={service.id}
                                        className="flex flex-col gap-4 justify-center items-start p-6 bg-white/20 backdrop-blur-sm rounded-2xl"
                                    >
                                        <div className="text-primary/80 bg-white/70 rounded-full p-2 ">{service.icon}</div>
                                        <h1 className=" text-2xl font-bold">{service.title}</h1>
                                        <p className="text-sm text-white/70">{service.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Services;
