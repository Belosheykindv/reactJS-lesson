import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import P from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return <div>
    <ProfileInfo profilePage={props.profilePage} />
    <MyPosts
      profilePage={props.profilePage}
      dispatch={props.dispatch} />
  </div>

}

export default Profile;