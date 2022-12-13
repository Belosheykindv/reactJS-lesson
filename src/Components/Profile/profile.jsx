import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import P from './profile.module.css';
const Profile = () => {
  return <div>
    <img src='https://i.ucrazy.ru/files/i/2012.6.5/1338913960_f88c636ee0178de20d2dead9e01.jpg' />
    <div>ava + description
    </div>
    <MyPosts />
  </div>
}
export default Profile;