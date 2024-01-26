import Layout from "@/components/Layout";
import Image from "next/image";
import Profile from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";

export default function Home() {
  return (
    <>
      <main className="flex items-center justify-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image src={Profile} alt="YGR" className="w-full h-auto" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text={"Turning Vision Into Reality With Code And Design."}
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As a skilled front-end developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start gap-4 mt-2">
                <Link
                  href={""}
                  download={true}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                  border-2 border-solid border-transparent hover:text-dark hover:bg-light hover:border-dark"
                >
                  Resume
                  <LinkArrow className={"w-6 ml-2"} />
                </Link>
                <Link
                  href={"mailto:yaparlagangadhara@gmail.com"}
                  target={"_blank"}
                  className="text-lg text-dark font-medium underline capitalize"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
