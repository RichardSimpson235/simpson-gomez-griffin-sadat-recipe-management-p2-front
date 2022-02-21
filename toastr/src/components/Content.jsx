import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav.jsx'
import Header from './Header.jsx';

function Content({ user, handler }) {
    return (
        <div className='container'>
            <div className='row'>
                <Header user={user} handler={handler} />
            </div>
            <div className='row'>
                <div className='col-3'>
                    <Nav />
                </div>
                <div className='col-6'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Content;