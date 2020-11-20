import styled from "styled-components";
import Loader from "../Loader";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import ErrorIcon from "@material-ui/icons/Error";
import { Fragment } from "react";

const StyledDiv = styled.div`
  margin: auto;
  position: relative;
  opacity: 0.3;
`;

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  font-size: ${({ size }) => size * 24}px !important;
  top: -${({ size }) => size * 11.1}px;
  left: -${({ size }) => size * 10.3}px;
`;

const StyledTwitterIcon = styled(TwitterIcon)`
  position: absolute;
  font-size: ${({ size }) => size * 6.4}px !important;
  top: -${({ size }) => size * 4.7}px;
  right: -${({ size }) => size * 2.6}px;
`;

const StyledErrorIcon = styled(ErrorIcon)`
  position: absolute;
  font-size: ${({ size }) => size * 6.4}px !important;
  top: -${({ size }) => size * 4.7}px;
  right: -${({ size }) => size * 2.6}px;
`;

const Placeholder = ({ pending, error, size = 10 }) => (
  <StyledDiv>
    {!pending ? (
      <Fragment>
        <StyledSearchIcon size={size} />
        {error ? (
          <StyledErrorIcon size={size} />
        ) : (
          <StyledTwitterIcon size={size} />
        )}
      </Fragment>
    ) : (
      <Loader size={size * 10} style={{ margin: "auto" }} />
    )}
  </StyledDiv>
);

export default Placeholder;
