import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import "../css/ProjectList.css";

export default function ProjectCard(props) {
  const dict = {
    react: "React",
    "vue-dot-js": "Vue",
    redux: "Redux",
    firebase: "Firebase",
    javascript: "Javascript",
    typescript: "Typescript",
    java: "Java",
    python: "Python",
    haskell: "Haskell",
    "ux-design": "UX Design",
    graphql: "GraphQL",
    reactivex: "ReactiveX",
    vuetify: "Vuetify",
    oop: "OOP",
  };
  const { title, description, techStack, githubLink } = props;
  return (
    <Paper
      elevation={3}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "white",
        height: "90%",
        marginRight: 30,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 20,
        borderRadius: 10,
        borderStyle: "none",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <CardContent>
        <h1 style={{ fontSize: 40, fontFamily: "TT Commons Bold" }}>
          <strong>{title}</strong>
        </h1>
        <p
          style={{
            color: "#40424b",
            fontSize: 20,
            margin: 0,
            fontFamily: "TT Commons Regular",
          }}
        >
          {description}
        </p>
      </CardContent>

      <div style={{ display: "flex", flexDirection: "row", paddingLeft: 10 }}>
        {techStack.map((tech) => {
          if (tech !== "ux-design" && tech !== "oop") {
            return (
              <Tooltip title={dict[tech]} TransitionComponent={Zoom}>
                <img
                  height="26"
                  width="26"
                  style={{ marginRight: 10 }}
                  src={`https://unpkg.com/simple-icons@v3/icons/${tech}.svg`}
                />
              </Tooltip>
            );
          }
        })}
      </div>
      <CardActions>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#7700e7",
            color: "white",
            marginBottom: 12,
          }}
          onClick={() => window.open(githubLink, "_blank")}
        >
          Show more
        </Button>
      </CardActions>
    </Paper>
  );
}
