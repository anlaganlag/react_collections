import styled from "styled-components";
import { scroll } from "../../utils";
import MainConfigs from "./MainConfigs";
import MainHeader from "./MainHeader";
import MainMenu from "./MainMenu";
import { BackgroundOuterOne, BackgroundInner } from "../Styled";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const StyledBackgroundInner = styled(BackgroundInner)`
  padding-top: 60px;
  padding-bottom: 60px;
  min-height: 550px;
`;

function Main({ query, data, view, setView, pending, error }) {
  const configs = MainConfigs({ query });

  const currentConfigIndex = configs.findIndex((i) => i.value === view) || 0;

  const currentConfig = configs[currentConfigIndex || 0];

  const { Component } = currentConfig;

  return (
    <StyledMain id={scroll.id.MAIN}>
      <MainHeader currentConfig={currentConfig} view={view} />
      <BackgroundOuterOne>
        <MainMenu
          setView={setView}
          configs={configs}
          currentConfigIndex={currentConfigIndex}
        />
        <StyledBackgroundInner>
          <Component pending={pending} error={error} data={data} />
        </StyledBackgroundInner>
      </BackgroundOuterOne>
    </StyledMain>
  );
}

export default Main;
