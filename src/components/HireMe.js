import React from "react";
import { CircularText } from "./Icons";
import Circular from "../../public/images/circular_text.png";
import Image from "next/image";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-0 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <Image
          src={Circular}
          alt="Hire Me"
          className="w-full h-auto animate-spin-slow"
        />
        <Link
          href="mailto:yaparlagangadhara@gmail.com"
          className="flex items-center justify-center
           absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
           bg-dark text-light border border-solid border-dark shadow-md w-20 h-20 rounded-full
           hover:bg-light hover:text-dark"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
