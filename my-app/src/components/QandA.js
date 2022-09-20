import React from "react";

const QandA = (props) => { 

    return(
     <div>
        <h3>Question: {props.question}</h3>
        <h4>Answer: {props.answer}</h4>
     </div>
    )
}

export default QandA