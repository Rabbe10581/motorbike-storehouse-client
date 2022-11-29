import React from 'react';
import BrandsCategories from '../../BrandsCategories/BrandCategories/BrandsCategories';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrandsCategories></BrandsCategories>
        </div>
    );
};

export default Home;