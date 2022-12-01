import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar'
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../useHooks/useAdmin/useAdmin';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [role, setRole] = useState(null)
    console.log({ user, role });
    const [isAdmin] = useAdmin(user?.email)

    useEffect(() => {
        if (user?.email) {
            getUserInfo(user?.email)
        }
    }, [user])

    const getUserInfo = async (email) => {
        const data = await fetch(`http://localhost:5000/user/${email}`, {
            method: 'GET'
        })
        const userInfo = await data.json();
        console.log({ userInfo });
        if (userInfo) {
            setRole(userInfo.role)
        }
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            isAdmin ? <>
                                <li className='border rounded font-bold text-xl mb-5 '><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                <li className='border rounded font-bold text-xl mb-5 '><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                                <li className='border rounded font-bold text-xl mb-5 '><Link to='/dashboard/reportedproducts'>Reported Products</Link></li>
                            </>
                                :
                                role && role === 'Buyer' ?
                                    <li><Link to="/dashboard/myorders">My Orders</Link></li>
                                    : <>
                                        <li><Link to="/dashboard/myproducts">My Products</Link></li>
                                        <li><Link to="/dashboard/addproducts">Add Product</Link></li>
                                    </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;