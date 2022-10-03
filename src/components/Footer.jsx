import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full flex justify-center py-4 gap-1 font-gill-sans-mt bg-[#BD4B4B] text-[#FFF5E4]">
      <p className="self-center text-xl">2022 | By Vera Soniya</p>
      <a href="https://github.com/verasoniya" target="blank" className="self-center text-3xl">
        <FaGithubSquare />
      </a>
      <a href="https://www.linkedin.com/in/septi-vera-soniya-737731246/" target="blank" className="self-center text-3xl">
        <FaLinkedin />
      </a>
    </div>
  );
}

export default Footer;
