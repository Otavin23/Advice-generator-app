import styled from "styled-components";



export const MainBg = styled.main`
    width: 450px;
    background: hsl(217, 19%, 24%);
    border-radius: 0.7rem;
    box-shadow: 0 0 15px 1px hsl(218, 23%, 16%);
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 470px){
        width: 400px;
    }
    @media (max-width: 409px){
        width: 350px;
    }
    @media (max-width: 361px){
        width: 310px;
    }
`

export const MainContainer = styled.div`
    width: 85%;
    height: 80%;
    .adviceID{
        width: 100%;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        p{
            color: hsl(150, 100%, 66%);
            font-size: 14px;
            letter-spacing: 2px;
            font-weight: 400px;
            opacity: 0.7;
        }
    }
    .resultText{
        height: 60%;
        margin-top: 0.5rem;
        h1{
            font-size: 22px;
            color: hsl(193, 38%, 86%);
            text-align: center;
        }
    }
    .fotter-row{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .generatorText{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: 1.5rem;
        button{
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: hsl(150, 100%, 66%);   
            cursor: pointer;
            &:hover{
                box-shadow: 0 0 1em hsl(150, 100%, 66%)
            }
        }
    }
`


