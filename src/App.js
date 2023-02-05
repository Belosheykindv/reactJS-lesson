import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.profilePage} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage} dispatch={props.dispatch} />} />
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}




export default App;
