// Functional Component for product information(product card) with button to add to cart

import App from '../src/App.jsx'



function ProductItem({ product }) {
    return (
        <div className="product-item">
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <img src={product.image} alt="product image"/>
            <p>{product.description}</p>
            <button className="btn" >Add To Cart</button>
        </div>
    )
}

export default ProductItem;