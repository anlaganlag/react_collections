import styled from "styled-components";
import { scroll } from "../../utils";
import { DataVisualizer } from "../DataVisualizer";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
`;

const StyledH4 = styled.h4`
  font-size: 30px;
  opacity: 0.9;
  margin-bottom: 40px;
  padding-bottom: 10px;
  border-bottom: solid 6px
    ${({ candidate, theme }) =>
      candidate === "Joe Biden" || candidate === "Hillary Clinton"
        ? theme.color.blue[0]
        : theme.color.red[0]};
`;
const MainElectionDataVisualizer = ({ candidate, date, ...data }) => (
  <StyledDiv id={scroll.id.ELECTION_DATA_VISUALIZER}>
    <StyledH4 candidate={candidate}>
      {candidate} ({date.toLocaleDateString()})
    </StyledH4>
    {data.tweets ? (
      <DataVisualizer {...data} />
    ) : (
      "We're not there yet!! Stay tuned..."
    )}
  </StyledDiv>
);

export default MainElectionDataVisualizer;
