import Link from "next/link"
import { useRouter } from "next/router"
import { FunctionComponent, useEffect, useState } from "react"

const NavItem:FunctionComponent<{
    activeItem: string,
    setActiveItem: Function,
    name: string,
    route: string
  }> = ({activeItem,name,route,setActiveItem}) => {
    return (
      activeItem !== name ? (
        <Link href={route}>
          <span onClick={() => setActiveItem(name)}>{name}</span>
        </Link>
      ):null
    )
  }

function Navbar() {
  const [activeItem, setActiveItem] = useState<string>('')
  const { pathname } = useRouter()
  
  useEffect(() => {
    pathname === '/' && setActiveItem('About')
    pathname === "/projects" && setActiveItem("Projects");
    pathname === "/resume" && setActiveItem("Resume");
  }, [])
  
  return (
    <div className="flex justify-between p-4 dark:text-white">
      <span className="font-bold text-slate-700 border-rose-600 border-b-2 text-lg dark:text-white">
        {" "}
        {activeItem}{" "}
      </span>
      <div className="flex space-x-3 text-slate-600 font-lg dark:text-white">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
}

export default Navbar