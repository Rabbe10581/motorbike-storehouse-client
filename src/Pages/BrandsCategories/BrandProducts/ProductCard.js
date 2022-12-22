import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ProductCard = ({ product, setOrders }) => {
    const { name, location, Image, originalPrice, resalePrice, use } = product;
    const { user } = useContext(AuthContext)

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={Image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    {
                        user ?
                            <>
                                <label
                                    htmlFor="booking-modal"
                                    className="btn btn-primary text-white"
                                    onClick={() => setOrders(product)}
                                >Book Now</label>
                            </>
                            :
                            <>
                                <Link to="/login"><button htmlFor="booking-modal"
                                    className="btn btn-primary text-white"
                                    onClick={() => setOrders(product)} >Book Now</button></Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductCard;