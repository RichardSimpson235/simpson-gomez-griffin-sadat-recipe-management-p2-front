import React, { useState, useRef } from 'react';

function Login({ handler }) {

    const [authenticationFailed, setAuthenticationFailed] = useState(false);
    const usernameField = useRef();
    const passwordField = useRef();

    const login = () => {
        if (!handler(usernameField.current.value, passwordField.current.value)) {
            setAuthenticationFailed(true);
        } else {
            setAuthenticationFailed(false);
        }
    }

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col">
                    <img src="https://media1.thehungryjpeg.com/thumbs2/800_3971511_rj3k9j6t4brmnxpfr2photci1ltvrs6wkge1zovd_bread-toaster-icon-simple-style.jpg"/>
                </div>
                <div id="login-form" className='col'>
                    <h1>Welcome to Toastr!</h1>
                    {authenticationFailed && <p className="text-danger">The username or password didn't match our records.</p>}
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
                            <button type='button' className='btn btn-secondary'>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;