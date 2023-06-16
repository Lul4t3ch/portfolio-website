import React from 'react'
import RightSide from './RightSide';
import { banner } from "../../assets/index";
import Media from './Media';

const Curriculo = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"    >

      <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">LUIS HENRIQUE DEV</h4>
        <h1 className="text-6xl font-bold text-white">
          <span className="text-designColor capitalize"> Desenvolvedor web</span>
        </h1>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Dedico meu tempo para estudar tecnologia e me desenvolver como profissional, totalmente
        focado na área que desejo atuar. Possuo conhecimento em tecnologias como Javascript,
        Typescript, ReactJs, HTML, CSS e vários projetos no meu github.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>

     <RightSide />
     <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="max-w-[50%] z-10"
        src={banner}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[350px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
    </section>
  );
}

export default Curriculo