import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SplitText from "react-pose-text";

import "../css/About.css";
import cv from "../files/cv.pdf";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import GetAppIcon from "@material-ui/icons/GetApp";

import TextSection from "../components/TextSection";
import Skills from "../components/Skills";

export default function AboutPage(props) {
  return (
    <div
      style={{
        paddingLeft: 102,
        paddingRight: 102,
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          alignSelf: "center",
          marginBottom: 20,
          marginRight: 50,
        }}
      >
        <div style={{ marginRight: 50 }}>
          <div className="myImage" />
        </div>

        <div style={{ alignSelf: "center" }}>
          <h1
            style={{
              margin: 0,
              fontSize: 60,
            }}
          >
            <span
              role="img"
              style={{ fontSize: 60, fontFamily: "TT Commons Bold" }}
            >
              ✌️
            </span>
            A bit about me
          </h1>
          <p
            style={{
              marginTop: 15,
              fontSize: 25,
              fontFamily: "TT Commons Regular",
              fontWeight: "normal",
              color: "#40424b",
            }}
          >
            Hi there! I am a Computer Science student currently studying at
            Monash University Malaysia. I am a passionate coder who loves to
            invent applications to solve simple or even complex problems. I
            mostly spend most of my free time making fun projects with React or
            Vue. I also love working with great teams and always give my best
            when contributing something.
            <br />
            <br />
            Now I am hungry for a real-world experience and currently seeking
            internships for software-based works.
          </p>
          <a href={cv} target="_blank" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{
                fontWeight: "bold",
                fontSize: "1.4vw",
                height: "7vh",
                backgroundColor: "#00adb5",
                color: "white",
                width: "15vw",
                borderRadius: 100,
              }}
            >
              <GetAppIcon style={{ fontSize: 30, marginRight: 10 }} />
              CV
            </Button>
          </a>
        </div>
      </div>

      <TextSection emoji="📝" title="Activities">
        <div style={{ display: "flex", textAlign: "justify" }}>
          <div style={{ flex: 1, marginRight: "5vw" }}>
            <h1>Volunteer work at Fun Mandarin</h1>
            <h2 style={{ color: "#8d93ab", margin: 0 }}>
              November 2019 - January 2020
            </h2>
            <p style={{ fontSize: 20, color: "#40424b" }}>
              On November 2019, I spent my summer break helping a local Mandarin
              tuition center back at my hometown in Jakarta to create several
              fun games for young children to learn Mandarin as a fun activity.
              It was a really, really fun experience working with the staff and
              teachers! I learned so much from them, from interacting with the
              locals and also learning a bit of Mandarin along the way! I also
              created the games with React and p5js, with my knowledge from my
              coding bootcamp React training. From this experince, I'm proud to
              be able to use my knowledge to create something that benefits
              someone!
            </p>
          </div>

          <br />

          <div style={{ flex: 1 }}>
            <h1>Hacktiv8 React Bootcamp</h1>
            <h2 style={{ color: "#8d93ab", margin: 0 }}>
              October 2019 - January 2020
            </h2>
            <p style={{ fontSize: 20, color: "#40424b" }}>
              During my summer break, I also decided to participate a React
              coding bootcamp. After learning Bootstrap from Coursera, I decided
              to step up and learn React as my next stepping stone in front-end
              web development. Overall it was one of the best decisions of my
              life! I learned so much, from state management using Redux to a
              gentle introduction into React Native. I also made a Github
              repository statistical dashboard as my final project.
            </p>
          </div>
        </div>

        <br />

        <div style={{ display: "flex", textAlign: "justify" }}>
          <div style={{ flex: 1, marginRight: "5vw" }}>
            <h1>Garudahacks Hackathon</h1>
            <h2 style={{ color: "#8d93ab", margin: 0 }}>
              14 August 2020 - 16 August 2020
            </h2>
            <p style={{ fontSize: 20, color: "#40424b" }}>
              This was my very first hackathon, and although it was virtual, it
              was really fun! Me and my friends gathered together and built a
              Zoom scheduler, using React and Firebase. Although we didn't win
              any cool prizes or anything, the experience and connections I made
              was very valuable. I learned so much from this hackathon: I
              stepped up my communication skills and gained a leadership
              personality by leading the team with a list of ideas and
              inspiration, all in a tight schedule, to learning back-end
              services such as Firestore.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <h1>Monash Mini Hackathon</h1>
            <h2 style={{ color: "#8d93ab", margin: 0 }}>
              27 August 2020 - 30 August 2020
            </h2>
            <p style={{ fontSize: 20, color: "#40424b" }}>
              Another hackathon I participated in was a small one, hosted by
              Soft-Skills. My team and I was tasked in creating an algorithm
              using Python with speed and time complexity being the priority, to
              match a list of candidates in a company with the best and cost
              efficient skills. I used hash tables, performed white-box testing
              to ensure all test cases are handled, and also used decorators to
              calculate runtime performance. In the end, we won and came first
              in the hackathon!
            </p>
          </div>
        </div>
      </TextSection>

      <TextSection emoji="🛠️" title="Skills">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Skills
            title="Front-End"
            s
            skills={[
              "React",
              "Redux",
              "Vue",
              "CSS",
              "HTML",
              "Bootstrap",
              "React Native",
            ]}
          />

          <Skills
            title="Back-End"
            skills={["MySQL", "Firebase", "NodeJS", "Git"]}
          />

          <Skills
            title="Languages"
            skills={["Python", "Java", "Javascript", "Typescript", "Haskell"]}
          />

          <Skills
            title="Practices"
            skills={[
              "Algorithms/Data Structures",
              "Object Oriented Programming",
              "UX Design",
              "Black and white box testing",
              "Functional Programming",
            ]}
          />

          <Skills
            title="Currently learning"
            skills={["scikit-learn", "C Language", "Amazon Web Services"]}
          />
        </div>
      </TextSection>
    </div>
  );
}
