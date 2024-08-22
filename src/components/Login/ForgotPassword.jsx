import React, { useRef } from 'react'

import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

export default function ForgotPassword() {

    const navigate = useNavigate();

    
  const forgotMail = useRef("");
    
  const handleForgotMail = (event) => {
    event.preventDefault();
    const errorMessage = document.getElementById("errorForgot");

    // const dashboardCredentials = list.find(
    //   (item) => item.phoneNumber === forgotMail.current.value || item.email === forgotMail.current.value
    // );
    // if (dashboardCredentials) {
    //   errorMessage.style.opacity = 0;
    //   setMyMail(forgotMail.current.value);
    // } else {
      errorMessage.style.opacity = 1;
    // }
    navigate("/logIn/resetPassword");
  };

  return (
    <div className="flex items-center justify-center bg-[#F5F5F5] h-screen"
      >
        <div className="p-[20px] text-center max-w-[400px] m-auto rounded-[16px] p-[20px] shadow-xl bg-[white]">
          <p className="mb-[20px] font-semibold text-3xl text-[orange]">Forgot Password</p>
          <p className="font-medium text-1xl text-[grey] text-center m-[14px]">Here you can easily retrieve a new password.</p>

          <form id="registrationForm" onSubmit={handleForgotMail}>
            <div className="mb-[20px] relative">
              <input
                type="forgotMail"
                id="forgotMail"
                className="w-[90%] inline p-[10px] pr-[35px] border border-[#cccccc] rounded-[30px] box-border font-semibold text-[14px]"
                ref={forgotMail}
                name="forgotMail"
                placeholder="Email or Phone Number"
                autoComplete="off"
              />
              <FaUser className="absolute right-[8%] top-1/2 transform -translate-y-1/2 text-[#888] text-[1.2rem]" />
            </div>

            <p id="errorForgot" className="text-[red] mt-[5px] opacity-0">
              Email not Found. Try Again.
            </p>

            <button type="submit" className="hover:bg-[#027bfd] w-[90%] p-[10px] bg-[#68b0fd] border-none rounded-[26px] text-[#fff] text-[16px] cursor-pointer}">
              Request New Password
            </button>
            <Link to="/logIn" className="block text-[#FF7F3E] cursor-pointer float-right pr-[20px]">
              Login
            </Link>
          </form>
        </div>
      </div>
  )
}
