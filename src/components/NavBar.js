import React from "react";
import Logo from "@/components/Logo";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { RouterLink, SocialLink } from "./Links";

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <RouterLink href="/" title="Home" className="mr-2" />
        <RouterLink href="/About" title="About" className="mx-4" />
        <RouterLink href="/Contact" title="Contact" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center gap-3">
        <SocialLink href={"#"} icon={<GithubIcon />} />
        <SocialLink
          href={"http://www.linkedin.com/in/gangadhara-reddy-yaparla"}
          icon={<LinkedInIcon />}
        />
      </nav>
      <div className="absolute left-[50%] t-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
