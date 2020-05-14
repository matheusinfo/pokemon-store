import {createGlobalStyle} from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
    *{
        border: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, input, #root{
        -webkit-font-smoothing: antialiased !important;
        text-rendering: optimizeLegibility !important;
        font-family: 'Roboto', sans-serif;
        background: black;
    }

    button{
        cursor: pointer;
    }
`;

export default GlobalStyle;