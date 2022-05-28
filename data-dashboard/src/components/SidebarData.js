import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaCartPlus, FaEnvelopeOpenText } from "react-icons/fa";
import {IoIosPaper, IoMdArrowDropdown, IoMdHelpCircle, IoMdPeople} from "react-icons/io";



export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon:<AiFillHome />,
        dropIcon:<IoMdArrowDropdown />,
        cName: 'nav-text',

        subNav: [
            {
                title:"Users",
                path:"/home/users",
                icon:<IoIosPaper />
            },
            {
                title:"Revenue",
                path:"/home/revenue",
                icon:<IoIosPaper />
            },

        ]

    },
    {
        title: "Reports",
        path: "/reports",
        icon:<IoIosPaper />,
        dropIcon:<IoMdArrowDropdown />,
        cName: 'nav-text'
    },
    {
        title: "Products",
        path: "/products",
        icon:<FaCartPlus />,
        cName: 'nav-text'
    },{
        title: "Team",
        path: "/team",
        icon:<IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: "Messages",
        path: "/messages",
        icon:<FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: "Support",
        path: "/support",
        icon:<IoMdHelpCircle />,
        cName: 'nav-text'
    }

]