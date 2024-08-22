import React, { useRef, useState } from 'react'
import { FaLock, FaCaretDown } from "react-icons/fa";
import { BiSolidCircle } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {

    
  const resetPassword = useRef("");
  const resetConfirmPassword = useRef("");

  const [valueList,setValueList] = useState([
    {
      value:true,
      name: "At least 8 characters length"
    },
    {
      value:true,
      name: "At least 1 number (0...9)"
    },
    {
      value:true,
      name: "At least 1 lowercase letter (a...z)"
    },
    {
      value:true,
      name: "At least 1 special symbol (!...$)"
    },
    {
      value:true,
      name: "At least 1 uppercase letter (A...Z)"
    }
  ]);

  const handlePassword = (e) => {
    const requirements = [
      { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
      { regex: /[0-9]/, index: 1 }, // At least one number
      { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
      { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
      { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter
    ];

    // Map over the current valueList to create a new array based on the password input
    const newValueList = valueList.map((item, idx) => {
        const requirement = requirements.find(req => req.index === idx);
        if (requirement) {
            const isValid = requirement.regex.test(e.target.value);
            return { ...item, value: !isValid };  // Update the value property based on the regex test result
        }
        return item; // Return unchanged item if not matched
    });

    setValueList(newValueList); // Update the state with the new array
  };

  const navigate = useNavigate();

  const handleReset = (event) => {
    event.preventDefault();
    const errorReset = document.getElementById("errorReset");
    const validPassword = document.getElementById("validPassword");
    const createdList = valueList.filter((item)=>item.value===false);
    if(createdList.length!==5){
      validPassword.style.opacity = 1;
    }
    else if (resetPassword.current.value !== resetConfirmPassword.current.value) {
      errorReset.style.opacity = 1;
      validPassword.style.opacity = 0;
    } 
    else {
      const updateList = list.find(
        (item) => (item.phoneNumber === myMail || item.email === myMail)
      )
      updateList.password=resetPassword.current.value;
      setList(list.filter(item => (item.phoneNumber !== myMail && item.email !== myMail)));
      setList([...list, updateList]);
      resetPassword.current.value="";
      resetConfirmPassword.current.value="";
      navigate("/logIn");
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#F5F5F5] h-[500px]"
        >
          <div className="p-[20px] text-center max-w-[400px] m-auto rounded-[16px] p-[20px] shadow-xl bg-[white]">
            <p className="mb-[20px] font-semibold text-3xl text-[orange]">Reset account password</p>
            <p className="font-medium text-1xl text-[grey] text-center m-[14px]">Enter a new password</p>
  
            <form id="registrationForm" onSubmit={handleReset}>
              <div className="">
                <div className="relative">
                  <input
                    type="password"
                    id="resetPassword"
                    name="resetPassword"
                    onChange={handlePassword}
                    ref={resetPassword}
                    className="w-[90%] inline p-[10px] pr-[35px] border border-[#cccccc] rounded-[30px] box-border font-semibold text-[14px]"
                    placeholder="Password"
                    // required
                    autoComplete="off"
                  />
                  <FaLock className="absolute right-[8%] top-1/2 transform -translate-y-1/2 text-[#888] text-[1.2rem]"/>
                </div>
  
                <p id="validPassword" className="font-[poppins] mt-1 text-[13px] float-right mr-4 text-[red] opacity-0">Enter Valid Password!</p>
  
                <div className="group m-1 w-[30px] hover:w-[100%] ">
                  <FaCaretDown className="ml-4 w-[30px] cursor-pointer"/>
                  <div className="mt-[6px] shadow-xl hidden group-hover:block hover:block rounded-[10px] opacity:0 text-[#758694]">
                    <p className="text-left ml-2 text-[14px]">Password must contains</p>
                    {valueList.map((item,index) => {
                      return (
                        <div key={index} className="flex items-center ml-2 text-[14px]">
                          <BiSolidCircle className={`absolute text-[#aaa] font-bold text-[8px] p-0 ${!item.value?"invisible":"visible"}`}/>
                          <TiTick className={`absolute text-[#4285F4] font-bold text-[15px] p-0 ${item.value?"invisible":"visible"}`}/>
                          <p className={`ml-4 text-[${item.value?"":"black"}]`}> {item.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
  
              <div className="mb-[14px] relative">
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  ref={resetConfirmPassword}
                  className="w-[90%] inline p-[10px] pr-[35px] border border-[#cccccc] rounded-[30px] box-border font-semibold text-[14px]"
                  placeholder="Confirm Password"
                //   required
                  autoComplete="off"
                />
                <FaLock className="absolute right-[8%] top-1/2 transform -translate-y-1/2 text-[#888] text-[1.2rem]"/>
              </div>
              
              <button className="block text-[#FF7F3E] cursor-pointer float-right pr-[20px]" >
                
              </button>
              <button type="submit" className="hover:bg-[#027bfd] w-[90%] p-[10px] bg-[#68b0fd] border-none rounded-[26px] text-[#fff] text-[16px] cursor-pointer">Reset Password</button>
              <p id="errorReset" className="text-[red] mt-[5px] opacity-0">
                Passwords do not match. Try Again.
              </p>
            </form>
          </div>
        </div>
  )
}
