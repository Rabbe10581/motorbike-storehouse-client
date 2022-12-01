import React, { useEffect, useState } from 'react';
import AdvProductCard from './AdvProductCard';

const AdvertisedProducts = () => {
    // console.log(product);
    // const { advertisement } = product;
    const [advertisementProducts, setAdvertisementProducts] = useState([])

    useEffect(() => {
        fetch(`https://resale-storehouse-server.vercel.app/anik`, {})
            .then(res => res.json())
            .then(data => setAdvertisementProducts(data))
    }, [])
    console.log(advertisementProducts);

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                advertisementProducts?.map(advProduct => <AdvProductCard
                    key={advProduct._id}
                    advProduct={advProduct}
                ></AdvProductCard>)
            }
        </div>
    );
};

export default AdvertisedProducts;