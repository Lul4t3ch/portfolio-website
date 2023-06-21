import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex justify-center items-center"
    >
      {/* part one */}
      <div>
        <div className="pt-20 pb-8 lgl:pt-50 font-titleFont flex justify-center items-center text-center flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Formação Acadêmica</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[300px] flex flex-col gap-10">
          <ResumeCard
            title="Análise e Desenvolvimento de Sistemas"
            subTitle="Unicesumar (Jul 2022 - Dez 2024)"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education