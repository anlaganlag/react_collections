import React from "react";
import ProjectComp from "./ProjectComp";
import "./Projects.css";
import { Items } from "../Data/Items";
const Projects = () => {
  return (
    <div className="project-parent">
      {Items.map((item) => {
        return (
          <ProjectComp
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.desc}
            img={item.img}
            techs={item.techs}
            link={item.link}
            openLink={item.openLink}
            // everyDelay={counter}
          />
        );
      })}
    </div>
  );
};

export default Projects;
