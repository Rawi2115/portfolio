import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { SiReactrouter, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TabTitle } from "../data";

export default function Home() {
  TabTitle("Home");
  return (
    <div className="grid text-center md:text-left items-center px-3 lg:pl-32 xl:pl-72 md:pt-28 gap-16  pt-10">
      <h2 className="font-bold md:text-5xl text-4xl md:max-w-[450px]">
        Welcome to my Portfolio
      </h2>
      <div className="flex items-center md:flex-row md:gap-16 flex-col gap-6">
        <p className="pt-5 text-lg md:text-2xl md:max-w-md">
          I'm Abdulhamid, a frontend developer with experties in React,React
          Router,tailwind and typescript i also study computer engineering{" "}
        </p>
        <div className="flex flex-col gap-10 items-center">
          <FaReact className="text-cyan-600" size="80" />
          <div className="flex gap-16">
            <SiReactrouter className="text-red-700" size="80" />
            <SiTailwindcss className="text-blue-400" size="80" />
          </div>
          <SiTypescript size="60" className="text-blue-600" />
        </div>
      </div>
      <div className="flex justify-self-center md:justify-self-start items-center">
        <p className="text-lg">You can contact at me at: </p>
        <a
          target="_blank"
          className="ml-3"
          href="https://www.linkedin.com/in/abdulhamid-haitham-3a4744246/"
        >
          <FaLinkedin size="25" />
        </a>
        <a
          target="_blank"
          className="ml-3  rounded-full"
          href="https://github.com/Rawi2115"
        >
          <FaGithub size="25" />
        </a>
      </div>
    </div>
  );
}
