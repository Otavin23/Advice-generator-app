import axios from "axios"
import { useEffect, useState } from "react"
import { IAdvice } from "../../@types"
import * as S from "./style"



const Main = ()=>{

    const [advice, setAdvice] = useState<IAdvice>()
    
    async function getAdvice() {
        const { data } = await axios.get<IAdvice>("https://api.adviceslip.com/advice")
        setAdvice(data)
    }  

    return (
        <S.MainBg>
            <S.MainContainer>
                <div className="adviceID">
                    {advice?.slip.id ? (
                        <p>ADVICE #{advice.slip.id}</p>
                    ): (
                        <p>ADVICE #117</p>
                    )}
                </div>
                <div className="resultText">
                    {advice?.slip.advice ? (
                        <h1>"{advice?.slip.advice}"</h1>
                    ): (
                        <h1>"It ts easy to sit up and take
                            notice, what's difficult is gretting
                            up and taking action"</h1>
                    )}
                </div>
                <div className="fotter-row">
                    <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
                </div>
                <div className="generatorText">
                    <button onClick={getAdvice}>
                        <svg width="24" height="23" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
                    </button>
                </div>
            </S.MainContainer>
        </S.MainBg>
    )
}
export default Main 