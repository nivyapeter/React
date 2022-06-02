import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaCartPlus, FaEnvelopeOpenText } from "react-icons/fa";
import {IoIosPaper, IoMdArrowDropdown, IoMdArrowDropup, IoMdHelpCircle} from "react-icons/io";
import { MdRateReview } from "react-icons/md";
import { BiCategory } from "react-icons/bi";



export const SidebarData = [
    {
        title: "Restaurants",
        path: "/",
        icon:<AiFillHome />,
        iconClosed:<IoMdArrowDropdown />,
        iconOpened: <IoMdArrowDropup />,
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
        title: "Category",
        path: "/category/",
        icon:<BiCategory />,
        dropIcon:<IoMdArrowDropdown />,
        cName: 'nav-text'
    },
    {
        title: "Review Details",
        path: "/datails",
        icon:<MdRateReview/>,
        cName: 'nav-text'
    },
    {
        title: "Products",
        path: "/products",
        icon:<FaCartPlus /> ,
        cName: 'nav-text'
    },
    {
        title: "Support",
        path: "/support",
        icon:<IoMdHelpCircle />,
        cName: 'nav-text'
    }

]