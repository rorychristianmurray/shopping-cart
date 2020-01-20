import React from "react"

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
                         </div>
                    </div>
                )
            })}
        </div>
    )
}