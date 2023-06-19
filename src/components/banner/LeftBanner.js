import React from 'react'
import Media from './Media';

const LeftBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">LUIS HENRIQUE DEV</h4>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
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
  );
}

export default LeftBanner