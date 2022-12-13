import React from 'react';
import N from './Navbar.module.css'
console.log(N);
 
const Navbar = () => {
  return <nav className={N.nav}>
    <div> <a href='/profile' >Profiles</a></div>
    <div> <a href='/dialogs'>Messages</a></div>
    <div className={`${N.item} ${N.active}`}> <a href='/music'>Music</a></div>
    <div> <a href='/settings' >Settings</a></div>
  </nav>
}

export default Navbar;