import React, { useRef, useState } from 'react'
import { FaLock, FaCaretDown, FaEye, FaEyeSlash } from "react-icons/fa";
import { BiSolidCircle } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import Alert from '../Alert/Alert';
import { MdLockReset } from "react-icons/md";

export default function ResetPassword() {

  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState();
  const resetPassword = useRef("");
  const resetConfirmPassword = useRef("");
  const [signVisible ,setSignVisible] = useState(true);

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
    const createdList = valueList.filter((item)=>item.value===false);
    if(resetPassword.current.value === "" || resetConfirmPassword.current.value === ""){
      setMessage("All fields are required.");
      setVisible(true);
    }
    else if(createdList.length!==5){
      setMessage("Enter Valid Password!");
      setVisible(true);
    }
    else if (resetPassword.current.value !== resetConfirmPassword.current.value) {
      setMessage("Passwords do not match. Try Again.");
      setVisible(true);
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
    <>
    {visible && <Alert message={message} type={"success"} visible={visible} setVisible={setVisible}/>}
    <div className="flex items-center justify-center bg-[#F5F5F5] min-h-[100vh] pt-14 pb-7"
        >
          <div className="mt-12 lg:my-auto p-[20px] text-center max-w-[400px] m-auto rounded-[16px] p-[20px] shadow-xl bg-[white]">
            <p className="mb-[10px] font-extrabold text-3xl text-[var(--title-color)]"><span className="text-[var(--primary-color)]">Reset</span> account password</p>
            <p className="font-semibold text-[var(--text-color)] text-center m-2 mb-[14px] ">Enter a new password</p>
  
            <form id="registrationForm" onSubmit={handleReset}>
              <div className="">
                <div className="relative">
                  <input
                    type="password"
                    id="resetPassword"
                    name="resetPassword"
                    onChange={handlePassword}
                    ref={resetPassword}
                    className="w-[90%] inline p-[10px] pr-[35px] border-2 border-[var(--container-color)] rounded-[30px]  font-semibold text-[14px] outline-none transition-all duration-300 ease-linear focus:border-[var(--primary-color)] text-[var(--title-color)]"
                    placeholder="Password"
                    // required
                    autoComplete="off"
                  />
                  <FaLock className="absolute right-[8%] top-1/2 transform -translate-y-1/2 transition-all ease-linear duration-300 hover:text-[var(--primary-color)] text-[var(--title-color)] text-[1.4rem]"/>
                </div>
  
                <div className="py-2 px-5">
                  <div className="mt-[6px] rounded-[10px] text-[#758694]">
                    <p className="text-left ml-2 text-[14px]">Password must contains</p>
                    {valueList.map((item,index) => {
                      return (
                        <div key={index} className="flex items-center ml-2 text-[14px]">
                          <BiSolidCircle className={`absolute text-[#aaa] font-bold text-[8px] p-0 ${!item.value?"invisible":"visible"}`}/>
                          <TiTick className={`absolute text-[var(--primary-color)] font-bold text-[15px] p-0 ${item.value?"invisible":"visible"}`}/>
                          <p className={`ml-4 text-[${item.value?"var(--text-color)":"var(--title-color)"}]`}> {item.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
  
              <div className="mb-[14px] relative">
                <input
                  type={signVisible?"password":"text"}
                  id="confirm-password"
                  name="confirm-password"
                  ref={resetConfirmPassword}
                  className="w-[90%] inline p-[10px] pr-[35px] border-2 border-[var(--container-color)] rounded-[30px]  font-semibold text-[14px] outline-none transition-all duration-300 ease-linear focus:border-[var(--primary-color)] text-[var(--title-color)]"
                  placeholder="Confirm Password"
                  autoComplete="off"
                />
                <FaEye className={`absolute right-[8%] top-1/2 transform -translate-y-1/2 transition-all ease-linear duration-300 hover:text-[var(--primary-color)] text-[var(--text-color)] text-[1.4rem] cursor-pointer ${signVisible?"hidden":"visible"} `} onClick={()=>setSignVisible(!signVisible)}/>
                <FaEyeSlash className={`absolute right-[8%] top-1/2 transform -translate-y-1/2 transition-all ease-linear duration-300 hover:text-[var(--primary-color)] text-[var(--title-color)] text-[1.4rem] ${signVisible?"visible":"hidden"} cursor-pointer`} onClick={()=>setSignVisible(!signVisible)}/>
              </div>
              
              <div className='flex flex-col items-center justify-center mb-1'>
                <button type="submit" className={`button w-[80%] cursor-pointer inline-flex text-[var(--title-color)] border border-[var(--primary-color)] items-center py-[14px] pr-[40px] rounded-[35px] font-medium text-sm font-[500] font-sans relative before:content-[''] before:absolute before:inset-0 before:bg-[var(--primary-color)] before:z-[-1] hover:before:translate-x-0 before:translate-x-full before:duration-700 overflow-hidden transition-all  z-[1] hover:text-white justify-center`}>
                Reset Password<span className="contact-button-icon button-icon bg-[var(--primary-color)] absolute right-0 h-full text-white w-[50px] rounded-[26px] text-2xl flex items-center justify-center leading-[64px] ">
                <MdLockReset />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}
