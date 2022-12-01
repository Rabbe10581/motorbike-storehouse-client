import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import OrderCard from './OrderCard';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/orders?email=${user?.email}`;

    const { data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                // }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 py-6'>
            {
                orders.map(order => <OrderCard
                    key={order._id}
                    order={order}
                ></OrderCard>)
            }
        </div>
    );
};

export default MyOrders;