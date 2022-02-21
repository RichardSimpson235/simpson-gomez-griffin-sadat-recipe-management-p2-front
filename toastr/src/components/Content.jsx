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
                <Nav />
                <Outlet />
            </div>
        </div>
    )
}

export default Content;