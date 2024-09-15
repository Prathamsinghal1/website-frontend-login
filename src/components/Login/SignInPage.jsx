import axios from "axios";
import React, { useRef,useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import { FaUser, FaEye, FaEyeSlash, FaUserPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../Alert/Alert";
import { IoMdLogIn } from "react-icons/io";

export default function SignInPage() { 
  
  const loginUser = useRef("");
  const password = useRef("");
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState();
  
  const navigate = useNavigate();
  const dispatch = useDispatch();


  // const [myMail,setMyMail] = useState("");
  const [signVisible ,setSignVisible] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if(loginUser.current.value === "" || password.current.value === ""){
        setMessage("All fields are required.");
        setVisible(true);
      }
      else{
        const newUser = {
          email : loginUser.current.value,
          password : password.current.value
        };
        const response = await axios.post("http://localhost:8000/login",newUser);
        console.log(response.data);
        dispatch(authActions.login());
        // localStorage.setItem("id",response.data._id);
        // localStorage.setItem("token",response.data.token);
        // localStorage.setItem("role",response.data.role);
        // navigate("/profile");
      }
    } catch (error) {
      setMessage(error);
      setVisible(true);
    }
  };

  return (
    <>
    {visible && <Alert message={message} type={"success"} visible={visible} setVisible={setVisible}/>}
    <div className="flex items-center h-screen justify-center bg-[#F5F5F5] pt-12 ">
      <div className="text-center backdrop-opacity-5 min-w-[30%] m-auto rounded-[16px] overflow-hidden p-[20px] shadow-xl bg-[white]">
        <p className="mb-[20px] font-extrabold text-3xl text-[var(--title-color)]"><span className="text-[var(--primary-color)]">Welcome</span> Back</p>
        <p className="font-semibold text-1xl text-[var(--text-color)] text-center m-2 ">Log into your account</p>
        <form id="registrationForm" onSubmit={handleSubmit}>
          <div className="mb-[20px] relative">
            <input
              type="text"
              id="loginUser"
              className="w-[90%] inline p-[10px] pr-[35px] border-2 border-[var(--container-color)] rounded-[30px]  font-semibold text-[14px] outline-none transition-all duration-300 ease-linear focus:border-[var(--primary-color)] text-[var(--title-color)]"
              ref={loginUser}
              placeholder="Email or Phone Number"
              name="loginUser"
              autoComplete="off"
            />
            <FaUser className="absolute right-[8%] top-1/2 transform -translate-y-1/2 transition-all ease-linear duration-300 hover:text-[var(--primary-color)] text-[var(--title-color)] text-[1.4rem]"/>
          </div>

          <div className="mb-[20px] relative">
            <input
              type={signVisible?"password":"text"}
              id="password"
              className="w-[90%] inline p-[10px] pr-[35px] border-2 border-[var(--container-color)] rounded-[30px]  font-semibold text-[14px] outline-none transition-all duration-300 ease-linear focus:border-[var(--primary-color)] text-[var(--title-color)]"
              name="password"
              ref={password}
              placeholder="Password"
              autoComplete="off"
            />
            <FaEye className={`absolute right-[8%] top-1/2 transform -translate-y-1/2 transition-all ease-linear duration-300 hover:text-[var(--primary-color)] text-[var(--text-color)] text-[1.4rem] cursor-pointer ${signVisible?"hidden":"visible"} `} onClick={()=>setSignVisible(!signVisible)}/>
            <FaEyeSlash className={`absolute right-[8%] top-1/2 transform -translate-y-1/2 transition-all ease-linear duration-300 hover:text-[var(--primary-color)] text-[var(--title-color)] text-[1.4rem] ${signVisible?"visible":"hidden"} cursor-pointer`} onClick={()=>setSignVisible(!signVisible)}/>
          </div>
          
          <div className="flex text-left text[10px] my-[10px] items-center ml-[20px]">
            <input type="checkbox" className="cursor-pointer w-[16px] h-[16px] mr-[10px] accent-[var(--primary-color)]" id="rememberMe" />
            <label htmlFor="rememberMe" className="inline text-[15px] text-[var(--text-color)] cursor-pointer font-medium">Remember me</label>
          </div>


          <div className='flex flex-col items-center justify-center mb-1'>
              <button type="submit" className={`button w-[80%] cursor-pointer inline-flex text-[var(--title-color)] border border-[var(--primary-color)] items-center py-[15px] pr-[40px] rounded-[35px] font-medium text-sm font-[500] font-sans relative before:content-[''] before:absolute before:inset-0 before:bg-[var(--primary-color)] before:z-[-1] hover:before:translate-x-0 before:translate-x-full before:duration-700 overflow-hidden transition-all  z-[1] hover:text-white justify-center`}>
                Login Now<span className="contact-button-icon button-icon bg-[var(--primary-color)] absolute right-0 h-full text-white w-[50px] rounded-[26px] text-2xl flex items-center justify-center leading-[64px] ">
                <IoMdLogIn />
                </span>
              </button>
          </div>
          <Link to="/logIn/forgotPassword" className="pr-[20px] block font-semibold hover:text-[var(--primary-color)] text-[var(--title-color)] cursor-pointer float-right">Forgot Password?</Link>
          
        </form>
      </div>
    </div>
    </>
  );
}
