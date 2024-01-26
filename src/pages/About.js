import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

const About = () => {
  return (
    <>
      <Head>
        <meta name="description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16" />
        <AnimatedText text={"Passion Fuel burns"} />
        <div className="grid w-full grid-cols-8 gap-16">
          <div>
            <h2 className="mb-4 text-lg uppercase font-bold">About me!</h2>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
