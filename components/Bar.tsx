import { FunctionComponent } from "react"
import { Skill } from "../types"
import {motion} from 'framer-motion'
const Bar: FunctionComponent<{
  data:Skill
}> = ({ data: { Icon, name, level } }) => {
  const bar_width = `${level}%`
  const variants = {
    initial: {
      width: 0,
      opacity: 0,

    },
    animate: {
      width: bar_width,
      opacity: 1,
      transition: {
        duration: 0.4,
        // to make the transition smooth from left to right before stopping
        type: "spring", // #1
        damping: 10, // #2
        stiffness: 100, // #3
      },
    },
  };
  return (
    <div className="my-4 rounded-full bg-slate-200 dark:bg-dark-200">
      <motion.div
        className="flex space-x-2 items-center my-2 px-4 py-1 rounded-full bg-gradient-to-r from-red-700 to-red-900 text-white overflow-hidden"
        style={{ width: `${level}%`,opacity:1 }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="" />
        <div>
          {name}
        </div>
      </motion.div>
    </div>
  )
}

export default Bar