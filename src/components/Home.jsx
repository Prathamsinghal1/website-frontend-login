import React,{useRef, useState} from "react";

export default function Home({ val, setVal }) {
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
    console.log(newItem.name,newItem.email,newItem.message);
  };

  const hideSideMenu = () => {
    setVal(false);
  }

  return (
    <>
      {
        <div
        className={`inset-0 bg-gray-100 transition-opacity duration-1000 ${
          val ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={hideSideMenu}
        >
          { val && <div
            className="h-full w-[46%] bg-[white] duration-[1000ms] p-[2%] opacity-80"
            style={{
              left: val === "contact" ? "0%" : "-100%",
            }}
          >
            <div onClick={(e)=> e.stopPropagation()} className="max-w-[80%] m-auto p-[5px] rounded-[10px] bg-[white] shadow-2xl">
              <h1 className="text-[#333] font-bold text-3xl text-center">Contact Us</h1>
              <p className="text-[#555] font-semibold py-2">
                If you have any questions, need support, or want to learn more
                about our services, please reach out to us using the form below.
                We're here to help!
              </p>

              <form action="" onSubmit={handleSubmitFeedback}>
                <div className="mb-[10px]">
                  <label htmlFor="name" className="font-semibold block m-[3px] text-[#333]">Name:</label>
                  <input
                    type="text"
                    className="w-[98%] m-1 p-[7px] border border-[#ccc] rounded-[7px]"
                    ref={name}
                    id="name"
                    name="name"
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-semibold block m-[3px] text-[#333]">Email:</label>
                  <input
                    type="email"
                    className="w-[98%] m-1 p-[7px] border border-[#ccc] rounded-[7px]"
                    ref={email}
                    id="email"
                    name="email"
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="font-semibold block m-[3px] text-[#333]">Message:</label>
                  <textarea
                    id="message"
                    className="w-[98%] m-1 p-[7px] border border-[#ccc] rounded-[7px] box-border"
                    ref={message}
                    name="message"
                    rows="5"
                    required
                    autoComplete="off"
                  ></textarea>
                </div>
                <button type="submit" className="hover:bg-[#0056b3] inline-block bg-[#007BFF] text-[#fff] px-[15px] py-[10px] rounded-[6px] text-[16px] cursor-pointer m-[6px]">Submit</button>
              </form>
            </div>
          </div>}
        </div>
      }
      { !val && <div className="text-center max-w-[900px] m-auto"> 
        <h2 className="font-bold text-3xl py-4 text-[orange]">
          Welcome to Incident Solutions
        </h2>
        <p className="font-semibold text-[18px] pb-4">
          We're glad you're here. At Incident Solutions, we specialize in
          helping organizations manage and resolve incidents efficiently and
          effectively. Our goal is to provide you with the tools, resources, and
          support you need to maintain operational resilience and minimize
          disruptions.
        </p>
        <p className="font-semibold text-[18px] pb-4">
          Whether you're looking to implement a robust incident management
          system, access real-time analytics, or connect with expert support,
          we're here to assist you every step of the way.
        </p>
        <p className="font-semibold text-[18px] pb-4">
          Explore our solutions, learn more about how we can help, and don't
          hesitate to <a href="/contact">reach out to our support team</a>,{" "}
          <button className="underline text-[#007BFF]">schedule a demo</button>, or{" "}
          <button onClick={()=>{setVal("contact")}} className="underline text-[#007BFF]">contact us</button> if you need assistance.
        </p>
        <p className="font-semibold text-[18px] pb-4">
          Welcome to a more resilient future with Incident Solutions.
        </p>
      </div>}
    </>
  );
}
