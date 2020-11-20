import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { TimelineOppositeContent } from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";

export default function Activities() {
  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography color="textSecondary">1 November 2019</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            style={{
              fontSize: 20,
              fontFamily: "IBM Plex Sans",
              fontWeight: "bold",
            }}
          >
            Fun Mandarin{" "}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            style={{
              fontSize: 20,
              fontFamily: "IBM Plex Sans",
              fontWeight: "bold",
            }}
          >
            Church Management Project
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography color="textSecondary">15 April 2020</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography color="textSecondary">14 August 2020</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            style={{
              fontSize: 20,
              fontFamily: "IBM Plex Sans",
              fontWeight: "bold",
            }}
          >
            Garudahacks Hackathon&nbsp;&nbsp;&nbsp;
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            style={{
              fontSize: 20,
              fontFamily: "IBM Plex Sans",
              fontWeight: "bold",
            }}
          >
            Soft-skills Monash Mini Hackathon
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography color="textSecondary">27 August 2020</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
