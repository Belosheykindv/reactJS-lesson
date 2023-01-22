import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import P from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return <div> 
  <ProfileInfo />
   <MyPosts state={props.state} />
 </div>

}

export default Profile;