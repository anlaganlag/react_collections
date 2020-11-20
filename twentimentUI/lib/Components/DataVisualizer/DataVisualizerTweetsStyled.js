import styled from "styled-components";
import { _StyledUL, WhiteBoxStyle } from "../Styled";
import * as dvUtils from "./DataVisualizerUtils";

export const StyledDiv = styled.div`
  flex: 1;
`;

export const StyledH2 = styled.h2`
  font-size: 40px;
`;

export const StyledUL = styled(_StyledUL)`
  margin: 0;
  max-height: 430px;
  overflow: auto;
  flex-wrap: unset;
  margin-top: 30px;
  padding: 15px;
  display: block;
  li:not(:first-child) {
    margin-top: 30px;
  }
`;

export const StyledA = styled.a`
  display: flex;
  flex-direction: column;
  position: relative;
  opacity: 0.9;
  line-height: 22px;
  text-decoration: none;
  
  &:hover {
    // text-decoration: underline;
    opacity: 1;
  }
  
  ${WhiteBoxStyle}
  
  background-color: ${dvUtils.scoreColor};
  color: ${({ theme }) => theme.color._dark[0]};

  span.positive {
    font-weight: bold;
    color: ${({ theme }) => theme.color.green[0]};
  }
  
  span.negative {
    font-weight: bold;
    color: ${({ theme }) => theme.color.blue[0]};
  }
`;

export const StyledSpanOne = styled.span`
  font-size: 12px;
  opacity: 0.6;
  line-height: 16px;
  margin-bottom: 5px;
`;

export const StyledSpanTwo = styled.span`
  position: absolute;
  top: 11px;
  right: 19px;
`;
