import React from "react";
import './Qna.css'
import api from './../api'
const QnA=(props)=>{
      async function abcd(event){
        event.preventDefault();
        let ans=document.querySelectorAll('.feild')[props.num-1].value;
        let check=await api.get(`/?theme=${props.theme}&qnum=${props.num}&answer=${ans}`);
        console.log(check.data)
    }
    return(
    <>
    <div className="question">
            <h1>Question {props.num}</h1>
            <hr/>
            <p>{props.question}</p>
            <form>
            <input className="feild" type="text" required /><br/>
            <input type="submit" className="btn" onClick={abcd} value="Submit"/>
            </form>
    </div>
        
    </>
    )
}
export default QnA;