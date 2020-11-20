import useAsyncFetch from "async-fetch";
import { Fragment, useState } from "react";
import styled from "styled-components";
import Placeholder from "../Placeholder";
import { WhiteBox } from "../Styled";
import MainElectionAvatars from "./MainElectionAvatars";
import MainElectionGraph from "./MainElectionGraph";
import MainElectionDataVisualizer from "./MainElectionDataVisualizer";
import { app, scroll } from "../../utils";

const StyledWhiteBox = styled(WhiteBox)`
  background-color: ${({ theme }) => theme.color._light[2]} !important;
`;

const StyledP = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color._dark[2]};
  margin-top: 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

function MainElection({ year }) {
  const [graphDate, setGraphDate] = useState();

  const { data: graphPoints, pending, error } = useAsyncFetch({
    url: "/api/election/graph-points",
    query: { year },
    onSuccess: (responseJSON) =>
      setGraphDate({
        candidate: responseJSON[0].label,
        date: new Date(responseJSON[0].data[responseJSON[0].data.length - 1].x),
      }),
  });

  const { data: graphDateData } = useAsyncFetch({
    useEffectDependency: [graphDate],
    condition: Boolean(graphDate),
    url: "/api/election/date",
    query: graphDate,
    onSuccess: scroll.toElectionDataVisualizer,
  });

  const hasData = Boolean(graphPoints && graphPoints.length);

  const candidates = hasData && graphPoints.map((i) => i.label);

  return pending || !hasData ? (
    <Placeholder pending={pending} error={error} />
  ) : (
    <Fragment>
      <StyledWhiteBox>
        <MainElectionAvatars candidates={candidates} />
        <MainElectionGraph
          initialData={graphPoints}
          setGraphDate={setGraphDate}
        />
        <StyledP>
          Click a point in the graph to see detailed {app.nameUpperCase}{" "}
          results. <span>(y-axis: score, x-axis: date)</span>
        </StyledP>
      </StyledWhiteBox>
      {graphDateData ? (
        <MainElectionDataVisualizer {...{ ...graphDateData, ...graphDate }} />
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default MainElection;
