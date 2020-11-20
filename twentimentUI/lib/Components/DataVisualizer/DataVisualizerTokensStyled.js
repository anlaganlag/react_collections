import styled from "styled-components";
import * as dvUtils from "./DataVisualizerUtils";
import { _StyledUL } from "../Styled";

export const StyledDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 50px;
  div:not(:first-child) {
    margin-top: 20px;
  }
`;

export const StyledH4 = styled.h4`
  font-weight: normal;
  font-size: 20px;
`;

export const StyledH5 = styled.h5`
  font-weight: normal;
  font-size: 15px;
  margin-top: 5px;
`;

export const StyledUL = styled(_StyledUL)`
  flex-direction: row;
  margin: 5px 0;
  li {
    margin-right: 10px;
    margin-top: 10px;
  }
`;

export const StyledButton = styled.button`
  font-size: 14px;
  background-color: ${dvUtils.scoreColor};
  padding: 5px 10px;
  border-radius: 3px;
  transition: ${({ theme }) => theme.transition};
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.color._dark[0]};
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "")};
  opacity: ${({ isSelected }) => (isSelected ? "1" : "0.8")};
  &:hover {
    opacity: 0.9;
  }
`;
