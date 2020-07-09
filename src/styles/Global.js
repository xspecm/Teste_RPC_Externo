import styled,
{
    createGlobalStyle,
    keyframes
} from 'styled-components';
import RobotoTTF from '../assets/fonts/Roboto-Regular.ttf';

export default createGlobalStyle`
@font-face {
    font-family: 'Roboto-Regular';
    src: url(${RobotoTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    color: #fff;
}

html, body, #root {
    min-height: 100%;
}

body {
    font-bold: 300;
    background: #000000;
    font-size: 16px;
    font-family: Roboto-Regular,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased !important;
}

button {
    cursor: pointer;
}
`;


const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingAnimation = styled.div`
    position: absolute;
    margin: 0;
    top: calc(50% - 60px);
    left: calc(50% - 60px);
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${spin} 2s linear infinite;
    transition: all 2s;
`