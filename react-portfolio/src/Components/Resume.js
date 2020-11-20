import React, { Component } from "react";

class Resume extends Component {
  render() {
    const data = this.props.data;
    if (!data) {
      return null;
    }
    const {skillmessage,education,work,skills} = data;
    const educationData = education.map(function (edu) {
      return (
        <div key={edu.school}>
          <h3>{edu.school}</h3>
          <p className="info">
            {edu.degree} <span>&bull;</span>
            <em className="date">{edu.graduated}</em>
          </p>
          <p>{edu.description}</p>
        </div>
      );
    });
    const workData = work.map( work=> {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    const skillsData = skills.map(function (skills) {
      const className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <div className="row edu">
          <div className="three columns header-col">
            <h1>
              <span>教育背景</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{educationData}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>项目</span>
            </h1>
          </div>

          <div className="nine columns main-col">{workData}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>技能</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skillsData}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
