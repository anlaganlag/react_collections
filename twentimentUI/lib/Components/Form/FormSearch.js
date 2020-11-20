import { useState, useRef, useEffect } from "react";
import {
  StyledDiv,
  StyledSVG,
  StyledInput,
  StyledLoaderContainer,
} from "./FormSearchStyled";
import Loader from "../Loader";
import { SEARCH_MIN_LENGTH, SEARCH_MAX_LENGTH } from "../../utils";

function FormSearch({ params, updateParams, pending }) {
  const [isFocus, setIsFocus] = useState();
  const [value, setValue] = useState((params && params.search) || "");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    params && params.search && setValue(params.search);
  }, [params]);

  return (
    <StyledDiv isFocus={isFocus}>
      <StyledSVG />
      <StyledInput
        required
        type="search"
        name="search"
        placeholder="Search..."
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        minLength={SEARCH_MIN_LENGTH}
        maxLength={SEARCH_MAX_LENGTH}
        disabled={pending}
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onKeyDown={(e) => e.key === "Enter" && updateParams({ search: value })}
      />
      <StyledLoaderContainer>
        {pending ? <Loader size={30} /> : ""}
      </StyledLoaderContainer>
    </StyledDiv>
  );
}

export default FormSearch;
