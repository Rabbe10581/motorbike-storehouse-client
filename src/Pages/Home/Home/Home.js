import React from 'react';
import BrandsCategories from '../../BrandsCategories/BrandCategories/BrandsCategories';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import AdvProductCard from '../AdvertisedProducts/AdvProductCard';
import AllProducts from '../AllProducts/AllProducts';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrandsCategories></BrandsCategories>
            {/* <AdvProductCard></AdvProductCard> */}
            {/* <AllProducts></AllProducts> */}
            <AdvertisedProducts></AdvertisedProducts>
        </div>
    );
};

export default Home;