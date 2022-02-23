import React, { useRef, useState } from "react";

 export default function UserAccountInfo({ user, updateUser }) {

    const [invalidDate, setInvalidDate] = useState(false);
    const [editable, setEditable] = useState(false);

    const usernameField = useRef();
    const dateOfBirthField = useRef();
    const emailField = useRef();
    const phoneField = useRef();

    const accountEndpoint = new URL("http://localhost:8080/users/");

    const toggleEdit = () => {
        setEditable(!editable);
    }

    const saveChanges = async () => {
        // updateUser

        let u = user;
        u.username = usernameField.current.value ? usernameField.current.value : user.username;
        u.dateOfBirth = dateOfBirthField.current.value ? dateOfBirthField.current.value : user.dateOfBirth;
        u.email = emailField.current.value ? emailField.current.value : user.email;
        u.phone = phoneField.current.value ? phoneField.current.value : user.phone;

        const requestOptions = {
            method: 'PUT',
            body: JSON.stringify(u),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        // send message to server
        const response = await fetch(accountEndpoint, requestOptions);
        const updated = await response.json();


        toggleEdit();
        updateUser(updated);
    }

    const validateDate = () => {
        const validationPattern = /\d{2}\/\d{2}\/\d{4}/;
        if(validationPattern.test(dateOfBirthField.current.value)) {
            setInvalidDate(false);
        } else {
            setInvalidDate(true);
        }
    }

    return ( 

    <div className="container">
        {
            !editable ? ( <>
                <div className="row">
                    <h3>Username: {user.username}</h3>
                    <h3>Birth Date: {user.dateOfBirth}</h3>
                    <h3>Regstration Date: {user.registrationDate}</h3>
                    <h3>Email: {user.email}</h3>
                    <h3>Phone: {user.phone}</h3>
                </div>
                <div className="row">
                    <button onClick={toggleEdit} className="btn btn-primary">Edit</button>
                </div>
            </>) : ( <>
                    <form>
                        <div className="form-group row">
                            <label htmlFor="usernameField" className="col-3 col-form-label"><b>Username: </b></label>
                            <div className="col-9">
                                <input type='text' className="form-control" id="usernameField" ref={usernameField} placeholder={user.username}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="birthDateField" className="col-3 col-form-label"><b>Birth Date: </b></label>
                            <div className="col-9">
                                {invalidDate && <p className='text-danger'>Invalid date! Please check the format!</p>}
                                <input onBlur={validateDate} type='text' className="form-control" id="birthDateField" ref={dateOfBirthField} placeholder={user.dateOfBirth}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="emailField" className="col-3 col-form-label"><b>Email: </b></label>
                            <div className="col-9">
                                <input type='text' className="form-control" id="emailField" ref={emailField} placeholder={user.email}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="phoneField" className="col-3 col-form-label"><b>Phone: </b></label>
                            <div className="col-9">
                                <input type='text' className="form-control" id="phoneField" ref={phoneField} placeholder={user.phone}/>
                            </div>
                        </div>
                    </form>
                    <div className="row">
                        <button onClick={saveChanges} className="btn btn-danger">Save Changes</button>
                    </div>
                </>)
        }
    </div>

    );  
}