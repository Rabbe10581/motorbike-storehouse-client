import React, { useContext } from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar'
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../useHooks/useAdmin/useAdmin';
import { Link, Outlet } from 'react-router-dom';
import useSeller from '../useHooks/useSeller/useSeller';
import useBuyer from '../useHooks/useBuyer/useBuyer';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
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
                        <li><Link to="/dashboard">My Appointments</Link></li>
                        <>
                            <li><Link to="/dashboard/myproducts">My Products</Link></li>
                            <li><Link to="/dashboard/myorders">My Orders</Link></li>
                            <li><Link to="/dashboard/addproducts">Add Product</Link></li>
                        </>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;