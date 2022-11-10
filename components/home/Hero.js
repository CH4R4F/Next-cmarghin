import Link from "next/link";
import Image from "next/image";
import myPicture from "../../assets/images/me.png";
import { FaHackerrank, FaGithub, FaTwitter } from "react-icons/fa";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="dark:hero-dark hero pt-10 px-4 overflow-hidden">
      <div className="wrapper flex flex-col laptop:flex-row laptop:justify-between justify-center items-start laptop:items-center relative min-h-[500px] tablet:min-h-[650px] !z-[5]">
        <div className="hidden tablet:block absolute bottom-0 laptop:left-1/2 tablet:right-10 laptop:right-auto laptop:-translate-x-1/2 select-none">
          <Image
            placeholder="blur"
            src={myPicture}
            alt="an old picture of me"
            width={380}
          />
          <span className="w-32 h-32 rounded-full bg-dark-primary text-white flex items-center justify-center text-xl font-semibold -rotate-45 absolute top-1/3 -right-6 font-heading">
            Developer
          </span>
        </div>
        <div className="tablet:block select-none">
          <h1 className="hero-title opacity-5 laptop:opacity-100 -rotate-12 laptop:rotate-0 text-light-heading dark:text-dark-heading text-[200px] absolute laptop:relative -z-30 top-0 laptop:text-[150px] font-bold">
            Charaf <br /> Marghin
          </h1>
        </div>
        <div className="mx-auto text-center tablet:text-left tablet:mx-0 laptop:max-w-xs max-w-lg tablet:max-w-md laptop:translate-y-1/2 laptop:ml-14 xl:!mr-20">
          <span className="font-semibold text-light-primary text-lg">
            HI THERE
          </span>
          <h3 className="text-light-heading dark:text-dark-heading text-4xl laptop:text-2xl font-semibold mb-2">
            I&apos;m A Web Developer And Designer.
          </h3>
          <p className="text-black/70 dark:text-dark-subText text-base mb-4 max-w-[90%] mx-auto tablet:mx-0">
            I spend my time solving problems and learning new technologies that
            will help <em>ME</em> and people build their own businesses.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button href="/about" text="About Me" />
            <div className="flex items-center space-x-4 tablet:flex-1">
              <a
                className="opacity-70 hover:opacity-100 duration-300"
                href="https://github.com/CH4R4F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                className="opacity-70 hover:opacity-100 duration-300"
                href="https://twitter.com/CMarghin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                className="opacity-70 hover:opacity-100 duration-300"
                href="https://hackerrank.com/CMarghin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaHackerrank className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
