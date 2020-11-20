import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  margin: 30px 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.dark[2]};
`;

export const StyledParagraph = styled.p`
  height: 30px;
  display: flex;
  align-items: center;
  margin: 10px 10px;
`;

export const StyledUL = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
  justify-content: center;
  li {
    margin: 5px 10px 5px 0;
    text-transform: capitalize;
  }
`;
