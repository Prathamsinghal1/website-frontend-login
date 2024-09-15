import React, { useRef, useState } from 'react'

import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../Alert/Alert';
import { SiMinutemailer } from "react-icons/si";

export default function ForgotPassword() {

  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState();
  const forgotMail = useRef("");
    
  const handleForgotMail = (event) => {
    event.preventDefault();

    if(forgotMail.current.value===""){
      setMessage("All fields are required.");
      setVisible(true);
    }

    // const dashboardCredentials = list.find(
    //   (item) => item.phoneNumber === forgotMail.current.value || item.email === forgotMail.current.value
    // );
    // if (dashboardCredentials) {
    //   errorMessage.style.opacity = 0;
    //   setMyMail(forgotMail.current.value);
    // } else {
      // setMessage("Email not Found. Try Again.");
      // setVisible(true);
    
    // }
    navigate("/logIn/resetPassword");
  };

  return (
    <>
    {visible && <Alert message={message} type={"success"} visible={visible} setVisible={setVisible}/>}
    <div className="flex items-center justify-center bg-[#F5F5F5] h-screen"
      >
        <div className="p-[20px] text-center max-w-[400px] m-auto rounded-[16px] p-[20px] shadow-xl bg-[white]">
          <p className="mb-[15px] font-extrabold text-3xl text-[var(--title-color)]"><span className="text-[var(--primary-color)]">Forgot</span> Password</p>
          <p className="font-semibold text-[var(--text-color)] text-center m-2 mb-[14px] ">Here you can easily retrieve a new password.</p>

          <form id="registrationForm" onSubmit={handleForgotMail}>
            <div className="mb-[20px] relative">
              <input
                type="forgotMail"
                id="forgotMail"
                className="w-[90%] inline p-[10px] pr-[35px] border-2 border-[var(--container-color)] rounded-[30px]  font-semibold text-[14px] outline-none transition-all duration-300 ease-linear focus:border-[var(--primary-color)] text-[var(--title-color)]"
                ref={forgotMail}
                name="forgotMail"
                placeholder="Email or Phone Number"
                autoComplete="off"
              />
              <FaUser className="absolute right-[8%] top-1/2 transform -translate-y-1/2 transition-all ease-linear duration-300 hover:text-[var(--primary-color)] text-[var(--title-color)] text-[1.4rem]" />
            </div>



            <div className='flex flex-col items-center justify-center mb-1'>
              <button type="submit" className={`button w-[80%] cursor-pointer inline-flex text-[var(--title-color)] border border-[var(--primary-color)] items-center py-[14px] pr-[40px] rounded-[35px] font-medium text-sm font-[500] font-sans relative before:content-[''] before:absolute before:inset-0 before:bg-[var(--primary-color)] before:z-[-1] hover:before:translate-x-0 before:translate-x-full before:duration-700 overflow-hidden transition-all  z-[1] hover:text-white justify-center`}>
              Request New Password<span className="contact-button-icon button-icon bg-[var(--primary-color)] absolute right-0 h-full text-white w-[50px] rounded-[26px] text-2xl flex items-center justify-center leading-[64px] ">
              <SiMinutemailer />
                </span>
              </button>
            </div>
          <Link to="/logIn" className="pr-[20px] block font-semibold hover:text-[var(--primary-color)] text-[var(--title-color)] cursor-pointer float-right">Login</Link>
          
          </form>
        </div>
      </div>
      </>
  )
}
