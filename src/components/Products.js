import React from "react"
import util from "../util.js"

export default props => {
    console.log("Product props : ", props)


    return(
        <div className="row">
            {props.products.map(product => {
                return (
                    <div className="col-md-4"> 
                        <div className="thumbnail text-center">
                            <a href={`#${product.id}`} onClick={props.handleAddToCart}>
                                <img src={`/products/${product.sku}_2.jpg`} alt={product.title} />
                <div>{product.title}</div>
                            </a>
                            <div>
                                <div>{util.formatCurrency(product.price)}</div>
                                <button className="btn btn-primary"
                                onCLick={e => props.handleAddToCart(e, product)}
                                >Add to Cart </button>
                            </div>
                         </div>
                    </div>
                )
            })}
        </div>
    )
}