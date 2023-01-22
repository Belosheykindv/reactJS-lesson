import React from 'react';
import { NavLink } from 'react-router-dom';
import N from './Navbar.module.css'
console.log(N);

const Navbar = () => {
  return <nav className={N.nav}>
    <div className={N.item}> <NavLink to='/profile' className={navData => navData.isActive ? N.active : N.item}>Profiles</NavLink></div>
    <div className={N.item}> <NavLink to='/dialogs' className={navData => navData.isActive ? N.active : N.item}>Dialogs</NavLink></div>
    <div className={N.item}> <NavLink to='/music' className={navData => navData.isActive ? N.active : N.item}>Music</NavLink></div>
    <div className={N.item}> <NavLink to='/settings' className={navData => navData.isActive ? N.active : N.item} >Settings</NavLink></div>
  </nav>
}

export default Navbar;