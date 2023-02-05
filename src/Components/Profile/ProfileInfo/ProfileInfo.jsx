import React from 'react';
import P from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return <><div className={P.profile}>
  </div>
    <div className={P.descriptionBlock}>
      <img src={props.profilePage.users.ava}></img>
      ava + description
    </div></>

}

export default ProfileInfo;