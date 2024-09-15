import React,{useRef, useState} from "react";
import {Link} from "react-router-dom";

export default function Home() {

  return (
    <>
      <div className="text-center max-w-[900px] m-auto py-14 px-14 text-[var(--text-color)]"> 
        <p className="mb-[10px] text-center py-4 pt-7 font-extrabold text-3xl text-[var(--title-color)]"><span className="text-[var(--primary-color)]">Welcome</span> to Incident Solutions</p>
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
          hesitate to reach out to our support team,{" "}
          <button className="underline text-[#007BFF]">schedule a demo</button>, or{" "}
          <Link to="contact" className="underline text-[#007BFF]">contact us</Link> if you need assistance.
        </p>
        <p className="font-semibold text-[18px] pb-4">
          Welcome to a more resilient future with Incident Solutions.
        </p>
      </div>
    </>
  );
}
