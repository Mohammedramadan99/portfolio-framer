import { languages, tools } from '../../data'
import Bar from '../Bar'
import { motion } from 'framer-motion'
import {fadeInUp, routerAnimation} from '../../animations'
function Resume() {
  const variants = {
    initial: { // from 
      opacity: 0,
      y:60
    },
    animate: { // to 
      opacity: 1,
      y:0
    },
  }
  return (
    <motion.div
      variants={routerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-4 py-2 dark:text-white"
    >
      <div className="grid gap-6 md:grid-cols-2 mx-1">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="dark:bg-dark-200 p-5"
        >
          <h5 className="text-xl font-bold capitalize">education</h5>
          <div>
            <h5 className="text-md font-bold capitalize">BA</h5>
            <p className="text-sm font-bold capitalize">Al Azhar University</p>
            <p>
              i graduated from faculty of commerce al azhar University ,
              department of BA with a very good grade
            </p>
          </div>
        </motion.div>
        {/* Experience */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="dark:bg-dark-200 p-5"
        >
          <h5 className="text-xl font-bold capitalize">experience</h5>
          <div>
            <h5 className="text-md font-bold capitalize">BA</h5>
            <p className="text-sm font-bold capitalize">Al Azhar University</p>
            <p>
              i graduated from faculty of commerce al azhar University ,
              department of BA with a very good grade
            </p>
          </div>
        </motion.div>
      </div>
      {/* Languages & Technologies */}
      <div className="my-4 grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold capitalize">
            languages & frameworks
          </h5>
          <div className="my-2">
            {languages?.map((item) => (
              <Bar data={item} key={item.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold capitalize">
            tools & softwares
          </h5>
          <div className="my-2">
            {tools?.map((item) => (
              <Bar data={item} key={item.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume