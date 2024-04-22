import data, { TabTitle } from "../data";
import { SiReactrouter } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Projects() {
  TabTitle("Projects");
  const projectsElements = data.map((project) => {
    const projectTags = project.tags.map((tag) => {
      if (tag === "React") {
        return <FaReact className="text-blue-500" size="25" key={tag} />;
      }
      if (tag === "React-Router") {
        return <SiReactrouter className="text-red-500" size="25" key={tag} />;
      }
      if (tag === "Vanilla Javascript") {
        return (
          <IoLogoJavascript
            className="text-yellow-500 bg-black"
            size="25"
            key={tag}
          />
        );
      }
    });

    return (
      <a
        className=" flex w-80 scale-200 duration-100 hover:scale-125 hover:duration-200"
        key={project.id}
        href={project.projectUrl}
        target="_blank"
      >
        <div className="project">
          <img className="w-80" src={project.projectImg} alt="" />
          <h3 className="font-bold underline">{project.projectName}</h3>
          <p>{project.description}</p>
          <div className="flex gap-2">{projectTags}</div>
        </div>
      </a>
    );
  });

  return <div className="projects-container">{projectsElements}</div>;
}
