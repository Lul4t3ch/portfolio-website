import React from 'react'
import { FaLinkedinIn, FaReact, FaWhatsapp, FaGithub } from "react-icons/fa";
import { SiCss3, SiHtml5, SiJavascript } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            ME ENCONTRE
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            HABILIDADES
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
            <span className="bannerIcon">
              <SiCss3 />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media