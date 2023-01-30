import dynamic from "next/dynamic";
import { useState } from "react";
const ProjectsNavbar = dynamic(() => import("../components/ProjectsNavbar"), {
  ssr: false,
});
const ProjectCard = dynamic(() => import("../components/ProjectCard"), {
  ssr: false,
});

import { projects as projectsData } from "../data";
import { Category } from "../types";
import { motion } from 'framer-motion'
import { fadeInUp, routerAnimation, stagger } from '../animations'
import { MdClose } from "react-icons/md";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import Image from "next/image";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [showDetails,setShowDetails] = useState<number | null>(null)
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div
      variants={routerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className=" px-5 py-2 overflow-y-scroll"
      style={{ height: "65vh" }}
    >
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
          >
            <ProjectCard
              project={project}
              key={project.id}
              showDetails={showDetails}
              setShowDetails={setShowDetails}
            />
            {showDetails === project.id && (
        <motion.div variants={stagger} initial="initial" animate="animate" className="absolute z-50 top-0 left-0 grid w-full h-auto p-2 text-black bg-slate-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          
            <motion.div variants={fadeInUp}>
              {/* <img src={project.image_path} alt={name} /> */}

              <Image src={project.image_path} alt={project.name} height="150" width="300" />
              <div className="flex justify-center my-4 space-x-3">
                <a
                  href={project.github_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillGithub /> <span>Github</span>
                </a>
                <a
                  href={project.deployed_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillProject /> <span>Project</span>
                </a>
              </div>
            </motion.div>

            <motion.div variants={stagger} initial="initial" animate="animate">
              <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-medium md:text-2xl">{project.name}</motion.h2>
              <motion.h3 variants={fadeInUp} className="mb-3 font-medium">{project.description}</motion.h3>

              <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                {project.key_techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <button
              onClick={() => setShowDetails(null)}
              className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
            >
              <MdClose size={30} />
            </button>
          
        </motion.div>
      )}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
