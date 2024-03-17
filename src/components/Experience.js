import React, { useRef } from "react";
import {motion, useScroll} from "framer-motion"
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, adress, work }) => {
  const reference = useRef(null)
  return (
    <li ref={reference} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex items-center flex-col justify-between">
      <LiIcon reference={reference}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}>
        <h3 className="font-bold capitalize text-2xl">
          {position}&nbsp;<a href={`https://${companyLink}`}
          target="_blank"
          className="text-primary capitalize">@{company}</a>
        </h3>
        <span className="font-medium capitalize text-dark/75">
          {time} | {adress}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {

  const ref = useRef(null)
  const {scrollYProgress} = useScroll(
    {
      target:ref,
      offset:["start end","center start"]
    }
  )
  return (
    <>
      <div className="my-64">
        <h1 className="w-full text-center text-8xl font-bold mb-32">
          Experience
        </h1>
        <div className="relative w-[75%] mx-auto" ref={ref}>
          <motion.div style={{scaleY:scrollYProgress}}  className="absolute left-9 top-0 bg-dark w-[4px] h-full origin-top"/>
          <ul>
            <Details position='Senior Associate'
            company='Inflocuris Consulting PVT Ltd'
            time='2020 - 2021'
            adress='Gannavaram, Vijayawada'
            companyLink="www.inflocuris.com"
            work="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."/>
            <Details position='Software Associate'
            company='Adiverse Technologies LLP'
            time='2023 - 2023'
            adress='Hitech City, Hydearabad'
            companyLink="www.adiversetech.com"
            work="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."/>
            <Details position='Software Associate'
            company='Aspiron Technologies Private Limited'
            time='2024 - Present'
            adress='Hitech City, Hydearabad'
            companyLink="www.aspiron.in"
            work="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."/>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
