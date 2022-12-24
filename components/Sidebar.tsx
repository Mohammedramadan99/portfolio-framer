import Image from "next/image"
import me from '../public/images/me.jpg'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GiTie } from "react-icons/gi";
import {GoLocation} from 'react-icons/go'
import Link from "next/link";
import { useTheme } from 'next-themes'
import { MdDarkMode,MdLightMode } from "react-icons/md";
import CV from "../public/images/color.jpg";

function Sidebar() {
  const { theme, setTheme } = useTheme()
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <div>
      <div className="relative w-24 h-24 mt-5 rounded-full overflow-hidden shadow-lg mx-auto">
        <Image
          src={me}
          fill={true}
          alt="personalImg"
          style={{ objectFit: "contain" }}
        />
      </div>
      <h3 className="my-4 text-3xl font-medium capitalize text-center tracking-wider text-red-600 dark:text-red-600">
        mohammed ramadan
      </h3>
      <p className="bg-slate-200 m-5 p-2 rounded-full capitalize text-center dark:bg-dark-100 dark:text-white">
        web developer
      </p>
      <Link
        href="/images/color.jpg"
        download="color.jpg"
        className="flex items-center justify-center bg-slate-200 m-5 p-2 rounded-full capitalize text-center dark:bg-dark-100 dark:text-white"
      >
        <GiTie className="w-6 h-6" /> resume
      </Link>
      {/*  //social icon  */}
      <div className="flex justify-around items-center ">
        <Link href="#" aria-label="Github">
          <AiFillGithub className="w-8 h-8 text-red-600" />
        </Link>
        <Link href="#" aria-label="Linkedin">
          <AiFillLinkedin className="w-8 h-8 text-red-600" />
        </Link>
      </div>
      {/*  //address  */}
      <div>
        <div className="flex items-center justify-center flex-col my-5 p-5 bg-slate-200 dark:bg-dark-100 dark:text-white">
          <span className="flex justify-center items-center capitalize space-x-2">
            <GoLocation />
            <span>cairo, egypt</span>
          </span>
          <p className="my-4 text-sm">ramadanmohammed502@gmail.com</p>
          <p>+201121090068</p>
        </div>
        {/* btns */}
        <div className="flex items-center justify-center flex-col my-5 gap-y-2">
          <button
            className="bg-gradient-to-r from-red-600 to-red-900 py-1 px-3 w-8/12 font-medium capitalize text-white rounded-full shadow-xl focus:outline-none"
            onClick={() => window.open("mailto:ramadanmohammed502@gmail.com")}
          >
            {" "}
            email me{" "}
          </button>
          <button
            className="bg-gradient-to-r from-red-600 to-red-900 py-1 px-3  font-medium  text-white rounded-full shadow-xl focus:outline-none flex justify-center items-center"
            onClick={changeTheme}
          >
            <div className="mx-2">
              <MdDarkMode />
            </div>
            --
            <div className="mx-2">
              <MdLightMode />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar