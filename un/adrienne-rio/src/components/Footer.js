import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import "../css/Links.css";

import { Link, withRouter, Redirect } from "react-router-dom";

const Mailto = ({ email }) => {
  return <a href={`mailto:${email}`} />;
};

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  links: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: 60,
    paddingBottom: 35,
    // backgroundColor: "#52616b",
  },
}));

function Footer(props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.links}>
        <Link
          style={{ color: "#1e2022" }}
          onClick={() => window.open("https://github.com/idea456", "_blank")}
        >
          <GitHubIcon
            className="styledIcon"
            style={{ fontSize: "3.5vw", marginRight: 20, paddingTop: 2 }}
          />
        </Link>
        <Link
          style={{ color: "#0072b1" }}
          onClick={() =>
            window.open("https://linkedin.com/in/adrienne-rio", "_blank")
          }
        >
          <LinkedInIcon
            className="styledIcon"
            style={{ fontSize: "4vw", marginRight: 20 }}
          />
        </Link>

        <a href="mailto:riowongsoatmojo@gmail.com" style={{ color: "#1e2022" }}>
          <MailIcon className="styledIcon" style={{ fontSize: "4vw" }} />
        </a>
      </div>
    </div>
  );
}

export default withRouter(Footer);
