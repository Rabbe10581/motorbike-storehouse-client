import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const BrandProducts = () => {
    const categories = useLoaderData();
    // console.log(categories);
    const products = categories.products;
    console.log(products);
    // console.log(name);
    // const { name } = products;
    return (
        <div>
            <h2 className="text-3xl">This is Brand Products</h2>
            {
                products.map((product, i) => <ProductCard
                    key={product.i}
                    product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default BrandProducts;