import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import ProfileContainer from './Components/Profile/profileContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthRedirect from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/Dialogs-container';
// import Users from './Components/Users/Users';
import UsersContainer from './Components/Users/usersContainer';
import Login from './Components/Login/login';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavbarContainer users={props.store.profilePage.users} auth={props.store.auth.isAuth} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path="/profile" element={<ProfileContainer />}>
              <Route path=":userId"
                element={<ProfileContainer />} />
            </Route>
            <Route path='/music' element={<AuthRedirect auth={props.store.auth.isAuth} />} />
            <Route path='/settings' element={<Settings auth={props.store.auth.isAuth} />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}




export default App;
