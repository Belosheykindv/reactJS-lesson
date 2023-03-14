import React from 'react';
import P from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return <div className={P.profile}>
    <div className={P.profileAva}>
      <img src='https://sun9-north.userapi.com/sun9-86/s/v1/if1/ToKgJTe2mowC6RA731QdZv8-5CmN7JIgiRV8bg6AiaNy0OOWgb-U-SCAh7YgWTlFf_2QtaXt.jpg?size=791x1080&quality=96&type=album'></img>
    </div>
    <div className={P.descriptionBlock}>ava + description</div>
  </div>
}

export default ProfileInfo;