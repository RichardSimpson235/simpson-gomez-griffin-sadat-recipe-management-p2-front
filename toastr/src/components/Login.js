import React, { useRef } from 'react';

function Login({ loginEndpoint, handler }) {

    const usernameField = useRef();
    const passwordField = useRef();

    const login = () => {
        handler(usernameField.current.value, passwordField.current.value);
    }

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col">
                    <img src="https://media1.thehungryjpeg.com/thumbs2/800_3971511_rj3k9j6t4brmnxpfr2photci1ltvrs6wkge1zovd_bread-toaster-icon-simple-style.jpg"/>
                </div>
                <div id="login-form" className='col'>
                    <h1>Welcome to Toastr!</h1>
                    <form >
                        <div className="form-group">
                            <label className='form-label' htmlFor='usernameInput'>Username</label>
                            <input ref={usernameField} type="text" className='form-control' id='usernameInput'/>
                        </div>
                        <div className="form-group">
                            <label className='form-label' htmlFor='passwordInput'>Password</label>
                            <input ref={passwordField} type="text" className='form-control' id='passwordInput'/>
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