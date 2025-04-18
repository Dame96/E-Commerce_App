// Functional Component to display product information. 


function ProductItem({ product }) {
    return (
        <div className="product-item">
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductItem;