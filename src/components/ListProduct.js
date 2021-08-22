import { useState } from "react";
import ProductItem from "./ProductItem";

function ListProduct () {
    const [product, setProduct] = useState (['Shampoo', 'Soap', 'Toothpaste', 'Perfume']);

    return (
        <>
        {product.map((item, index) => (
            <ProductItem index={index} product={item} />
        ))}
        </>
    )
}

export default ListProduct