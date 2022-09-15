import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { FcDocument } from "react-icons/fc";
import {
  bootstrap,
  css,
  gatsby,
  html,
  js,
  php,
  react,
  strapi,
  word,
} from "./images/index";

const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <BsPeople />,
    cName: "nav-text",
  },
  {
    title: "Document",
    path: "/document",
    icon: <FcDocument />,
    cName: "nav-text",
  },
];

const Languages = [bootstrap,css,html,js,word,php,react,gatsby,strapi];
export { SidebarData, Languages };
