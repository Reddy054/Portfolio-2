import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const reference = useRef(null);
  return (
    <li
      ref={reference}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex items-center flex-col justify-between"
    >
      <LiIcon reference={reference} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold capitalize text-2xl">{type}&nbsp;</h3>
        <span className="font-medium capitalize text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <div className="my-64">
        <h1 className="w-full text-center text-8xl font-bold mb-32">
          Education
        </h1>
        <div className="relative w-[75%] mx-auto" ref={ref}>
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 bg-dark w-[4px] h-full origin-top"
          />
          <ul>
            <Details
              type="Batchlor Of Technology in Mechanical Engineering"
              time="2017 - 2020"
              place="Nova's Institute Of Technology, Eluru"
              info="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
            />
            <Details
              type="Diploma In Mechanical Engineering"
              time="2013 - 2016"
              place="Narayana College of Engg & Tech, Tadipatri"
              info="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
            />
            <Details
              type="SSC"
              time="2017 - 2020"
              place="A P T W R School (Boys), Gollaladoddi"
              info="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
            />
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default Education;
