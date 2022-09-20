import React from "react";
import QandA from "./QandA";
import QandAFile from "./QandAFile";


const Mapping = () => {
    const datas = QandAFile.map(data => {
        return (
            <QandA key={data.key} question={data.question} answer={data.answer} />
        )

    })
    return (
        <div>
            {datas}
        </div>
    )
}

export default Mapping