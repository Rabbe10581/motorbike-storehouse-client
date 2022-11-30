import React from 'react';

const MyProductCard = ({ product, handleDeleteProducts }) => {
    console.log(product);
    const { _id, name, email, Image, price, phone, condition, location, year, brandName } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product.name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">Advertise</div>
                    <div onClick={() => handleDeleteProducts(_id)} className="badge badge-outline">Delete</div>
                </div>
            </div>
        </div>
    );
};

export default MyProductCard;