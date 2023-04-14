import React from 'react'
import { Outlet, Link } from "react-router-dom";
import SearchBar from './component/SearchBar';

const Layout = () => {
    return (
        <div>        
            <div className='flex justify-between justify-items-center bg-blue-800'>
                <SearchBar />         
                <nav>
                    <ul className='flex gap-4'>
                        <li className='border-teal-500 px-4 py-1 mb-4 mt-6 rounded-md text-white'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='border-teal-500 px-4 py-1 mb-4 mt-6 rounded-md text-white'>
                            <Link to='/Contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>                 
        <Outlet />
        </div>
    );
}

export default Layout;