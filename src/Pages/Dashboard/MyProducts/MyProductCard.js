import React from 'react';
import toast from 'react-hot-toast';

const MyProductCard = ({ product, handleDeleteProducts }) => {
    console.log(product);
    const { _id, name, email, Image, price, phone, condition, location, year, brandName } = product;

    const handleAdvertise = id => {
        fetch(`https://resale-storehouse-server.vercel.app/advertise/${id}`, {
            method: 'PUT',
            // headers: {
            //     authorization: bearer ${localStorage.getItem('accessToken')}
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Advertisement Published Successfully.')
                }
            })
    }

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
                    <button onClick={() => handleAdvertise(_id)} className=" btn-primary">Advertise</button>
                    <button onClick={() => handleDeleteProducts(_id)} className=" btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyProductCard;