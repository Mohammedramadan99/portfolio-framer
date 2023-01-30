import { RiComputerLine } from "react-icons/ri";

import { FaServer } from "react-icons/fa";

import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";

import { MdDeveloperMode } from "react-icons/md";

import { Project, Service, Skill } from "./types";


import { BsCircleFill } from "react-icons/bs";


export const services: Service[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b> <b>React.js</b> and <b>Next.js </b> ",
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> , <b>MongoDB</b>,<b>mongoose</b> ",
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>Node API</b> ",
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>codewars</b> ",
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Adobe XD</b>",
  },
];

export const languages: Skill[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    Icon: BsCircleFill,
    name: "HTML",
    level: "90",
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    Icon: BsCircleFill,
    name: "CSS",
    level: "85",
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    Icon: BsCircleFill,
    name: "Sass",
    level: "94",
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "60",
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    Icon: BsCircleFill,
    name: "Tailwind css",
    level: "60",
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    Icon: BsCircleFill,
    name: "React.js",
    level: "80",
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    Icon: BsCircleFill,
    name: "Next.js",
    level: "70",
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    Icon: BsCircleFill,
    name: "Node.js",
    level: "60",
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    Icon: BsCircleFill,
    name: "MongoDB",
    level: "66",
  },
  
];

export const tools: Skill[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    Icon: BsCircleFill,
    name: "Adobe XD",
    level: "40",
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
];

export const projects: Project[] = [
  { 
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Moz Ecommerce",
    description:[
      "e-commerce website with Dashboard based on Modern design with React Next.js aiming at high code quality & SEO",
      "i used Sass, Material Ui for Tables and carefully created custom components",
      "we have secure payment and wonderful dashboard for Admin that show you how your store is performing in the previous month , the Latest Transactions and more",
      "i used free plan of mongodb plus free plan of vercel so the app will not be in its normal speed",
    ],
    image_path: "/images/Ecommerce.png",
    deployed_url: "https://moz-ecommerce-30w4ikh7q-mohammedramadan99.vercel.app/",
    github_url: "https://github.com/Mohammedramadan99/mozEcommerce",
    category: ["Next.js"],
    key_techs: ["Next.js","Sass", "Material UI","MongoDB","mongoose","Node.js","express.js", "Framer Motion","swiber","stripe"],
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "social media",
    image_path: "/images/social_media.png",
    deployed_url: "https://mozsocialmedianext13-l2vw7dow6-mohammedramadan99.vercel.app/",
    github_url: "https://github.com/Mohammedramadan99/mozsocialmedianext13",
    category: ["Next.js"],
    description:[
      "Social media website with Modern interactive design with React Next.js aiming at high code quality & SEO.",
      "you have the ability to post and interact with others, add comments, follow and more",
    ],
    key_techs: ["Next.js","Sass","MongoDB", "mongoose","Node.js","express.js"],
  },

];
