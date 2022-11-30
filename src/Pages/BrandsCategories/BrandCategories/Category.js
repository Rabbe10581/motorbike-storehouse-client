import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ brandCategory }) => {
    const { brandName, image, _id } = brandCategory;
    return (
        <Link to={`categories/${_id}`}>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-[180px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{brandName}</h2>
                    <p>Your Dream is here. Use it to make life more easier.</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Show Products</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Category;