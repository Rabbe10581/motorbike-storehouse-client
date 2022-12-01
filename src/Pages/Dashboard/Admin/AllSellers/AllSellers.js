import React from 'react';
import useGetUsers from '../../../../useHooks/useGetUsers/useGetUsers';

const AllSellers = () => {
    const { users } = useGetUsers()
    const sellers = users?.filter(el => el.role === "Seller")
    console.log(sellers);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers?.length > 0 &&
                            sellers.map((seller, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{seller?.name}</td>
                                <td>{seller?.email}</td>
                                <td>{seller?.role}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;