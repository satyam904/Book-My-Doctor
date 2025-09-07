import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate()

  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>
          <img onClick={()=> navigate('/')} className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-3/4 text-gray-900 leading-6">
            Book your doctor’s appointment anytime, anywhere with ease. No
            waiting in long queues – connect with trusted doctors instantly.
            Choose your preferred specialist and time slot in just a few clicks.
            Get reminders so you never miss an appointment. Your health, your
            schedule – managed seamlessly. Simple. Fast. Reliable healthcare at
            your fingertips.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-900">
            <li onClick={() => navigate('/')}>Home</li>
            <li onClick={() => navigate('/about')}>About us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-900">
            <li>+91 9876543210</li>
            <li>bookmydoctor@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 @ BookMyDoctor.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
