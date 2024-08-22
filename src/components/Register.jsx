import React, { useRef, useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaCaretDown } from "react-icons/fa";
import { BiSolidCircle } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [val, setVal] = useState(false);
  // const navigate = useNavigate()


  const fullName = useRef("");
  const email = useRef("");
  const phoneNumber = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");
  


  const handleSubmit = async (event) => {
    event.preventDefault();
    const errorMessage = document.getElementById("error-message");
    const validPassword = document.getElementById("validPassword");
    const createdList = valueList.filter((item)=>item.value===false);
    if(fullName.current.value === "" || email.current.value === "" || phoneNumber.current.value === "" || password.current.value === "" || confirmPassword.current.value === ""){
      const errorMessage = document.getElementById("errorFill");
      errorMessage.style.display="block";
    }
    else if(createdList.length!==5){
      validPassword.style.opacity = 1;
    }
    else if (confirmPassword.current.value !== password.current.value) {
      errorMessage.style.opacity = 1;
      validPassword.style.opacity = 0;
    } 
    else {
      errorMessage.style.opacity = 0;
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

  return (
<>
    <div className={`fixed inset-0 text-zinc-200 bg-opacity-30 backdrop-blur-sm h-screen z-[9999]  ${val?"visible":"invisible"} flex items-center justify-center`}>
        <div className="border m-auto flex flex-col items-center justify-center bg-zinc-900 rounded-[15px] p-4 border h-[70%] w-[50%]">
          <h1 className="font-semibold text-2xl text-yellow-100 my-2">Terms and conditions</h1>
          <div className="flex  overflow-hidden overflow-y-scroll bg-zinc-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eligendi amet dicta, saepe consequuntur dolor inventore quis laboriosam distinctio numquam ipsam, eaque animi maiores, nisi nostrum vitae fugit? Magnam assumenda laboriosam pariatur dignissimos error tempora quod officiis nisi commodi minus repudiandae doloribus odio corrupti deleniti, mollitia quas beatae temporibus architecto dolor alias ipsam explicabo quaerat voluptas numquam? Ipsam aperiam cupiditate nesciunt ea quia excepturi unde sunt error molestiae debitis minus repellat perspiciatis dolore, harum mollitia quod quidem hic officiis laborum illo cumque temporibus. Recusandae voluptatibus commodi perferendis eius ad repudiandae dolore qui. Error eos dolor vero repellat at odio distinctio ut aspernatur eveniet nobis ipsam, quia quae. Labore ea veniam odit aliquid voluptates ducimus iste enim ex natus nulla dolor esse dolorem in facere asperiores blanditiis hic vero, voluptatum quia odio maxime harum tempora quas. Molestias quidem eius fugiat dolorem illum ratione corrupti esse doloremque quis maxime, suscipit inventore ipsa laborum atque libero pariatur placeat necessitatibus provident enim minus impedit. In ab nisi blanditiis asperiores porro aperiam magnam quasi ea maiores pariatur rem, quod saepe corrupti qui impedit. Vero est quod sint, enim dicta debitis optio facere, quisquam nulla repellendus numquam beatae vel inventore, eos excepturi dolorem repudiandae laborum illo error reiciendis! Rem numquam eius non. Id esse nam alias expedita soluta temporibus cupiditate placeat nostrum libero adipisci quibusdam ullam numquam pariatur, culpa, doloribus ratione, qui nobis amet. Expedita porro doloremque qui, nesciunt, eaque amet sed quisquam perspiciatis illum, soluta ratione officia quo nihil eligendi pariatur a! Iusto repellendus harum omnis quos! Consectetur libero maxime sequi sapiente, voluptas asperiores hic temporibus dolore aut placeat saepe, iusto odio dolorem. Officiis, molestiae doloribus fuga impedit laboriosam, provident iure animi harum odit ab dolorum corporis facere commodi. Sed aspernatur magnam fugit expedita ullam nesciunt ex incidunt, vel quas, iste quidem eveniet quo quos illo doloremque corrupti quod inventore corporis nostrum laudantium in officiis culpa! Corporis facere sed quae necessitatibus, ratione soluta quas voluptatibus? Suscipit ut, quibusdam debitis maiores perspiciatis, fugiat placeat qui incidunt aut obcaecati, et sunt itaque sequi dignissimos voluptatum. Vero est fuga id ipsum itaque dolore inventore magnam qui, libero minima nemo consectetur, perspiciatis, quasi reiciendis? Omnis, incidunt. Nesciunt, maxime quaerat adipisci facilis et itaque consectetur, aspernatur rerum ullam, quam iure ea quis ad rem corporis iste mollitia non officia exercitationem aliquam quos obcaecati! Nostrum fugit illum expedita ad minima quasi eveniet non quod modi sapiente consectetur aliquid vel molestiae assumenda quidem, nihil mollitia sequi et quisquam nulla perspiciatis doloremque esse libero deleniti. Voluptatum, odit numquam cupiditate ad labore illo hic iure dicta tenetur facilis beatae voluptatem veniam quod necessitatibus possimus repellat, fuga reiciendis consequatur dolores earum veritatis cumque? Libero eum id rerum quis possimus deserunt molestias natus, voluptates temporibus vel doloribus vero corrupti repellat quisquam veniam ullam quod facere laborum voluptatum sed. Veniam impedit ullam fugiat natus libero consequuntur. Eum dolore molestiae eligendi, quis officia rerum quam magni, nisi sapiente suscipit architecto quod officiis minima, provident quisquam blanditiis beatae possimus est sit doloribus cum cupiditate maxime ipsa dicta? Ducimus, vitae?
          </div>
          <button onClick={()=>setVal(false)} className="mt-3 hover:bg-[#027bfd] w-[50%] p-[10px] bg-[#68b0fd] border-none rounded-[26px] text-[#fff] text-[16px] cursor-pointer">
            Done
          </button>
        </div>
      </div>



    <div className="flex items-center justify-center bg-[#F5F5F5] p-3">
      <div className="text-center max-w-[800px] m-auto rounded-[16px] p-[20px] pb-1 shadow-xl bg-[white] mt-3">
          <p className="mb-[14px] font-semibold text-3xl text-[orange]">Create an account</p>
          <form id="registrationForm" onSubmit={handleSubmit}>
            <div className="mb-[20px] relative">
              <input
                type="text"
                id="fullName"
                className="w-[90%] inline p-[10px] pr-[35px] border border-[#cccccc] rounded-[30px] box-border font-semibold text-[14px]"
                ref={fullName}
                placeholder="Full Name"
                name="fullName"
                autoComplete="off"
              />
              <FaUser className="absolute right-[8%] top-1/2 transform -translate-y-1/2 text-[#888] text-[1.2rem]"/>
            </div>

            <div className="mb-[14px] relative">
              <input
                type="email"
                id="email"
                ref={email}
                className="w-[90%] inline p-[10px] pr-[35px] border border-[#cccccc] rounded-[30px] box-border font-semibold text-[14px]"
                name="email"
                placeholder="Email"
                autoComplete="off"
              />
              <FaEnvelope className="absolute right-[8%] top-1/2 transform -translate-y-1/2 text-[#888] text-[1.2rem]"/>
            </div>

            <div className="mb-[14px] relative">
              <input
                type="number"
                id="number"
                ref={phoneNumber}
                className="w-[90%] inline p-[10px] pr-[35px] border border-[#cccccc] rounded-[30px] box-border font-semibold text-[14px]"
                name="number"
                placeholder="Phone Number"
                autoComplete="off"
              />
              <FaPhone className="absolute right-[8%] top-1/2 transform -translate-y-1/2 text-[#888] text-[1.2rem]"/>
            </div>
            
            <div className="">
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handlePassword}
                  ref={password}
                  className="w-[90%] inline p-[10px] pr-[35px] border border-[#cccccc] rounded-[30px] box-border font-semibold text-[14px]"
                  placeholder="Password"
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

            <div className="relative mb-[10px]">
              <input
                type="text"
                id="confirm-password"
                name="confirm-password"
                ref={confirmPassword}
                className="w-[90%] inline p-[10px] pr-[35px] border border-[#cccccc] rounded-[30px] box-border font-semibold text-[14px]"
                placeholder="Confirm Password"
                autoComplete="off"
              />
              <FaLock className="absolute right-[8%] top-1/2 transform -translate-y-1/2 text-[#888] text-[1.2rem]"/>
            </div>

            <div id="errorFill" className=" text-[red] hidden">
              <p>All fields are required.</p>
            </div>

            <div className="relative text-left text-[10px] items-center flex mb-[8px]">
              <input type="checkbox" className="inline cursor-pointer w-[16px] h-[16px] mr-[10px] ml-[17px]" id="terms" />
              <label htmlFor="terms" className="inline text-[15px] text-[#686D76]">
                I agree to the <button className="hover:underline text-[#007bff]" onClick={()=>setVal(true)}>terms and conditions</button>
              </label>
            </div>

            <button type="submit" className="hover:bg-[#027bfd] w-[90%] p-[10px] bg-[#68b0fd] border-none rounded-[26px] text-[#fff] text-[16px] cursor-pointer">Register</button>
            <p id="error-message" className="text-[red] mt-[2px] pb-[3px] text-[14px] opacity-0">
              Passwords do not match. Try Again.
            </p>
          </form>
        </div>
      </div>
      </>
  );
}
