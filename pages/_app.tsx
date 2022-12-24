import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { ThemeProvider } from 'next-themes';
import {AnimatePresence} from 'framer-motion'
import Layout from '../components/Layout';
export default function App({ Component, pageProps,router }: AppProps) {
  return (
    <Layout link={router.route}> 
      <ThemeProvider attribute="class">
          <div className="grid grid-cols-12 gap-10 px-5 lg:px-20 sm:px-5 md:px-14 my-14 ">
            <div className="lg:col-span-3 bg-white rounded-2xl col-span-12 h-full dark:bg-gradient-to-t dark:bg-dark-100 shadow-custom-light dark:shadow-custom-dark">
              <Sidebar />
            </div>
            <div className="flex flex-col lg:col-span-9 bg-white rounded-2xl col-span-12 dark:bg-gradient-to-t dark:bg-dark-100 shadow-custom-light dark:shadow-custom-dark">
              <Navbar />
              <AnimatePresence mode="wait">
                <Component {...pageProps} key={router.route} />
              </AnimatePresence>
            </div>
          </div>
      </ThemeProvider>
    </Layout> 
  );
}
