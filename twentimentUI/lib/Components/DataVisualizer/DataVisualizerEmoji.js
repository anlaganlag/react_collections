import styled from "styled-components";
import * as dvUtils from "./DataVisualizerUtils";

const StyledSpan = styled.span`
  position: absolute;
  font-size: 30px;
  right: 0px;
  z-index: ${({ theme }) => theme.zIndex.mainContentEmoji};
`;

export function scoreEmoji(score) {
  const scale = {
    "100": "🤩",
    "90": "😍",
    "80": "🥰",
    "70": "🤗",
    "60": "😊",
    "50": "😁",
    "40": "😄",
    "30": "😃",
    "20": "😀",
    "10": "🙂",
    "0": "😐",
    "-10": "🙁",
    "-20": "😞",
    "-30": "😣",
    "-40": "😖",
    "-50": "😩",
    "-60": "😫",
    "-70": "😤",
    "-80": "😠",
    "-90": "😡",
    "-100": "🤬",
  };
  return scale[`${Math.ceil(dvUtils.limitedScore(score) / 10) * 10}`];
}

export const DataVisualizerEmoji = ({ score }) => (
  <StyledSpan>{scoreEmoji(score)}</StyledSpan>
);
