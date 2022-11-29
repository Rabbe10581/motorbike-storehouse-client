import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderModal from './OrderModal/OrderModal';
import ProductCard from './ProductCard';

const BrandProducts = () => {
    const categories = useLoaderData();
    const [orders, setOrders] = useState(null);
    // console.log(categories);
    const products = categories.products;
    console.log(products);
    // console.log(name);
    // const { name } = products;
    return (
        <div>
            <h2 className="text-3xl">This is Brand Products</h2>
            {
                products?.map((product, i) => <ProductCard
                    key={product.i}
                    product={product}
                    setOrders={setOrders}
                ></ProductCard>)
            }

            {
                orders &&
                <OrderModal
                    orders={orders}
                    setOrders={setOrders}
                ></OrderModal>
            }

        </div>
    );
};

export default BrandProducts;