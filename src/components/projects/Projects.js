import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="DÊ UMA OLHADA NO MEU PORTIFÓLIO E DEIXE SEU FEEDBACK"
          des="Meus Projetos"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="ESCOLA API"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          repo="https://github.com/Lul4t3ch/escola-react-app"
          site="http://35.199.111.146:82/"
        />
        <ProjectsCard
          title="PROJETO AGENDA"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          repo="https://github.com/Lul4t3ch/projeto-agenda"
          site="http://35.199.111.146"
        />
        <ProjectsCard
          title="API REST"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
          repo="https://github.com/Lul4t3ch/Api-Rest"
          site="http://35.199.111.146:81/alunos"
        />
        <ProjectsCard
          title="LANDING PAGE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectFour}
          repo="https://github.com/Lul4t3ch/responsive-landing-page"
          site="https://lul4t3ch.github.io/responsive-landing-page/"
        />
        <ProjectsCard
          title="POKÉDEX"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectFive}
          repo="https://github.com/Lul4t3ch/Pokedex"
          site="#"
        />
        <ProjectsCard
          title="CLONE PLATAFORMA DIO"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectSix}
          repo="https://github.com/Lul4t3ch/Clone-plataforma-DIO"
          site="#"
        />
      </div>
    </section>
  );
}

export default Projects