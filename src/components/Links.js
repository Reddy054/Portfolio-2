import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export const RouterLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] bg-black inline-block absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
export const SocialLink = ({ href, icon, className = "" }) => {
  return (
    <motion.a
      href={href}
      target={"_blank"}
      className={`w-6 h-auto${className}`}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.8 }}
    >
      {icon}
    </motion.a>
  );
};
