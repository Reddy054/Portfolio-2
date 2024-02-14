import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const SkillName = ({ name, x, y }) => {
    return (
      <motion.div
        className="flex justify-center items-center bg-dark text-light font-semibold
         py-3 px-6 rounded-full shadow-dark cursor-pointer absolute"
        whileHover={{ scale: 1.05 }}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        {name}
      </motion.div>
    );
  };
  return (
    <>
      <h2 className="w-full text-center font-bold text-8xl mt-64">Skills</h2>
      <div className="relative w-full h-screen flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex justify-center items-center bg-dark text-light font-semibold p-6 rounded-full shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web/App
        </motion.div>
        <SkillName name="HTML" x="-25vw" y="2vw" />
        <SkillName name="CSS" x="-5vw" y="-10vw" />
        <SkillName name="Javascript" x="20vw" y="6vw" />
        <SkillName name="ReactJS" x="0vw" y="12vw" />
        <SkillName name="NextJS" x="-20vw" y="-15vw" />
        <SkillName name="Bootstrap" x="15vw" y="-12vw" />
        <SkillName name="Material UI" x="32vw" y="-5vw" />
        <SkillName name="React Native" x="0vw" y="-20vw" />
        <SkillName name="Deployment" x="-25vw" y="18vw" />
        <SkillName name="Tailwind CSS" x="18vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
