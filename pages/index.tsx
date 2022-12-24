import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import ServiceCard from '../components/ServiceCard'
import {services} from '../data'
// const inter = Inter({ subsets: ['latin'] })
import { routerAnimation, stagger } from "../animations";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <>
      <motion.div variants={routerAnimation} initial="initial" animate="animate" exit='exit' className="flex flex-col flex-grow pt-1 rounded-2xl dark:text-white dark:bg-gradient-to-t dark:bg-dark-100 overflow-hidden">
        <h5 className="p-4 drop-shadow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, sunt laudantium. Beatae animi eveniet blanditiis
          perspiciatis totam quasi numquam veniam necessitatibus excepturi ut
          quod eligendi, similique enim iure vel fugiat.{" "}
        </h5>
        <div className="p-4 bg-slate-200 dark:bg-transparent flex-grow">
          <h6 className="text-lg my-3 font-bold capitalize">what i offer</h6>
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid gap-6 lg:grid-cols-2"
          >
            {services?.map((serv, i) => (
              <ServiceCard key={i} service={serv} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
//   const origin =
//     typeof window !== "undefined" && window.location.origin
//       ? window.location.origin
//       : "";
//   const url = `http://localhost:3000/api/services`;
//   // const url = `${origin}/api/services`
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log("SERVER", data);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// }
// 1:9:00