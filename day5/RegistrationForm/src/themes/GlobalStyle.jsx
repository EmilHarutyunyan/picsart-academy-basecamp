import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'SF Pro Display', sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: #FCFDFD;
    background-color: #131418;
    
  }
  ul li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  button {
    border: none;
    background-color: transparent;
  }

`;
