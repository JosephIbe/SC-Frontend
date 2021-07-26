import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  :root{
    --primary: #ffdf00;
    --dark-bg: #262626;
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --gray-1: #EDEDED;
    --gray-2: #363636;
    --white : #FFF;
    --black: #000;
    --warning-red: #EE4B2B;
  }
  
  html{
    font-size: 10px;
    font-family: 'OpenSans'!important;
    background-color: var(--dark-bg);
  }
  
  ul,li{
    list-style: none;
  }

  li {
    color: var(--gray-1);
    &:hover {
        cursor: pointer;
    }
  }

  a{
    text-decoration: none;
  }

  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button{
    outline: none
  }

`;
export default GlobalStyles;