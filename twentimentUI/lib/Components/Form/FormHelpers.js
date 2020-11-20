import styled from "styled-components";
import { ButtonSmall } from "../Styled";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 20px;
  justify-content: space-between;
`;

const StyledSmall = styled.small`
  color: ${({ theme }) => theme.color.dark[2]};
  margin-right: 20px;
  padding-top: 8px;
  line-height: 18px;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const FormHelpers = ({ showFilters, setShowFilters }) => (
  <StyledDiv>
    <StyledSmall>
      Type your search terms and press enter to see results.
    </StyledSmall>
    <ButtonSmall
      type="button"
      name={showFilters ? "hide_filters_main" : "show_filters"}
      title={showFilters ? "Hide filters?" : "Show filters?"}
      onClick={() => setShowFilters(!showFilters)}
    >
      {showFilters ? "Hide filters?" : "Show filters?"}
    </ButtonSmall>
  </StyledDiv>
);

export default FormHelpers;
