import React from 'react'
import { FaGithub, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Luis Henrique</h3>
        <p className="text-lg font-normal text-gray-400">
          DESENVOLVEDOR WEB
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Buscando por estágio!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Telefone: <span className="text-lightText">+55 (75) 998535323</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">luissantosmatos15@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Me encontre</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/luishenrique-dev/">
            <FaLinkedinIn />
          </a>
          </span>
          <span className="bannerIcon">
          <a href="https://api.whatsapp.com/send?phone=5575998535323&text=">
            <FaWhatsapp />
          </a>
          </span>
          <span className="bannerIcon">
          <a href="https://github.com/Lul4t3ch">
            <FaGithub />
          </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft