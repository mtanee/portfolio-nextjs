import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-[url('/bg.jpg')] bg-cover text-gray-100 mt-auto py-8 bg-fixed   ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-center md:justify-start items-center mb-4 md:mb-0">
        
          <Image src={'/logo.png'} className=" h-8 pt-1 md:h-8 mr-2 " alt='' width={100} height={50} />
          <p className="text-xl md:text-2xl font-bold">Muhammad Taneer</p>
        </div>
        <div className="flex justify-center md:justify-end items-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:youremail@gmail.com">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
