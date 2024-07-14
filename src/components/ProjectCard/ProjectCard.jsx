import React from 'react';
import './ProjectCard.css'; 
import Project1 from '../../assets/Project1.png'; 
import Project2 from '../../assets/Project2.png';
import Project3 from '../../assets/Project3.png';
import Project4 from '../../assets/Project4.png';
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { AiFillOpenAI } from "react-icons/ai";
import { FaPython } from "react-icons/fa";
import { SiOpencv } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { CplusplusPlain } from 'devicons-react';

const projects = [
  {
    image: Project1,
    title: 'Notellect',
    date: 'May \'24',
    description: 'an AI-powered note-taking app in NextJs with OpenAI and Dalle integration.',
    technologies: [
      { icon: <RiNextjsFill size="2em" color="white"/>, name: 'Next.js' },
      { icon: <FaReact size="2em" color='white'/>, name: 'React' },
      { icon: <RiTailwindCssFill size="2em" color="white"/>, name: 'Tailwind' },
      { icon: <IoLogoFirebase size="2em" color="white"/>, name: 'Firebase' },
      { icon: <AiFillOpenAI size="2em" color="white"/>, name: 'OpenAI' },
    ],
  },
  {
    image: Project2,
    title: 'Computer Vision AI Fitness Trainer',
    date: 'March \'24',
    description: 'A fitness trainer that uses computer vision to track your movement.',
    style: { width: '150px', height: '150px' },
    technologies: [
      { icon: <FaPython size="2em" color="white"/>, name: 'Python' },
      { icon: <FaReact size="2em" color="white"/>, name: 'React' },
      { icon: <SiOpencv size="2em" color="white"/>, name: 'OpenCv' },
    ],
  },
  {
    image: Project3,
    title: 'Portfolio Website',
    date: 'January \'24-present',
    description: 'Modern portfolio website that showcases my projects and skills.',
    technologies: [
        { icon: <FaReact size="2em" color='white'/>, name: 'React' },
        { icon: <RiTailwindCssFill size="2em" color="white"/>, name: 'Tailwind' },
      { icon: <IoLogoJavascript size="2em" color="white"/>, name: 'TypeScript' },
    ],
  },

  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s',
    title: 'Multi-threaded Rate Monotonic Scheduling',
    date: 'May \'24',
    description: 'Implemented a multithreaded Rate Monotonic Scheduling Algorithm in C++ using POSIX Thread',
    technologies: [
      { icon: <CplusplusPlain size="2em" color='white'/>, name: 'C++' },
    ],
  },
  {
    image: Project4,
    title: 'Tamagotchi Pet Game',
    date: 'April \'23',
    description: 'a virtual pet care game in C++ with a dynamic game loop and real-time state management.',
    technologies: [
      { icon: <CplusplusPlain size="2em" color='white'/>, name: 'C++' },
    ],
  },
 
];

const ProjectCard = () => {
    return (
      <div>
        <h2 className="project-heading">Coding Projects</h2>
        <span className="project-subtitle">My recent projects</span>
        <div className="project-cards">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-date">{project.date}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-icon">
                    {typeof tech.icon === 'string' ? <img src={tech.icon} alt={tech.name} /> : tech.icon}
                  </span>))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default ProjectCard;
