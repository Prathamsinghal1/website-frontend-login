import React, { useState } from 'react';
import { CiHome } from "react-icons/ci";
import { IoIosInformationCircleOutline, IoIosHelpBuoy } from "react-icons/io";
import { LuContact2 } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import '../../App.css';

export default function Header() {

  const [open, setOpen] = useState(false);

  const lists = [
    {
      id: 1,
      name: "Home",
      icon: <CiHome />,
      path: "/"
    },
    {
      id: 2,
      name: "About",
      icon: <IoIosInformationCircleOutline />,
      path: "/about-us"
    },
    {
      id: 3,
      name: "Contact",
      icon: <LuContact2 />,
      path: "/contact"
    },
    {
      id: 4,
      name: "Help",
      icon: <IoIosHelpBuoy />,
      path: "/help"
    },
    {
      id: 5,
      name: "Sign In",
      icon: <CiUser />,
      path: "/logIn"
    },
    {
      id: 6,
      name: "Register",
      icon: <GiArchiveRegister />,
      path: "/signUp"
    },
    {
      id: 7,
      name: "Profile",
      icon: <FaUser />,
      path: "/profile"
    },
  ];

  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);

  if(isLoggedIn){
    lists.splice(4, 2);
  }
  if(!isLoggedIn){
    lists.splice(3, 1);
    lists.splice(5, 1);
  }
  console.log(isLoggedIn);

  return (<>
      <div className="fixed bg-[white] w-screen py-[12px] pl-[10px] z-[99]">
        <div className="flex items-center">
          <img src="./Images/img.png" className="w-[60px]" alt="" />
          <h1 className="text-[var(--text-color)] font-bold text-[24px] ">WebsiteName</h1>
        </div>
      </div>
    
    <nav className="lg:fixed lg:right-[30px] lg:flex lg:items-center lg:h-full z-[99]">
    <div 
      className={`fixed inset-0 w-full px-[30px] py-[60px] bg-[var(--container-color)] lg:[all:unset] transition-all duration-700 ${open ? "left-0" : "left-[-100%]"} z-[9999]`} 
      style={{ transition: "all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1)" }}
    >
      <ul className="nav-list ">
        {lists.map((item, index) => {
          return (
            <li className="nav-item lg:m-[20px]" key={index}>
              <Link
                to={item.path}
                className="nav-link cursor-pointer group flex gap-[24px] items-center p-[14px] text-[var(--title-color)] focus:text-[var(--primary-color)] lg:p-0 lg:bg-[var(--container-color)] lg:w-[50px] lg:h-[50px] lg:rounded-[50%] lg:relative lg:hover:bg-[var(--primary-color)] lg:focus:bg-[var(--primary-color)] lg:hover:text-white lg:focus:text-white lg:hover:rounded-l-lg transition-all"
                onClick={() => setOpen(!open)}
              >
                <div className="nav-icons lg:text-[20px] lg:m-auto z-[9999]">
                  {item.icon}
                </div>
                <h3 className="nav-name font-[24px] font-medium lg:absolute lg:top-0 lg:right-0 lg:bg-[var(--primary-color)] lg:h-full lg:px-[25px] lg:rounded-[30px] lg:flex lg:items-center lg:text-sm lg:text-white lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300 mr-[20px]">
                  <p className='whitespace-nowrap'>{item.name}</p>
                </h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  
    {/* Mobile Menu Icon */}
    <div 
      className="fixed top-[10px] right-[30px] w-[40px] h-[40px] bg-[var(--container-color)] rounded py-[12px] px-[10px] lg:hidden z-[9999]" 
      onClick={() => setOpen(!open)}
    >
      <span className={`block w-[20px] h-[2px] rounded-[2px] bg-[var(--title-color)] mb-[5px] transition-transform ${open ? "rotate-[45deg] translate-x-[1px] translate-y-[7px]" : ""}`}></span>
      <span className={`block w-[20px] h-[2px] rounded-[2px] bg-[var(--title-color)] mb-[5px] transition-opacity ${open ? "hidden" : ""}`}></span>
      <span className={`block w-[20px] h-[2px] rounded-[2px] bg-[var(--title-color)] mb-[5px] transition-transform ${open ? "rotate-[-45deg]" : ""}`}></span>
    </div>
  </nav></>
  );
}
    