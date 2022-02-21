import React, { useState } from 'react';
import { BrowserRouter, Routes , Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Content from './components/Content';
import AccountInformation from './components/AccountInformation';
import RecipeHolder from './components/RecipeHolder';
import Search from './components/Search';
import RecipePage from './components/RecipePage';
import './components/login.css';
import AccountRegistration from './components/AccountRegistration';

function App() {

    const loginEndpoint = "http://localhost:8080/login";
    const registrationEndpoint = "http://localhost:8080/register";

    const [user, setUser] = useState({});

    const handleRegistration = async (newUserData) => {

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(newUserData),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const response = await fetch(registrationEndpoint, requestOptions);
        if(response.ok) {
            const newUser = await response.json();
            setUser(newUser);
        }

        return response.status;
    }

    const handleLogin = async (username, password) => {
        let body = {
            username: username,
            password: password
        };

        const requestInit = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const response = await fetch(loginEndpoint, requestInit);
        if(response.ok) {
            const user = await response.json();
            setUser(user);
        }

        return response.status;
    }

    const handleLogout = () => {
        setUser({});
    }
  
  return (
    <div className="App container">
        <BrowserRouter>
            <Routes>
                {
                    Object.keys(user).length === 0 ? 
                    "" : 
                    <Route element={<Content user={user} handler={handleLogout}/>}>
                        <Route path='recipes/new' element={<RecipePage create={true} />} />
                        <Route path='/recipes/:id' element={<RecipePage create={false} />} />
                        <Route path='/recipes' element={<RecipeHolder recipes={user.recipes} isDeletable={true}/>}></Route>
                        <Route path='/account' element={<AccountInformation user={user} />}></Route>
                        <Route path='/search' element={<Search />}></Route>
                    </Route>
                }
                <Route path='/register' element={<AccountRegistration handler={handleRegistration} />}></Route>
                <Route path='/login' element={<Login handler={handleLogin} />}></Route>
                <Route path='/*' element={Object.keys(user).length === 0 ? <Navigate to='/login'/> : <Navigate to='recipes' />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
