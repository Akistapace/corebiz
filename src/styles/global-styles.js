import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *, *::before,*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  input {

    &:focus-visible,
    &:focus-within,
    &:focus {
      border: 1px solid #BDBDBD
    }
  }
  input, button, textarea {
    outline: none
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  html, body {
    height: 100%;
    min-height: 100vh;
    font-family: 'Nunito', sans-serif;
  }
  main {
    flex: 1 0 auto;
  }
  footer {
    flex-shrink: 0;
  }
  .swiper-pagination {
    bottom: 20px;
  }
  .swiper-pagination-bullet {
    height: 10px;
    width: 10px;
    background-color: #BDBDBD;
    opacity: 1;
    margin: 0 10px;
    &-active {
      background-color: #F8475F;;
    }
  }
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #000;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

`;


export default GlobalStyles;