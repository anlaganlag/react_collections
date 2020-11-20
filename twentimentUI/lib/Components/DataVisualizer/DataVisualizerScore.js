import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as dvUtils from "./DataVisualizerUtils";
import Box from "@material-ui/core/Box";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

const StyledBoxOne = styled(Box)`
  width: fit-content;
`;

const StyledBoxTwo = styled(Box)`
  color: ${({ theme }) => theme.color._dark[0]};
  background-color: ${dvUtils.scoreColor};
  border-radius: 50%;
  opacity: 0.8;
  font-size: 30px;
`;

const StyledSpan = styled.span`
  text-align: center;
  width: 100px;
  margin-top: 15px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-style: italic;
  opacity: 0.6;
`;

function DataVisualizerScore({ score = 0 }) {
  const limitedScore = dvUtils.limitedScore(score);
  const scoreCode = dvUtils.scoreCode(score);
  return (
    <StyledDiv>
      <StyledBoxOne position="relative" display="inline-flex">
        <CircularProgress
          variant="static"
          value={limitedScore}
          size={100}
          thickness={2}
        />
        <StyledBoxTwo
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          _color={scoreCode}
        >
          {dvUtils.scoreString(limitedScore)}
        </StyledBoxTwo>
      </StyledBoxOne>
      {score !== limitedScore ? (
        <StyledSpan>Total: {dvUtils.scoreString(score)}</StyledSpan>
      ) : (
        ""
      )}
    </StyledDiv>
  );
}

export default DataVisualizerScore;
