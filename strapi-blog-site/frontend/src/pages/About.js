import React from "react";
import { Link } from "react-router-dom";
import { Languages } from "../constants";
import linkdn from "../images/linkdn.svg";
import mySql from "../images/mysql.svg";

function About() {
  return (
    <div>
      <div className="cursor-pointer shadow-xl p-7 bg-white mt-9 text-white w-[57vw] m-auto rounded-lg ">
        <h2 className="opacity-75 mb-5  font-normal leading-snug text-slate-700 text-xl ">
          I am Nivya K Peter
        </h2>
        <div>
          <h3 className="font-bold text-slate-700 text-base leading-snug mb-4 ">
            🔭 I’m currently working at [Vonnue]
          </h3>
          <div className="flex flex-row">
            <div className="text-slate-700 text-base leading-normal font-normal">
              <p>💬 “Learning to code is learning to create and innovate.”</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cursor-pointer h-[max-content] shadow-xl p-7 bg-white mt-9 text-white w-[57vw] m-auto rounded-lg ">
        <div className="opacity-75 mb-5  font-normal leading-snug text-slate-700 text-xl ">
          <p>Let's Connect</p>
          <Link 
            to='/linkdn'
          >
            <img className="mt-4" src={linkdn} alt="image" />
          </Link>
        </div>
        <div className="opacity-75 mb-5  font-normal leading-snug text-slate-700 text-xl flex flex-col">
          <div className="flex flex-row gap-1">
            <p>Languages</p>
            <img
              src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif"
              width="30"
            ></img>
          </div>
          <div className="flex flex-row items-center gap-3 ">
            {Languages.map((Language) => {
              return (
                <a href="#">
                  <img className="mt-4" src={Language} alt="image" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="opacity-75 mb-5  font-normal leading-snug text-slate-700 text-xl  flex flex-col">
          <div className="flex flex-row gap-1">
            <p>Databases</p>
            <img
              src="https://media.giphy.com/media/qHzzDO357GwCBpn8uT/giphy.gif"
              width="30"
            ></img>
          </div>
          <div className="flex flex-row items-center gap-3 ">
            <a href="#">
              <img className="mt-4" src={mySql} alt="image" />
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default About;
