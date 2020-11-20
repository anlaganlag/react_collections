import styled from "styled-components";
import CancelIcon from "@material-ui/icons/Cancel";

export const StyledDiv = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${({ theme }) => theme.color._light[2]};
  border-radius: 5px;
  box-sizing: border-box;
  padding: 40px 30px;
  box-shadow: ${({ theme }) => theme.boxShadow[2]};
  display: flex;
  flex-wrap: wrap;
  top: 210px;
  z-index: ${({ theme }) => theme.zIndex.searchFilter};
`;

export const StyledCancelIcon = styled(CancelIcon)`
  color: ${({ theme }) => theme.color._dark[2]};
`;

export const StyledHeader2 = styled.h2`
  color: ${({ theme }) => theme.color._dark[0]};
  display: flex;
  align-items: center;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.xxxl};
`;

export const StyledEmoji = styled.span`
  font-size: 30px;
  margin-left: 10px;
  display: contents;
`;

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.color._dark[0]};
  margin-top: 10px;
  line-height: 27px;
`;

export const StyledDiv2 = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
