import React from 'react'
import { curriculo } from "../../assets/index";

const pdfFileUrl = "https://lul4t3ch.github.io/portfolio-website/static/resume.pdf";

const Curriculo = () => {
  const downloadResume = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href=url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center font-titleFont"    >

      <div className="w-full lgl:w-1/2 flex justify-center items-center gap-20">
      <button className="w-1/2 h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
      onClick={()=> {downloadResume(pdfFileUrl)}}>
        <b className="text-white"> Baixar Curriculo</b>   
      </button>
    </div>
    
     <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[80%] z-10"
        src={curriculo}
        alt="curriculo"
      />
    </div>
    </section>
  );
}

export default Curriculo