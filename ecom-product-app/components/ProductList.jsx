import ProductItem from "./ProductItem";

// Functional Component Mapping through array of products displaying info. 

function ProductList({ products }) {
    return (
        <div className="products-container">
            <h1>Featured Products:</h1>
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList;