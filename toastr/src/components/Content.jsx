import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav.jsx'

function Content() {
    return (
        <div className='container'>
            <div className='row'>
                <h1>This here be a header!</h1>
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