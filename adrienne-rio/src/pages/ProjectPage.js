import React, { useState, useEffect } from "react";
import "bootstrap/scss/bootstrap.scss";
import ProjectCard from "../components/ProjectCard";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Grid from "@material-ui/core/Grid";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Footer from "../components/Footer";
import "../css/Slider.css";
import "../css/ProjectList.css";
import "glider-js/glider.min.css";
import { dict, projects } from "../constants";
import { GridListTile } from "@material-ui/core";

export default function ProjectPage(props) {
  const [list, setList] = useState(projects);

  const [activeTags, setActiveTags] = useState([]);

  const [tags, setTags] = useState([
    { name: "All", active: true },
    { name: "React", active: false },
    { name: "Redux", active: false },
    { name: "Vue", active: false },
    { name: "Firebase", active: false },
    { name: "Javascript", active: false },
    { name: "Typescript", active: false },
    { name: "Java", active: false },
    { name: "Python", active: false },
    { name: "Haskell", active: false },
    { name: "UX Design", active: false },
    { name: "OOP", active: false },
  ]);

  const checkTechStack = (techStack) => {
    // check if the active tags are a subset of the tech stack in the project
    return activeTags.every((tag) => techStack.includes(tag));
  };

  useEffect(() => {
    setList(projects.filter((p) => checkTechStack(p.techStack)));
    if (activeTags.length === 0) {
      tags[0].active = true;
    }
  }, [activeTags]);

  return (
    <div
      style={{
        display: "flex",
        marginTop: 100,
        marginBottom: 90,
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        fontFamily: "TT Commons Bold",
      }}
    >
      <h1
        style={{
          width: 250,
          fontSize: 75,
          margin: 0,
          marginLeft: 102,
          // borderBottom: "8px solid #faed27",
        }}
      >
        PROJECTS
      </h1>

      <div
        style={{
          marginBottom: 15,
          marginLeft: 102,
          marginRight: 90,
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {tags.map((tag) => {
          return (
            <Button
              disableRipple
              style={{
                textTransform: "none",
                padding: 0,
                fontSize: 16,
                elevation: 0,
                backgroundColor: "transparent",
              }}
              className="tag"
              onClick={(e) => {
                tag.active = !tag.active;
                if (tags[0].active && tag !== tags[0]) {
                  tags[0].active = false;
                  setActiveTags([]);
                }
                if (tag.active) {
                  if (tag.name === "All") {
                    setActiveTags([]);
                    tags.map((t) => {
                      if (t.name !== "All") {
                        t.active = false;
                      }
                    });
                  } else {
                    setActiveTags([...activeTags, dict[tag.name]]);
                  }
                } else {
                  if (tag.name === "All") {
                    setActiveTags([
                      "react",
                      "redux",
                      "graphql",
                      "vue-dot-js",
                      "vuetify",
                      "firebase",
                      "javascript",
                      "typescript",
                      "reactivex",
                      "java",
                      "python",
                      "haskell",
                      "ux-design",
                      "oop",
                    ]);
                  } else {
                    setActiveTags(
                      activeTags.filter((t) => t !== dict[tag.name])
                    );
                  }
                }
              }}
            >
              <h1
                style={{
                  fontFamily: "TT Commons Bold",
                  margin: 0,
                  fontSize: 35,
                  marginRight: 18,
                }}
                className={tag.active ? "tagActive" : "tag"}
              >
                {tag.name}
              </h1>
            </Button>
          );
        })}
      </div>

      {list.length === 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            fontSize: 20,
            height: 0.48 * window.innerHeight,
          }}
        >
          <h1>No projects found 🤷‍♂️</h1>
        </div>
      )}
      {list.length !== 0 && (
        <CarouselProvider
          naturalSlideWidth={400}
          naturalSlideHeight={0.3 * window.innerHeight}
          totalSlides={list.length}
          visibleSlides={2}
          isIntrinsicHeight
        >
          <Grid container alignItems="center" justifyContent="center">
            <Grid xs={1} sm={1} md={1} lg={1} xl={1}>
              <ButtonBack
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  marginLeft: "4vw",
                }}
              >
                <ArrowBackIosIcon style={{ fontSize: 40 }} />
              </ButtonBack>
            </Grid>
            <Grid xs={10} sm={10} md={10} lg={10} xl={10}>
              <Slider>
                {list.map((project, i) => {
                  return (
                    <Slide index={i}>
                      <ProjectCard
                        key={i}
                        style="projectCard"
                        title={project.title}
                        description={project.description}
                        techStack={project.techStack}
                        githubLink={project.githubLink}
                      />
                    </Slide>
                  );
                })}
              </Slider>
            </Grid>

            <Grid xs={1} sm={1} md={1} lg={1} xl={1}>
              <ButtonNext
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <ArrowForwardIosIcon style={{ fontSize: 40 }} />
              </ButtonNext>
            </Grid>
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            {list.map((p, i) => {
              if (i % 2 === 0) {
                return <Dot slide={i} />;
              }
            })}
          </div>
        </CarouselProvider>
      )}
    </div>
  );
}
