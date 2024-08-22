import axios from "axios";
import React, { useRef,useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function SignInPage() { 
  
  const loginUser = useRef("");
  const password = useRef("");

  const navigate = useNavigate();
  const dispatch = useDispatch();


  // const [myMail,setMyMail] = useState("");
  const [signVisible ,setSignVisible] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if(loginUser.current.value === "" || password.current.value === ""){
        const errorMessage = document.getElementById("errorFill");
        errorMessage.style.display="block";
      }
      else{
        const newUser = {
          email : loginUser.current.value,
          password : password.current.value
        };
        const response = await axios.post("http://localhost:8000/login",newUser);
        console.log(response.data);
        dispatch(authActions.login());
        localStorage.setItem("id",response.data._id);
        // localStorage.setItem("token",response.data.token);
        // localStorage.setItem("role",response.data.role);
        navigate("/profile");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
    <div className="flex items-center h-screen justify-center bg-[#F5F5F5]">
      <div className="text-center backdrop-opacity-5 max-w-[800px] m-auto rounded-[16px] overflow-hidden p-[20px] shadow-xl z-[9999] bg-[white]">
        <p className="mb-[20px] font-semibold text-3xl text-[orange]">Welcome Back</p>
        <p className="font-medium text-1xl text-[#FF7F3E] text-center m-2 ">Log into your account</p>
        <form id="registrationForm" onSubmit={handleSubmit}>
          <div className="mb-[20px] relative">
            <input
              type="text"
              id="loginUser"
              className="w-[90%] inline p-[10px] pr-[35px] border border-[#cccccc] rounded-[30px] box-border font-semibold text-[14px]"
              ref={loginUser}
              placeholder="Email or Phone Number"
              name="loginUser"
              autoComplete="off"
            />
            <FaUser className="absolute right-[8%] top-1/2 transform -translate-y-1/2 text-[#888] text-[1.2rem]"/>
          </div>

          <div className="mb-[20px] relative">
            <input
              type={signVisible?"password":"text"}
              id="password"
              className="w-[90%] inline p-[10px] pr-[35px] border border-[#cccccc] rounded-[30px] box-border font-semibold text-[14px]"
              name="password"
              ref={password}
              placeholder="Password"
              autoComplete="off"
            />
            <FaEye className={`absolute right-[8%] top-1/2 transform -translate-y-1/2 text-[#888] text-[1.2rem] opacity-${signVisible?0:1} `} onClick={()=>setSignVisible(!signVisible)}/>
            <FaEyeSlash className={`absolute right-[8%] top-1/2 transform -translate-y-1/2 text-[#888] text-[1.2rem] opacity-${signVisible?1:0} `} onClick={()=>setSignVisible(!signVisible)}/>
          </div>
          <div className="flex text-left text[10px] my-[10px] items-center ml-[20px]">
            <input type="checkbox" className="inline cursor-pointer w-[16px] h-[16px] mr-[10px]" id="rememberMe" />
            <label htmlFor="rememberMe" className="inline text-[15px] text-[#686D76]">Remember me</label>
          </div>

            <div id="errorFill" className=" text-[red] hidden mb-1">
              <p>All fields are required.</p>
            </div>

          <button type="submit" className="hover:bg-[#027bfd] w-[90%] p-[10px] bg-[#68b0fd] border-none rounded-[26px] text-[#fff] text-[16px] cursor-pointer">Login</button>
          <Link to="/logIn/forgotPassword" className="pr-[20px] block text-[#FF7F3E] cursor-pointer float-right">Forgot Password?</Link>
          <hr/>
          <p id="error-message" className="text-[red] mt-[25px] opacity-0">
            The username or password you entered is incorrect.
          </p>
        </form>
      </div>
    </div>
    </>
  );
}
