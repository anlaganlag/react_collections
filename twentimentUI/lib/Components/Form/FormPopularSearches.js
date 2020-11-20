import useAsyncFetch from "async-fetch";
import { Fragment } from "react";
import {
  StyledDiv,
  StyledParagraph,
  StyledUL,
} from "./FormPopularSearchesStyled";
import Chip from "@material-ui/core/Chip";
import { capitalize } from "../../utils";

function FormPopularSearches({ updateParams }) {
  const { pending, data } = useAsyncFetch({ url: "/api/popular-searches" });
  return (
    <StyledDiv>
      {pending ? (
        <StyledParagraph>Loading popular searches...</StyledParagraph>
      ) : data && data.length ? (
        <Fragment>
          <StyledParagraph>Popular searches</StyledParagraph>
          <StyledUL>
            {data.map((i, index) => (
              <li key={index}>
                <Chip
                  clickable
                  label={capitalize(i)}
                  onClick={() => updateParams({ search: capitalize(i) })}
                />
              </li>
            ))}
          </StyledUL>
        </Fragment>
      ) : (
        ""
      )}
    </StyledDiv>
  );
}

export default FormPopularSearches;
