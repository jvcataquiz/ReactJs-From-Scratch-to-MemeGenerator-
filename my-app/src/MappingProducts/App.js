import React from "react";
import ProducJsx from "./ProductJsx";
import Products from "./Products"
const App = () => {
const productComponents = Products.map(product => {
    return(
        <ProducJsx key={product.id} name={product.name} imgUrl={product.imgUrl} price={product.price}/>
    )
})

    return(
        <div className="Product-main">
          {productComponents}
        </div>
    )
}



export default App