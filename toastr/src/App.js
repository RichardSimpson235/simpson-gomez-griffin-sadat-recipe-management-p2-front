import React, { useState } from 'react';
import Login from './components/Login';
import './components/login.css';

function App() {

    const loginEndpoint = "";

    const [user, setUser] = useState({});

    const handleLogin = (username, password) => {
        let body = {
            username: username,
            password: password
        };

        const requestInit = {
            method: 'POST',
            body: body
        };

        fetch(loginEndpoint, requestInit).then(response => {
            if(response.ok) {
                setUser(response.json());
                return true;
            } else {
                return false;
            }
        });
  }
  
  return (
    <div className="App container">
        {
            Object.keys(user).length === 0 ? (
                <Login loginEndpoint={loginEndpoint} handler={handleLogin}/>
            ) : (
                <h1>Hello from React, {user.id}</h1>
            )
        }
    </div>
  );
}

export default App;
