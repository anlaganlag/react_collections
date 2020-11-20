import styled from "styled-components";

export const BackgroundOuterOne = styled.div`
  background-color: ${({ theme }) => theme.color.light[0]};
  color: ${({ theme }) => theme.color.dark[0]};
  transition: ${({ theme }) => theme.transition};
`;

export const BackgroundOuterTwo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  background-color: ${({ theme }) => theme.color.dark[0]};
  color: ${({ theme }) => theme.color.light[2]};
`;

export const BackgroundInner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  box-sizing: border-box;
  padding: 0 30px;
`;

export const ButtonSmall = styled.button`
  color: ${({ theme }) => theme.color.dark[2]};
  font-style: italic;
  text-decoration: underline;
  cursor: pointer;
  padding-top: 8px;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const _StyledUL = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  li {
    display: flex;
  }
`;

export const WhiteBoxStyle = ({ theme }) => `
  width: 100%;
  background-color: ${theme.color.light[2]};
  padding: 15px 20px;
  border-radius: 5px;
  box-shadow: ${theme.boxShadow[3]};
  box-sizing: border-box;
  transition: ${({ theme }) => theme.transition};
  &:hover {
    box-shadow: ${theme.boxShadow[1]};
  }
`;

export const WhiteBox = styled.div`
  ${WhiteBoxStyle}
`;
