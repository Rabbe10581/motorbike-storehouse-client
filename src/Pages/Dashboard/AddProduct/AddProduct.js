import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const handleAddBike = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        name: data.name,
                        email: user.email,
                        Image: imgData.data.url,
                        price: data.price,
                        phone: data.phone,
                        condition: data.condition,
                        location: data.location,
                        year: data.year,
                        brandName: data.brands
                    }

                    // save doctor information to the database
                    fetch('https://resale-storehouse-server.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/myproducts')
                        })
                }
            })
    }
    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add A Bike</h2>
            <form onSubmit={handleSubmit(handleAddBike)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Brands</span></label>
                    <select
                        {...register('brands')}
                        className="select select-bordered w-full max-w-xs">
                        <option>Yamaha</option>
                        <option>Suzuki</option>
                        <option>Bajaj</option>
                    </select>
                    {errors.brands && <p className='text-red-500'>{errors.brands.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Price</span></label>
                    <input type="text" {...register("price", {
                        required: "Price is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Phone</span></label>
                    <input type="phone" {...register("phone", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Condition</span></label>
                    <select
                        {...register('condition')}
                        className="select select-bordered w-full max-w-xs">
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                    {errors.condition && <p className='text-red-500'>{errors.condition.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="location" {...register("location", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Year of Purchase</span></label>
                    <input type="year" {...register("year", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.year && <p className='text-red-500'>{errors.year.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Bike" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;