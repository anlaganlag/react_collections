import { useState, useEffect } from "react";
import { scroll, capitalize } from "../../utils";
import { scoreEmoji } from "./DataVisualizerEmoji";
import {
  StyledDiv,
  StyledH2,
  StyledUL,
  StyledA,
  StyledSpanOne,
  StyledSpanTwo,
} from "./DataVisualizerTweetsStyled";
import { ButtonSmall } from "../Styled";
import DataVisualizerTweet from "./DataVisualizerTweet";
import * as dvUtils from "./DataVisualizerUtils";

function DataVisualizerTweets({ tweetFilter, setTweetFilter, tweets: init }) {
  const [tweets, setTweets] = useState(init);

  useEffect(() => {
    setTweets(
      tweetFilter
        ? init.filter((i) => i.tweet.toLowerCase().includes(tweetFilter))
        : init
    );
  }, [tweetFilter]);

  useEffect(() => {
    setTweets(init);
  }, [init]);

  const title = tweetFilter
    ? `Tweets with "${capitalize(tweetFilter)}"`
    : "Top Tweets";

  const resetButton = tweetFilter ? (
    <ButtonSmall onClick={() => setTweetFilter()}>Reset?</ButtonSmall>
  ) : (
    ""
  );

  return (
    <StyledDiv id={scroll.id.TWEETS_LIST}>
      <StyledH2>{title}</StyledH2>
      {resetButton}
      <StyledUL>
        {tweets.map((tweet, index) => (
          <li key={index}>
            <StyledA
              href={"https://twitter.com" + tweet.link}
              target="_blank"
              _color={dvUtils.scoreCode(tweet.sentiment.score)}
            >
              <StyledSpanOne>
                {[
                  dvUtils.scoreString(tweet.sentiment.score),
                  tweet.time,
                  tweet.user.replace(/\s/g, ""),
                ]
                  .filter(Boolean)
                  .join(" · ")}
              </StyledSpanOne>
              <StyledSpanTwo>{scoreEmoji(tweet.sentiment.score)}</StyledSpanTwo>
              <DataVisualizerTweet tweet={tweet} />
            </StyledA>
          </li>
        ))}
      </StyledUL>
    </StyledDiv>
  );
}

export default DataVisualizerTweets;
