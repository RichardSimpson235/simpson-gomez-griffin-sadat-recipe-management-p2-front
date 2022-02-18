import React, { useState } from 'react';
import Login from './components/Login';
import './components/login.css';

function App() {

  const loginEndpoint = "";

  const [user, setUser] = useState({});

  const handleLogin = (username, password) => {
    console.log("Username: " + username + ", " + "Password: " + password);
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
