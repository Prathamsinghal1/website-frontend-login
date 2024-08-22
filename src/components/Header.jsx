import React from "react";
import { CiHome } from "react-icons/ci";
import { IoIosInformationCircleOutline, IoIosHelpBuoy } from "react-icons/io";
import { LuContact2 } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { GiArchiveRegister } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header({val, setVal}) {
  const lists = [
    {
      name: "Home",
      icon: <CiHome />,
      click: "/"
    },
    {
      name: "About",
      icon: <IoIosInformationCircleOutline />,
      click: "/about-us"
    },
    {
      name: "Contact",
      icon: <LuContact2 />,
      click: "/"
    },
    {
      name: "Help",
      icon: <IoIosHelpBuoy />,
      click: "/help"
    },
    {
      name: "Sign In",
      icon: <CiUser />,
      click: "/logIn"
    },
    {
      name: "Register",
      icon: <GiArchiveRegister />,
      click: "/signUp"
    },
  ];

  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);

  if(isLoggedIn){
    lists.splice(4, 2);
  }
  console.log(isLoggedIn);

  return (
    <header className="shadow-xl text-[#686b78] sticky top-0 bg-white z-[999999999]">
      <div className="flex max-w-[1200] mx-auto my-0 p-2 items-center">
        <div className="w-[60px] m-0">
          <img src="./Images/img.png" className="w-full p-0 m-0" alt="" />
        </div>
        <div className="text-[grey] font-bold text-[24px]">WebsiteName</div>
        <div className="flex list-none gap-10 ml-auto text-[16px] font-semibold mr-[20px] items-center">
          {lists.map((list, index) => {
            return (<div key={index} >
              { list.name === "Home" && <Link to={list.click} onClick={()=>setVal(false)} className="flex hover:text-[red] items-center gap-2 cursor-pointer">
                {list.icon}
                {list.name}
              </Link>
              }
              { list.name !== "Contact" && list.name !== "Home" && <Link to={list.click} className="flex hover:text-[red] items-center gap-2 cursor-pointer">
                {list.icon}
                {list.name}
              </Link>
              }
              { list.name === "Contact" && <Link to={list.click} onClick={()=>setVal(true)} className="flex hover:text-[red] items-center gap-2 cursor-pointer">
                {list.icon}
                {list.name}
              </Link>
              }
              </div>
            );
          })}
          {!isLoggedIn && <Link to="/profile" className="hover:bg-[#027bfd] w-[90%] p-[10px] bg-[#68b0fd] border-none rounded-[13px] hover:text-red-500 text-[#fff] text-[16px] cursor-pointer font-semibold">Profile</Link>}
        </div>
      </div>
    </header>
  );
}
