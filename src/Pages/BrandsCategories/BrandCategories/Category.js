import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ brandCategory }) => {
    const { brandName, image, _id } = brandCategory;
    return (
        <Link to={`categories/${_id}`}>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{brandName}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Show Products</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Category;