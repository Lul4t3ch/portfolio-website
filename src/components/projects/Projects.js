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
          des=" Aplicação Front end que consome uma Api Rest. 
          Simulando o sistema web de uma escola, o site conta com as páginas de Login, 
          Home, Edição de informações e cadastro."
          src={projectOne}
          repo="https://github.com/Lul4t3ch/escola-react-app"
          site="http://35.199.111.146:82/"
        />
        <ProjectsCard
          title="PROJETO AGENDA"
          des=" Agenda simples utilizando as quatro operações: Create (inserção),
           Read (consulta), Update (atualização) e Delete (exclusão). "
          src={projectTwo}
          repo="https://github.com/Lul4t3ch/projeto-agenda"
          site="http://35.199.111.146"
        />
        <ProjectsCard
          title="API REST"
          des=" API REST para consumo de dados. Fornece dados de usuários e alunos"
          src={projectThree}
          repo="https://github.com/Lul4t3ch/Api-Rest"
          site="http://35.199.111.146:81/alunos"
        />
        <ProjectsCard
          title="LANDING PAGE"
          des="Uma página simples e responsiva onde eu coloquei em prática todo o conhecimento de HTML,
          CSS e JS adquirido durante meus estudos."
          src={projectFour}
          repo="https://github.com/Lul4t3ch/responsive-landing-page"
        />
        <ProjectsCard
          title="POKÉDEX"
          des=" Projeto muito divertido que apresenta todos os 151 pokémons da primeira
           geração através do consumo de uma API REST!"
          src={projectFive}
          repo="https://github.com/Lul4t3ch/Pokedex"
        />
        <ProjectsCard
          title="CLONE PLATAFORMA DIO"
          des="Clonagem da plataforma da Digital Innovation One, levando em 
          consideração as principais páginas da plataforma, sendo elas: Home, 
          Login, Cadastro e feed."
          src={projectSix}
          repo="https://github.com/Lul4t3ch/Clone-plataforma-DIO"
        />
      </div>
    </section>
  );
}

export default Projects