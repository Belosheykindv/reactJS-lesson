import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import DialogItem from '../Dialogs/DialogItem/DialogItem';
import N from './Navbar.module.css'

const Navbar = (props) => {
  let userElements = props.users.map(p => <DialogItem userId={p.id} imgSrc={p.imgSrc} name={p.name} key={p.id} />);
  return <nav className={N.nav}>
    <div className={N.friends}> {props.isAuth ? props.login : <NavLink to='/login'>Логин</NavLink>} </div>
    <div className={N.item}> <NavLink to='/profile' className={navData => navData.isActive ? N.active : N.item}>Profiles</NavLink></div>
    <div className={N.item}> <NavLink to='/dialogs' className={navData => navData.isActive ? N.active : N.item}>Dialogs</NavLink></div>
    <div className={N.item}> <NavLink to='/music' className={navData => navData.isActive ? N.active : N.item}>Music</NavLink></div>
    <div className={N.item}> <NavLink to='/settings' className={navData => navData.isActive ? N.active : N.item} >Settings</NavLink></div>
    <div className={N.item}> <NavLink to='/users' className={navData => navData.isActive ? N.active : N.item} >Пользователи</NavLink></div>
    {props.auth
      ? <div className={N.friends}> Друзья{userElements}</div>
      : null}


  </nav>
}
export default Navbar;