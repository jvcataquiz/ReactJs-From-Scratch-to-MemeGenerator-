import React from "react";
import './product.css'
const ProducJsx = (props) => {

console.log(props)
    return (
        <div className="Product">
            <div className="Product-Item">
            <div className="Product-Image">
                <img src={props.imgUrl} alt=""></img>
                </div>
            <div className="Product-Dis">
                <div>
                    <h1>{props.name}</h1>
                    <p>{props.price}</p>
                </div>
            </div>
            </div>
        </div>
    )
}



export default ProducJsx