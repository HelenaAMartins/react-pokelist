import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    margin: 0;
    padding: 0;
    border: 0;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient(to right, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
