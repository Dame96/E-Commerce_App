import ProductItem from "./ProductItem";

// importing Product Item to render data for each product. 
// Functional Component Mapping through array of products displaying product data via map object

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