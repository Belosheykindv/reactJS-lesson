import React from 'react';
import P from './ProfileInfo.module.css';
import Anonym from '../../../Images/userPhoto.png'
import Preloader from '../../Common/Preloader/preloader';
import ProfileStatus from '../ProfileStatus';
import ProfileAboutMe from './ProfileAboutMe';
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return <div>
    <div className={P.profile}>
      <img src={props.profile.photos.large || Anonym}></img>
      <div>ID - {props.profile.userId}</div>
      <div>
        <div>Кто я - {props.profile.fullName}</div>
        <ProfileStatus
          userId={props.userId}
          ownerId={props.ownerId}
          status={props.userStatus}
          updateUserProfileStatus={props.updateUserProfileStatus} />
        <div>
          {<ProfileAboutMe
            profile={props.profile}
            userId={props.userId}
            ownerId={props.ownerId}
            aboutMe={props.aboutMe}
            updateAboutMe={props.updateAboutMe}
          />}
          <div>Работа - {props.profile.lookingForAJobDescription || 'пусто'}</div>
        </div>
        <div>
          <div>Мои контакты</div>
          <div>ВК - {props.profile.contacts.vk || 'пусто'}</div>
          <div>Твиттер - {props.profile.contacts.twitter || 'пусто'}</div>
          <div>Инстаграмм - {props.profile.contacts.instagram || 'пусто'}</div>
          <div>ГитХаб - {props.profile.contacts.github || 'пусто'}</div>
          <div>Фэйсбук - {props.profile.contacts.facebook || 'пусто'}</div>
        </div>
      </div>
    </div>
  </div>
}

export default ProfileInfo;