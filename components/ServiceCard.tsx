import { FunctionComponent } from 'react'
import { Service } from "../types";
import {motion} from 'framer-motion'
import { fadeInUp } from '../animations';
const ServiceCard: FunctionComponent<{ service:Service }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };
  return (
    <motion.div
      variants={fadeInUp}
      className='py-4 px-2 bg-slate-50 flex items-center space-x-4 rounded-lg dark:bg-dark-500'>
      <Icon  className='w-12 h-12 max-lg:px-1'/>
      <div className=''>
        <h4  className='font-bold'> {title} </h4>
        <p dangerouslySetInnerHTML={createMarkup()}/> 
      </div>
    </motion.div>
  );
};

export default ServiceCard