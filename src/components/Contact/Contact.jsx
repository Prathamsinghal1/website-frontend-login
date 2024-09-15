import React, { useRef, useState } from 'react';
import { FiSend } from "react-icons/fi";

export default function Contact() {
  const name = useRef("");
  const email = useRef("");
  const message = useRef("");

  const [feedback, setFeedback] = useState([]);

  const handleSubmitFeedback = (event) => {
    event.preventDefault();
    let newItem = {
      name: name.current.value,
      email: email.current.value,
      message: message.current.value,
    };
    const finalVal = [newItem, ...feedback];
    setFeedback(finalVal);
    name.current.value = "";
    email.current.value = "";
    message.current.value = "";
  };


    const isOpen = useRef(false);

  return (
    <div className=" bg-[#F5F5F5] min-h-[100vh] pt-14 pb-7">
          <div className="mt-14 p-[20px] max-w-[400px] m-auto rounded-[16px] p-[20px] shadow-xl bg-[white]">
              <p className="font-extrabold text-3xl text-center text-[var(--title-color)]"><span className="text-[var(--primary-color)]">Contact</span> Us</p>
              <p className="text-[#555] font-semibold py-4 text-[var(--text-color)]">
                If you have any questions, need support, or want to learn more
                about our services, please reach out to us using the form below.
                We're here to help!
              </p>
              <form action="" onSubmit={handleSubmitFeedback}>
                <div className="mb-[10px]">
                  <label htmlFor="name" className="font-semibold block m-[3px] text-[var(--title-color)]">Name:</label>
                  <input
                    type="text"
                    className="w-[98%] m-1 p-[7px] border-2 rounded-[7px] border-[var(--container-color)] outline-none focus:border-[var(--primary-color)]"
                    ref={name}
                    id="name"
                    name="name"
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-semibold block m-[3px] text-[var(--title-color)]">Email:</label>
                  <input
                    type="email"
                    className="w-[98%] m-1 p-[7px] border-2 rounded-[7px] border-[var(--container-color)] outline-none focus:border-[var(--primary-color)]"
                    ref={email}
                    id="email"
                    name="email"
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="font-semibold block m-[3px] text-[var(--title-color)]">Message:</label>
                  <textarea
                    id="message"
                    className="w-[98%] m-1 p-[7px] border-2 rounded-[7px] border-[var(--container-color)] outline-none focus:border-[var(--primary-color)]"
                    ref={message}
                    name="message"
                    rows="3"
                    required
                    autoComplete="off"
                  ></textarea>
                </div>
                <div className='flex flex-col items-center justify-center mt-2'>
              <button type="submit" className={`button w-[80%] cursor-pointer inline-flex text-[var(--title-color)] border border-[var(--primary-color)] items-center py-[14px] pr-[30px] rounded-[35px] font-medium text-sm font-[500] font-sans relative before:content-[''] before:absolute before:inset-0 before:bg-[var(--primary-color)] before:z-[-1] hover:before:translate-x-0 before:translate-x-full before:duration-700 overflow-hidden transition-all  z-[1] hover:text-white justify-center`}>
              Send Message<span className="contact-button-icon button-icon bg-[var(--primary-color)] absolute right-0 h-full text-white w-[50px] rounded-[26px] text-2xl flex items-center justify-center leading-[64px] ">
                  <FiSend/>
                </span>
              </button>
            </div>
              </form>
          </div>
    </div>
  )
}
