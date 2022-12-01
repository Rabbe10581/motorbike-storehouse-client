import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';

const AllProducts = () => {

    const { data: allproducts = [] } = useQuery({
        queryKey: ['allproducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allproducts');
            const data = await res.json();
            console.log(data);
            return data;
        }
    });

    return (
        <div>
            {
                allproducts.map(product => <AdvertisedProducts
                    key={product._id}
                    product={product}
                ></AdvertisedProducts>)
            }
        </div>
    );
};

export default AllProducts;