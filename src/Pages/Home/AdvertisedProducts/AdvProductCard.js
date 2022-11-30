import React from 'react';

const AdvProductCard = ({ advProduct }) => {
    const { name, Image, price, phone, condition, location, year } = advProduct;
    console.log(advProduct);
    return (
        <div className="card w-96 h-[400px] bg-base-100 shadow-xl my-6">
            <figure><img src={Image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{location}</h2>
                <p>{condition}</p>
                <div className='flex'>
                    <h2>{price}</h2>
                </div>
            </div>
        </div>
    );
};

export default AdvProductCard;