import { createGlobalStyle } from "styled-components";


export const CreateGlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Manrope', sans-serif;
    }
    body{
        background:hsl(218, 23%, 16%);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
`