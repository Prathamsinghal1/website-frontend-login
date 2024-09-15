import React, { useRef, useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaCaretDown, FaEye, FaEyeSlash, FaUserPlus } from "react-icons/fa";
import { BiSolidCircle } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "../Alert/Alert";

export default function Register() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState();
  const [val, setVal] = useState(false);
  const [signVisible ,setSignVisible] = useState(true);
  // const navigate = useNavigate()


  const fullName = useRef("");
  const email = useRef("");
  const phoneNumber = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");
  


  const handleSubmit = async (event) => {
    event.preventDefault();
    const createdList = valueList.filter((item)=>item.value===false);
    if(fullName.current.value === "" || email.current.value === "" || phoneNumber.current.value === "" || password.current.value === "" || confirmPassword.current.value === ""){      
      setMessage("All fields are required.");
      setVisible(true);
    }
    else if(createdList.length!==5){
      setMessage("Enter Valid Password!");
      setVisible(true);      
    }
    else if (confirmPassword.current.value !== password.current.value) {
      setMessage("Passwords do not match. Try Again.");
      setVisible(true);
    } 
    else {
      let newitem = {
        name: fullName.current.value,
        email: email.current.value,
        mobile: phoneNumber.current.value,
        password: password.current.value,
      };

      const response = await axios.post("http://localhost:8000/register",newitem);
      // fullName.current.value = "";
      // email.current.value = "";
      // phoneNumber.current.value = "";
      // password.current.value = "";
      // confirmPassword.current.value = "";
      console.log(response.data);
    }
  };

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

    const newValueList = valueList.map((item, idx) => {
        const requirement = requirements.find(req => req.index === idx);
        if (requirement) {
            const isValid = requirement.regex.test(e.target.value);
            return { ...item, value: !isValid };  // Update the value property based on the regex test result
        }
        return item; // Return unchanged item if not matched
    });

    setValueList(newValueList);
  };

  return (
    <>
      {visible && <Alert message={message} type={"success"} visible={visible} setVisible={setVisible}/>}
      <div className={`fixed inset-0 text-zinc-200 backdrop-blur-sm h-screen z-[9999]  ${val?"visible":"invisible"} flex items-center justify-center`}>
        <div className="border-2 border-[var(--container-color)] m-auto flex flex-col items-center justify-center rounded-[15px] p-4 border h-[70%] w-[50%] bg-white pb-7 relative">
          <img
              src={`${import.meta.env.BASE_URL}Images/Close.png`}
              alt="Close"
              className="modal-close w-[50px] h-[50px] absolute top-0 right-0 cursor-pointer invert-[0.4]"
              onClick={()=>setVal(false)}
          />
          <p className="mb-[20px] font-extrabold text-3xl text-[var(--title-color)]"><span className="text-[var(--primary-color)]">Terms</span> and conditions</p>
          <div className="flex  overflow-hidden overflow-y-scroll text-[var(--text-color)] px-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eligendi amet dicta, saepe consequuntur dolor inventore quis laboriosam distinctio numquam ipsam, eaque animi maiores, nisi nostrum vitae fugit? Magnam assumenda laboriosam pariatur dignissimos error tempora quod officiis nisi commodi minus repudiandae doloribus odio corrupti deleniti, mollitia quas beatae temporibus architecto dolor alias ipsam explicabo quaerat voluptas numquam? Ipsam aperiam cupiditate nesciunt ea quia excepturi unde sunt error molestiae debitis minus repellat perspiciatis dolore, harum mollitia quod quidem hic officiis laborum illo cumque temporibus. Recusandae voluptatibus commodi perferendis eius ad repudiandae dolore qui. Error eos dolor vero repellat at odio distinctio ut aspernatur eveniet nobis ipsam, quia quae. Labore ea veniam odit aliquid voluptates ducimus iste enim ex natus nulla dolor esse dolorem in facere asperiores blanditiis hic vero, voluptatum quia odio maxime harum tempora quas. Molestias quidem eius fugiat dolorem illum ratione corrupti esse doloremque quis maxime, suscipit inventore ipsa laborum atque libero pariatur placeat necessitatibus provident enim minus impedit. In ab nisi blanditiis asperiores porro aperiam magnam quasi ea maiores pariatur rem, quod saepe corrupti qui impedit. Vero est quod sint, enim dicta debitis optio facere, quisquam nulla repellendus numquam beatae vel inventore, eos excepturi dolorem repudiandae laborum illo error reiciendis! Rem numquam eius non. Id esse nam alias expedita soluta temporibus cupiditate placeat nostrum libero adipisci quibusdam ullam numquam pariatur, culpa, doloribus ratione, qui nobis amet. Expedita porro doloremque qui, nesciunt, eaque amet sed quisquam perspiciatis illum, soluta ratione officia quo nihil eligendi pariatur a! Iusto repellendus harum omnis quos! Consectetur libero maxime sequi sapiente, voluptas asperiores hic temporibus dolore aut placeat saepe, iusto odio dolorem. Officiis, molestiae doloribus fuga impedit laboriosam, provident iure animi harum odit ab dolorum corporis facere commodi. Sed aspernatur magnam fugit expedita ullam nesciunt ex incidunt, vel quas, iste quidem eveniet quo quos illo doloremque corrupti quod inventore corporis nostrum laudantium in officiis culpa! Corporis facere sed quae necessitatibus, ratione soluta quas voluptatibus? Suscipit ut, quibusdam debitis maiores perspiciatis, fugiat placeat qui incidunt aut obcaecati, et sunt itaque sequi dignissimos voluptatum. Vero est fuga id ipsum itaque dolore inventore magnam qui, libero minima nemo consectetur, perspiciatis, quasi reiciendis? Omnis, incidunt. Nesciunt, maxime quaerat adipisci facilis et itaque consectetur, aspernatur rerum ullam, quam iure ea quis ad rem corporis iste mollitia non officia exercitationem aliquam quos obcaecati! Nostrum fugit illum expedita ad minima quasi eveniet non quod modi sapiente consectetur aliquid vel molestiae assumenda quidem, nihil mollitia sequi et quisquam nulla perspiciatis doloremque esse libero deleniti. Voluptatum, odit numquam cupiditate ad labore illo hic iure dicta tenetur facilis beatae voluptatem veniam quod necessitatibus possimus repellat, fuga reiciendis consequatur dolores earum veritatis cumque? Libero eum id rerum quis possimus deserunt molestias natus, voluptates temporibus vel doloribus vero corrupti repellat quisquam veniam ullam quod facere laborum voluptatum sed. Veniam impedit ullam fugiat natus libero consequuntur. Eum dolore molestiae eligendi, quis officia rerum quam magni, nisi sapiente suscipit architecto quod officiis minima, provident quisquam blanditiis beatae possimus est sit doloribus cum cupiditate maxime ipsa dicta? Ducimus, vitae?
          </div>
        </div>
      </div>


    <div className="flex items-center justify-center bg-[#F5F5F5] pt-14 pb-6 ">
      <div className="text-center max-w-[800px] m-auto rounded-[16px] p-[20px] pb-1 shadow-xl bg-[white] mt-7">
          <p className="mb-[20px] font-extrabold text-3xl text-[var(--title-color)]"><span className="text-[var(--primary-color)]">Create</span> an account</p>
          <form id="registrationForm" onSubmit={handleSubmit}>
            <div className="mb-[20px] relative">
              <input
                type="text"
                id="fullName"
                className="w-[90%] inline p-[10px] pr-[35px] border-2 border-[var(--container-color)] rounded-[30px]  font-semibold text-[14px] outline-none transition-all duration-300 ease-linear focus:border-[var(--primary-color)] text-[var(--title-color)]"
                ref={fullName}
                placeholder="Full Name"
                name="fullName"
                autoComplete="off"
              />
              <FaUser className="absolute right-[8%] top-1/2 transform -translate-y-1/2 transition-all ease-linear duration-300 hover:text-[var(--primary-color)] text-[var(--title-color)] text-[1.4rem]"/>
            </div>

            <div className="mb-[14px] relative">
              <input
                type="email"
                id="email"
                ref={email}
                className="w-[90%] inline p-[10px] pr-[35px] border-2 border-[var(--container-color)] rounded-[30px]  font-semibold text-[14px] outline-none transition-all duration-300 ease-linear focus:border-[var(--primary-color)] text-[var(--title-color)]"
                name="email"
                placeholder="Email"
                autoComplete="off"
              />
              <FaEnvelope className="absolute right-[8%] top-1/2 transform -translate-y-1/2 transition-all ease-linear duration-300 hover:text-[var(--primary-color)] text-[var(--title-color)] text-[1.4rem]"/>
            </div>

            <div className="mb-[14px] relative">
              <input
                type="number"
                id="number"
                ref={phoneNumber}
                className="w-[90%] inline p-[10px] pr-[35px] border-2 border-[var(--container-color)] rounded-[30px]  font-semibold text-[14px] outline-none transition-all duration-300 ease-linear focus:border-[var(--primary-color)] text-[var(--title-color)]"
                name="number"
                placeholder="Phone Number"
                autoComplete="off"
              />
              <FaPhone className="absolute right-[8%] top-1/2 transform -translate-y-1/2 transition-all ease-linear duration-300 hover:text-[var(--primary-color)] text-[var(--title-color)] text-[1.4rem]"/>
            </div>
            
            <div className="">
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handlePassword}
                  ref={password}
                  className="w-[90%] inline p-[10px] pr-[35px] border-2 border-[var(--container-color)] rounded-[30px]  font-semibold text-[14px] outline-none transition-all duration-300 ease-linear focus:border-[var(--primary-color)] text-[var(--title-color)]"
                  placeholder="Password"
                  autoComplete="off"
                />
                <FaLock className="absolute right-[8%] top-1/2 transform -translate-y-1/2 transition-all ease-linear duration-300 hover:text-[var(--primary-color)] text-[var(--title-color)] text-[1.4rem]"/>
              </div>

              <p id="validPassword" className="font-[poppins] mt-1 text-[13px] float-right mr-4 text-[red] opacity-0">Enter Valid Password!</p>

              <div className="py-2 px-5 text-sm">
                  <div className="mt-[6px] rounded-[10px] text-[#758694]">
                    <p className="text-left ml-2 text-[14px] whitespace-nowrap">Password must contains</p>
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

            <div className="relative mb-[10px]">
              <input
                type={signVisible?"password":"text"}
                id="confirm-password"
                name="confirm-password"
                ref={confirmPassword}
                className="w-[90%] inline p-[10px] pr-[35px] border-2 border-[var(--container-color)] rounded-[30px]  font-semibold text-[14px] outline-none transition-all duration-300 ease-linear focus:border-[var(--primary-color)] text-[var(--title-color)]"
                placeholder="Confirm Password"
                autoComplete="off"
              />
              <FaEye className={`absolute right-[8%] top-1/2 transform -translate-y-1/2 transition-all ease-linear duration-300 hover:text-[var(--primary-color)] text-[var(--text-color)] text-[1.4rem] cursor-pointer ${signVisible?"hidden":"visible"} `} onClick={()=>setSignVisible(!signVisible)}/>
              <FaEyeSlash className={`absolute right-[8%] top-1/2 transform -translate-y-1/2 transition-all ease-linear duration-300 hover:text-[var(--primary-color)] text-[var(--title-color)] text-[1.4rem] ${signVisible?"visible":"hidden"} cursor-pointer`} onClick={()=>setSignVisible(!signVisible)}/>
            </div>

            <div id="errorFill" className=" text-[red] hidden">
              <p>All fields are required.</p>
            </div>

            <div className="relative text-left text-[10px] items-center flex mb-[8px]">
              <input type="checkbox" className="cursor-pointer w-[16px] h-[16px] mr-[10px] ml-[17px] accent-[var(--primary-color)]" id="terms" />
              <label htmlFor="terms" className="inline text-[15px] text-[var(--text-color)] whitespace-nowrap">
                I agree to the <span className="hover:underline text-[#007bff]" onClick={()=>setVal(true)}>terms and conditions</span>
              </label>
            </div>

            <div className='flex flex-col items-center justify-center my-5'>
              <button type="submit" className={`button w-[80%] cursor-pointer inline-flex text-[var(--title-color)] border border-[var(--primary-color)] items-center py-[14px] pr-[30px] rounded-[35px] font-medium text-sm font-[500] font-sans relative before:content-[''] before:absolute before:inset-0 before:bg-[var(--primary-color)] before:z-[-1] hover:before:translate-x-0 before:translate-x-full before:duration-700 overflow-hidden transition-all  z-[1] hover:text-white justify-center`}>
                Create Account<span className="contact-button-icon button-icon bg-[var(--primary-color)] absolute right-0 h-full text-white w-[50px] rounded-[26px] text-2xl flex items-center justify-center leading-[64px] ">
                  <FaUserPlus/>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      </>
  );
}
