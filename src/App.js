import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/Dialogs-container';
// import Users from './Components/Users/Users';
import UsersContainer from './Components/Users/usersContainer';


const App = (props) => {
 
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar users={props.store.profilePage.users} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/users' element={<UsersContainer/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}




export default App;
