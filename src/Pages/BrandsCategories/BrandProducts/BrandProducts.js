import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderModal from './OrderModal/OrderModal';
import ProductCard from './ProductCard';

const BrandProducts = () => {
    const categories = useLoaderData();
    const [orders, setOrders] = useState(null);
    console.log({ categories });
    // const products = categories.products;
    // console.log(products);
    // console.log(name);
    // const { name } = products;
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 my-6 mx-auto'>
                {
                    categories?.map((product, i) => <ProductCard
                        key={i}
                        product={product}
                        setOrders={setOrders}
                    ></ProductCard>)
                }
            </div>

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