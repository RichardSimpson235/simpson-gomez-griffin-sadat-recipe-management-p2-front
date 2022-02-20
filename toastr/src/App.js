import React, { useState } from 'react';
import { BrowserRouter, Routes , Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Content from './components/Content';
import Account from './components/Account';
import MyRecipes from './components/MyRecipes';
import Search from './components/Search';
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

        // fetch(loginEndpoint, requestInit).then(response => {
        //     if(response.ok) {
        //         setUser(response.json());
        //         return true;
        //     } else {
        //         return false;
        //     }
        // });

        setUser({id: 0});
        return true;
  }
  
  return (
    <div className="App container">
        <BrowserRouter>
            <Routes>
                {
                    Object.keys(user).length === 0 ? 
                    "" : 
                    <Route element={<Content />}>
                        <Route path='/recipes' element={<MyRecipes />}></Route>
                        <Route path='/account' element={<Account />}></Route>
                        <Route path='/search' element={<Search />}></Route>
                    </Route>
                }
                <Route path='/login' element={<Login handler={handleLogin} />}></Route>
                <Route path='/*' element={<Navigate to='/login'/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
