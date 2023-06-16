import React from 'react'
import {logoUnicesumar} from '../../assets/index';

const ResumeCard = ({title,subTitle,des}) => {
  return (
    <div className="w-full h-4/5 group flex">
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-12 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <div className="w-24 h-24 flex justify-center items-center border-2 border-indigo-500 rounded-full overflow-hidden">
              <img className="rounded-full" src={logoUnicesumar} alt='logoUnicesumar'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeCard