import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import MyProductCard from './MyProductCard';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [myProducts, setMyProducts] = useState([])
    useEffect(() => {
        fetch(`https://resale-storehouse-server.vercel.app/products?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyProducts(data))
    }, [user?.email])

    const handleDeleteProducts = id => {
        const proceed = window.confirm('Are you confirm?');
        if (proceed) {
            fetch(`https://resale-storehouse-server.vercel.app/products/${id}`, {

                method: 'DELETE',
                // headers: {
                // authorization: bearer ${ localStorage.getItem('accessToken') }
                // }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast('Deleted successfully');
                        const remaining = myProducts.filter(odr => odr._id !== id);
                        setMyProducts(remaining);
                    }
                })
        }
    }

    return (
        <div>
            {
                myProducts.map(product => <MyProductCard
                    key={product._id}
                    product={product}
                    handleDeleteProducts={handleDeleteProducts}
                ></MyProductCard>)
            }
        </div>
    );
};

export default MyProducts;