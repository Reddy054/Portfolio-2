import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import ProfilePic from "../../public/images/profile/11-removebg-preview.png";
import AnimatedNumber from "@/components/AnimatedNumber";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const About = () => {
  return (
    <>
      <Head>
        <title>Gangadhara Reddy Yaparla</title>
        <meta name="portfolio/About" content="Gangadhara Reddy Yaparla/about" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text={"Passion Fuel Purpose !!"} className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="flex flex-col col-span-3 justify-start items-start">
              <h2 className="mb-4 text-lg uppercase font-bold text-dark/75">
                About me!
              </h2>
              <p className="font-medium">
                Hi, I'm Gangadhara Reddy Yaparla, a web developer and App
                developer with a passion for creating beautiful, functional, and
                user-centered digital experiences. With 2 years of experience in
                the field. I am always looking for new and innovative ways to
                bring my clients' visions to life.
              </p>

              <p className="font-medium my-4">
                I believe that design is about more than just making things look
                pretty - it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>

              <p className="font-medium">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to develop excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div
              className="col-span-3 h-max relative rounded-2xl border-2 border-solid border-dark
            bg-light p-8"
            >
              <div className="absolute bg-dark top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]" />
              <Image src={ProfilePic} className="w-full h-auto rounded-2xl bg-dark" />
            </div>
            <div className="flex flex-col col-span-2 justify-between items-end">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={5} />+
                </span>
                <h2 className="text-xl font-medium text-dark/75 capitalize">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={12} />+
                </span>
                <h2 className="text-xl font-medium text-dark/75 capitalize">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={2} />+
                </span>
                <h2 className="text-xl font-medium text-dark/75 capitalize">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education/>
        </Layout>
      </main>
    </>
  );
};

export default About;
