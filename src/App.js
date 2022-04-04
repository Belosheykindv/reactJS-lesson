import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/profile';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}




export default App;
