import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Nav() {

    return (
        <>
            <div className='col-2'>
                <nav className='nav flex-column nav-pills'>
                    <NavLink className='nav-link' to='/account'>Account</NavLink>
                    <NavLink className='nav-link' to='/recipes'>My Recipes</NavLink>
                    <NavLink className='nav-link' to='/search'>Search</NavLink>
                </nav>
            </div>

            <Outlet />
        </>
        
    )
}

export default Nav;