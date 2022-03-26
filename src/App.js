import React from 'react';
import './App.css';
import Header from './Components/header';
import Navbar from './Components/Navbar';
import Profile from './Components/profile';

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
