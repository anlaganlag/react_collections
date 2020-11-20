import styled from "styled-components";
import * as dvUtils from "./DataVisualizerUtils";
import { WhiteBox } from "../Styled";
import {
  StyledDiv,
  StyledH4,
  StyledH5,
  StyledUL,
  StyledButton,
} from "./DataVisualizerTokensStyled";
import { scroll, capitalize } from "../../utils";

function DataVisualizerTokens({ tokens, tweetFilter, setTweetFilter }) {
  const trays = dvUtils.getTokenTrays({ tokens, limit: 10 });

  const configs = [
    {
      title: "Positive Language",
      tray: "positive",
    },
    {
      title: "Negative Language",
      tray: "negative",
    },
  ];

  return (
    <StyledDiv className="token-trays">
      {configs.map((config, configIndex) => (
        <WhiteBox key={configIndex} className="token-tray">
          <StyledH4>{config.title}</StyledH4>
          <StyledH5>
            Most popular {config.tray} words that were tweeted.
          </StyledH5>
          <StyledUL>
            {trays[config.tray].map((token, tokenIndex) => (
              <li key={tokenIndex}>
                <StyledButton
                  isSelected={tweetFilter === token}
                  _color={config.tray}
                  onClick={() => {
                    setTweetFilter(token);
                    scroll.toTweets();
                  }}
                >
                  {capitalize(token)}
                </StyledButton>
              </li>
            ))}
          </StyledUL>
        </WhiteBox>
      ))}
    </StyledDiv>
  );
}

export default DataVisualizerTokens;
