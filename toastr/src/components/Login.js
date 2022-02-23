import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import icon from '../icon_toastr.jpg';

function Login({ handler }) {

    const [wasBanned, setBanned] = useState(false);
    const [wasNotFound, setNotFound] = useState(false);
    const navigate = useNavigate();
    const usernameField = useRef();
    const passwordField = useRef();

    const login = async () => {
        setBanned(false);
        setNotFound(false);
        const code = await handler(usernameField.current.value, passwordField.current.value);

        if(code === 200) {
            navigate('/recipes');
        } else if (code === 403) {
            setBanned(true);
        } else {
            setNotFound(true);
        }
    }

    const register = () => {
        navigate('/register');
    }

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col">
                    <img src={icon}/>
                </div>
                <div id="login-form" className='col'>
                    <h1>Welcome to Toastr!</h1>
                    {
                        wasBanned && <p className='text-danger'>It appears you were banned, please contact us at toastr@gmail.com for more information.</p>
                    }
                    {
                        wasNotFound && <p className='text-danger'>We were unable to find your account. Did you type your username and password correctly?</p>
                    }
                    <form >
                        <div className="form-group">
                            <label className='form-label' htmlFor='usernameInput'>Username</label>
                            <input ref={usernameField} type="text" className='form-control' id='usernameInput'/>
                        </div>
                        <div className="form-group">
                            <label className='form-label' htmlFor='passwordInput'>Password</label>
                            <input ref={passwordField} type='password' className='form-control' id='passwordInput'/>
                        </div>
                        <div className='container'>
                            <button onClick={login} type='button' className='btn btn-primary'>Login</button>
                            <button onClick={register} type='button' className='btn btn-secondary'>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;