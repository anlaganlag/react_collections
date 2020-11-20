import styled from "styled-components";
import { useState } from "react";
import Placeholder from "../Placeholder";
import { DataVisualizerEmoji } from "./DataVisualizerEmoji";
import DataVisualizerScore from "./DataVisualizerScore";
import DataVisualizerTokens from "./DataVisualizerTokens";
import DataVisualizerTweets from "./DataVisualizerTweets";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  @media (max-width: 750px) {
    #tweets-list {
      flex: unset;
      width: 100%;
      margin-top: 30px;
    }
    .token-trays {
      margin-right: 0;
    }
  }
  @media (max-width: 500px) {
    .token-trays {
      flex: unset;
      width: 100%;
      margin-top: 30px;
      margin-left: 0;
    }
  }
`;

function DataVisualizer({ pending, error, tweets, cumulative }) {
  const [tweetFilter, setTweetFilter] = useState();
  return pending || (!tweets || !cumulative) ? (
    <Placeholder pending={pending} error={error} />
  ) : (
    <StyledDiv>
      <DataVisualizerEmoji score={cumulative.score} />
      <DataVisualizerScore score={cumulative.score} />
      <DataVisualizerTokens
        tokens={cumulative.tokenizedPhrase}
        tweetFilter={tweetFilter}
        setTweetFilter={setTweetFilter}
      />
      <DataVisualizerTweets
        tweets={tweets}
        tweetFilter={tweetFilter}
        setTweetFilter={setTweetFilter}
      />
    </StyledDiv>
  );
}

export default DataVisualizer;
