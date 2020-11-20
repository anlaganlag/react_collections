import styled from "styled-components";
import { WhiteBox } from "../Styled";
import { app } from "../../utils";

const StyledH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  // font-weight: 500;
  margin: 30px 0;
`;

const StyledP = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 24px;
  margin: 20px 0;
  a {
    color: ${({ theme }) => theme.color.blue[1]};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

function MainAbout() {
  return (
    <WhiteBox>
      <StyledP>
        {app.nameUpperCase} <i>(pronounced: hīn(d)-sīt-iz-twen(t)ē-twen(t)ē)</i>{" "}
        is an{" "}
        <a href={app.url.github} target="_blank">
          open-source application
        </a>{" "}
        that gives you a sentiment analysis of things you might be interested in
        based on what people have said on Twitter.
      </StyledP>
      <StyledH3>How does it work?</StyledH3>
      <StyledP>
        It's super simple: you type in a search term or a string of search terms
        (as you would on Google or Twitter), you press "Enter", and you see the
        results!
      </StyledP>
      <StyledP>
        Between your search and your results, we collect some of the top tweets
        that match what you're interested in and run a sentiment analysis on
        them. What you end up seeing are the unfiltered results of the sentiment
        analysis, including: the overall sentiment score, the most popular
        positive & negative words that were expressed, and the actual list of
        tweets themselves (with their own scores and highlighted sentiments).
      </StyledP>
      <StyledH3>What is a sentiment analysis?</StyledH3>
      <StyledP>
        A sentiment analysis is the process of gauging the general
        sentiment/human emotion behind text that uses natural language{" "}
        <a
          href="https://en.wikipedia.org/wiki/Natural_language_processing"
          target="_blank"
        >
          (Wikipedia: Natural Language Processing [NLP])
        </a>
        . It parses each word and phrase in order to determine whether the
        language used conveys positive, negative or neutral sentiment. It's
        super useful, though sometimes comically wrong, when combined with
        social media for understanding how people may feel about things - which
        is exactly what {app.nameUpperCase} is all about.
      </StyledP>
      <StyledP>
        <a href="https://winkjs.org/wink-sentiment/index.html" target="_blank">
          (Behind the scenes, {app.nameUpperCase} leverages a package called
          winkJS as its sentiment analyzer. Feel free to check it out for more
          details.)
        </a>
      </StyledP>
    </WhiteBox>
  );
}

export default MainAbout;
