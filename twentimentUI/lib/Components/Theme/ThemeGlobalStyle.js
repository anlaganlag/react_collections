import { createGlobalStyle } from "styled-components";

const ThemeGlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.fontFamily};
  }
  
  body {
    display: flex;
    margin: 0;
    min-height: 100vh;
  }
  
  #__next {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  
  main {
    display: flex;
    flex-grow: 1;
    word-break: break-word;
    padding-bottom: 60px;
  }
  
  textarea:focus,
  button:focus,
  input:focus,
  select:focus,
  a:focus,
  svg:focus {
    outline: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  small,
  pre,
  button,
  textarea,
  select,
  a {
    color: inherit;
    margin: 0;
    padding: 0;
    border: 0;
    background: unset;
    font-size: inherit;
    font-family: inherit;
    width: fit-content;
  }
  
  [disabled] {
    opacity: 0.6;
  }
  
  [disabled]:hover,
  [disabled]:focus,
  [disabled]:focus-within {
    opacity: 0.6;
    text-decoration: none !important;
    background-color: unset !important;
    cursor: auto !important;
  }
`;

export default ThemeGlobalStyle;
