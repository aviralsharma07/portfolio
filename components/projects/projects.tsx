"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Github, ExternalLink, Maximize2, Code, Rocket } from "lucide-react";
import SectionHeading from "../sectionHeading";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  links: {
    github: string;
    live: string;
  };
  featured: boolean;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Schedura",
    description: "A scheduling platform with Google Calendar integration, dynamic availability management, and Google Meet link generation using Next.js.",
    image: "/schedura.png",
    tech: ["NextJs", "React", "Prisma", "NeonDB", "Zod", "Clerk Auth"],
    links: {
      github: "https://github.com/aviralsharma07/schedura",
      live: "https://schedura.vercel.app/",
    },
    featured: true,
    color: "#4F46E5",
  },
  {
    id: 2,
    title: "Sketchlab",
    description: "A collaborative online whiteboard with real-time sketching, live updates, and responsive design powered by React.js and Socket.io.",
    image: "/sketchlab.png",
    tech: ["Next.js", "React", "Socket.io", "Context API"],
    links: {
      github: "https://github.com/aviralsharma07/sketchlab",
      live: "https://sketchlab.vercel.app/",
    },
    featured: true,
    color: "#06B6D4",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div ref={cardRef} style={{ y, rotate, scale }} className="relative mb-32 last:mb-0">
      <motion.div className="relative grid grid-cols-12 gap-4 items-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }}>
        <div className={`col-span-full left-0 w-full md:col-span-7 relative aspect-video rounded-lg overflow-hidden ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <motion.div
            className="absolute inset-0 z-10"
            style={{
              backgroundColor: project.color,
              opacity: isHovered ? 0 : 0.2,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="relative w-full h-full transform"
            animate={{
              scale: isHovered ? 1.05 : 1,
              rotateY: isHovered ? -5 : 0,
            }}
            transition={{ duration: 0.4 }}
          >
            <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="rounded-lg" />
          </motion.div>
          <motion.div className="absolute inset-0 z-20 flex items-center justify-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.3 }}>
            <motion.a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/80 rounded-full text-white hover:bg-black" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a href={project.links.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/80 rounded-full text-white hover:bg-black" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <ExternalLink className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div className={`col-span-full md:col-span-5 ${index % 2 === 0 ? "order-2 md:pl-8" : "order-1 md:pr-8"}`} initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
          <motion.span className="text-sm font-mono text-blue-400" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} viewport={{ once: true }}>
            Featured Project
          </motion.span>
          <motion.h3 className="text-3xl font-bold mt-2 mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} viewport={{ once: true }}>
            {project.title}
          </motion.h3>
          <motion.div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} viewport={{ once: true }}>
            <p className="text-gray-300">{project.description}</p>
          </motion.div>
          <motion.div className="flex flex-wrap gap-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} viewport={{ once: true }}>
            {project.tech.map((tech, i) => (
              <span key={tech} className="px-3 py-1 text-sm font-mono text-blue-400 border border-blue-400/20 rounded-full">
                {tech}
              </span>
            ))}
          </motion.div>
          <motion.div className="flex gap-5 mt-5">
            <motion.a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-3 border-accent border rounded-full hover:bg-accent hover:text-white text-accent" whileHover={{ scale: 1.25, rotateX: 360, transition: { duration: 0.25, ease: "easeInOut" } }} whileTap={{ scale: 0.9 }}>
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a href={project.links.live} target="_blank" rel="noopener noreferrer" className="p-3 border border-accent rounded-full hover:bg-accent hover:text-white text-accent" whileHover={{ scale: 1.1, rotateX: 180, transition: { duration: 0.25, ease: "easeInOut" } }} whileTap={{ scale: 0.9 }}>
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

interface MinorProject {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

const minorProjects: MinorProject[] = [
  {
    id: 1,
    title: "VidTube",
    description: "VidTube is a dynamic video sharing platform that leverages the power of YouTube's API to engage users with their favorite videos.",
    tech: ["React", "Vite", "Bootstrap", "YouTube API"],
    link: "https://vidtube-avi.netlify.app/",
  },
  {
    id: 2,
    title: "Chatnest",
    description: "A real-time chat application with end-to-end encryption, user authentication, and message history using Firebase and React.",
    tech: ["React", "Firebase", "Zustand"],
    link: "https://github.com/aviralsharma07/react-chat-app",
  },
  {
    id: 3,
    title: "Cineboxd",
    description: "Cineboxd allows users to search for their favorite movies, create personal movie lists (both private and public), and explore public lists created by other users.",
    tech: ["React", "Vite", "Bootstrap"],
    link: "https://cineboxd-eight.vercel.app/",
  },
  {
    id: 4,
    title: "Color Matrix",
    description: "Generates a matrix of random colors based on the user-input and calculates and displays the maximum consecutive cells with the same color in both rows and columns.",
    tech: ["Javascript", "Tailwind"],
    link: "https://colormatrix.netlify.app/",
  },
  {
    id: 5,
    title: "Memeify",
    description: "Memeify is a meme generator application built using React and Vite.",
    tech: ["React", "Vite", "Bootstrap"],
    link: "https://memeify-avi.netlify.app/",
  },
  {
    id: 6,
    title: "Taskease",
    description: "Taskease is a task management application that allows users to create, update, and delete tasks.",
    tech: ["React", "Vite", "Bootstrap"],
    link: "https://task-ease-theta.vercel.app/",
  },
];

const MinorProjectCard = ({ project }: { project: MinorProject }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
      <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.3 }} />
      <div className="p-6 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <Rocket className="w-8 h-8 text-blue-400" />
          <motion.a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <motion.div className="flex flex-wrap gap-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }} transition={{ duration: 0.3 }}>
          {project.tech.map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs font-mono text-blue-300 border border-blue-400/20 rounded-full">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} id="projects" className="min-h-screen relative overflow-hidden">
      <motion.div className="container mx-auto px-4" style={{ y, opacity }}>
        <SectionHeading number="03" heading="Some Things I've Built" />

        <div className="space-y-32 mb-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <div className="flex items-center gap-4 mb-12">
            <motion.span className="text-purple-400 font-mono text-lg" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              03.5
            </motion.span>
            <motion.h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              Other Projects
            </motion.h3>
            <motion.div className="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2 }} />
          </div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>
            {minorProjects.map((project) => (
              <MinorProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
