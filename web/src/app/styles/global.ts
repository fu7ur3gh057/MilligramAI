import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
    * {
        @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;800&display=swap');
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
    }
    ::-webkit-scrollbar {
        width: 8px;
        cursor: pointer;
    }

    ::-webkit-scrollbar {
        width: 5px;
        cursor: pointer;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #898989;
        border-radius: 6px;
    }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
`;


export default GlobalStyle;