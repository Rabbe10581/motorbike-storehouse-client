import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.png";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    const menuItems = <>
        <li><Link className='mr-2 font-semibold bg-slate-500' to='/'>Home</Link></li>
        {/* <li><Link className='mr-2 font-semibold' to='/brands'>Brands</Link></li> */}
        <li><Link className='mr-2 font-semibold bg-slate-500' to='/blog'>Blog</Link></li>
        {
            user?.email ?
                <>
                    <li><Link to="/dashboard" className='mr-2 font-semibold bg-slate-500'>Dashboard</Link></li>
                    <li><Link onClick={handleLogOut} className='mr-2 font-semibold bg-slate-500'>Log Out</Link></li>
                </>
                :
                <>
                    <li><Link className='mr-2 font-semibold bg-slate-500' to='/login'>Login</Link></li>
                </>

        }
    </>

    return (
        <div className="navbar bg-neutral text-neutral-content py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className='w-12' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-start">
                <h2 className="text-3xl">Motorbike Storehouse</h2>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;