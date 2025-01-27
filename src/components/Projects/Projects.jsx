"use client";
import React from 'react';
import Project1 from "../../assets/Projects/p1.jpeg";
import Project2 from "../../assets/Projects/p2.jpg";
import Project3 from "../../assets/Projects/p3.jpg";
import Image from 'next/image';
import { motion } from "framer-motion";

const ProjectsData = [
    {
        id: 1,
        title: "Projects 1",
        link: "#",
        desc: "Lorem ipsum dolor sit amet consectetur.",
        img: Project1,
        delay: 0.4,
    },
    {
        id: 2,
        title: "Projects 2",
        link: "#",
        desc: "Lorem ipsum dolor sit amet consectetur.",
        img: Project2,
        delay: 0.4,
    },
    {
        id: 3,
        title: "Projects 3",
        link: "#",
        desc: "Lorem ipsum dolor sit amet consectetur.",
        img: Project3,
        delay: 0.4,
    },
];

const Projects = () => {
  return (
    <section className="bg-black text-white">
      <div className="container py-20 xl:py-36 space-y-36">
        {/* Heading title */}
        <div className="relative">
          <p className="text-3xl lg:text-4xl mb-20 tracking-widest font-bold text-center uppercase relative z-20">
            Projects
          </p>
          <p className="text-5xl lg:text-8xl text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 uppercase font-extrabold">
            {""} Projects
          </p>
        </div>
        {/* Projects Cart section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {ProjectsData.map((project) => {
            return (
              <div
                key={project.id} // Ajout de la clé unique ici
                className="bg-black hover:red-shadow border-2 border-primary/80 p-4 rounded-xl hover:scale-110 duration-300 group space-y-5"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  className="w-full"
                />
                <div className="space-y-2 p-4">
                  <h1>{project.title}</h1>
                  <p className="text-sm line-clamp-2">{project.desc}</p>
                </div>
                {/* hidden button section */}
                <div className="hidden group-hover:flex justify-around items-center duration-300">
                  <button className="border-2 border-white px-4 py-2 rounded-lg">
                    Live
                  </button>
                  <button className="btn">View Code</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
