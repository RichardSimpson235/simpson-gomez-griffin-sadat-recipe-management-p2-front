import React from "react";
import { useNavigate } from 'react-router-dom';
import icon from '../icon_toastr.jpg'

function Header({ user, handler }) {

    const navigate = useNavigate();

    const logout = () => {
        handler();
        navigate('/login');
    }

    return (
        <div className="container">
            <div className="row align-items-center header-ctn">
            <div className="col-1">
                <img className="img-fluid" src={icon}></img>
            </div>
            <div className="col-8 d-flex justify-content-center"> 
                <h4 className="h4">Welcome {user.firstName + " " + user.lastName}</h4>
            </div>
            <div className="col-3">
                <button onClick={logout} className="btn btn-dark">Logout</button>
            </div>
            </div>
        </div>
    )
}

export default Header;