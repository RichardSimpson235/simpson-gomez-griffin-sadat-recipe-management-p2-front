import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AccountRegistration({ handler }) {

    const [invalidDate, setInvalidDate] = useState(false);
    const [registrationFailed, setRegistrationFailed] = useState(false);
    const navigate = useNavigate();

    const firstName = useRef();
    const lastName = useRef();
    const username = useRef();
    const password = useRef();
    const dateOfBirth = useRef();
    const email = useRef();
    const phone = useRef();

    const register = async () => {
        const newUserData = {};
        newUserData.firstName = firstName.current.value;
        newUserData.lastName = lastName.current.value;
        newUserData.username = username.current.value;
        newUserData.password = password.current.value;
        newUserData.dateOfBirth = dateOfBirth.current.value;
        newUserData.email = email.current.value;
        newUserData.phone = phone.current.value;

        const today = new Date();
        newUserData.registrationDate = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();

        const code = await handler(newUserData);
        if(code === 200) {
            setRegistrationFailed(false);
            navigate('/recipes');
        } else {
            setRegistrationFailed(true);
        }
    }

    const validateDate = () => {
        const validationPattern = /\d{2}\/\d{2}\/\d{4}/;
        if(validationPattern.test(dateOfBirth.current.value)) {
            setInvalidDate(false);
        } else {
            setInvalidDate(true);
        }
    }

    return (
        <div className="container">
            <div className='row'>
                <h2>Welcome to Toastr!</h2>
                <p>Please fill out the following information so we can create your account!</p>
                {registrationFailed && <p className='text-danger'>It seems there was a problem with registering your account. Please try again later.</p>}
            </div>
            <div className='row'>
                <form>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='firstNameInput'>First Name:</label>
                        <input id='firstNameInput' ref={firstName} type="text" className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='lastNameInput'>Last Name:</label>
                        <input id='lastNameInput' ref={lastName} type="text" className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='usernameInput'>Username:</label>
                        <input id='usernameInput' ref={username} type="text" className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='passwordInput'>Password:</label>
                        <input id='passwordInput' ref={password} type="password" className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='dateOfBirthInput'>Date of Birth (format: MM/dd/yyyy):</label>
                        {invalidDate && <p className='text-danger'>Invalid date! Please check the format!</p>}
                        <input onBlur={validateDate} id='dateOfBirthInput' ref={dateOfBirth} type="text" className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='emailInput'>Email:</label>
                        <input id='emailInput' ref={email} type="email" className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='phoneInput'>Phone:</label>
                        <input id='phoneInput' ref={phone} type="phone" className='form-control'/>
                    </div>
                </form>
                <button disabled={invalidDate} onClick={register} className='btn btn-primary'>Register</button>
            </div>
        </div>
    )
}

export default AccountRegistration;