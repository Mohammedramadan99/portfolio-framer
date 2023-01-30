import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { Project } from "../types";
import { motion } from 'framer-motion'
import Image from "next/image";
import { fadeInUp, stagger } from "../animations";

const ProjectCard: FunctionComponent<{
  project: Project;
  showDetails: null | number;
  setShowDetails: (id:null | number) => void
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
    id
  },
  showDetails,
  setShowDetails
}) => {
  // const [showDetail, setShowDetail] = useState(false);

  return (
    <motion.div variants={fadeInUp} className= {showDetails ? "opacity-0" : ""}>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetails(id)}
        height="150"
        width="300"
      />
      {/* <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetails(true)}
      /> */}
      <p className="my-2 text-center">{name}</p>

    </motion.div>
  );
};

export default ProjectCard;
