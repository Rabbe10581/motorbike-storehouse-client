import React from 'react';

const OrderCard = ({ order }) => {
    const { name, email, phone, resalePrice, location, Image } = order;
    console.log(order);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={Image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">${resalePrice}</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>

                <div className="card-actions justify-center">
                    <div className="badge badge-outline">{email}</div>
                    <div className="badge badge-outline">{location}</div>
                    <div className="badge badge-outline">{phone}</div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;