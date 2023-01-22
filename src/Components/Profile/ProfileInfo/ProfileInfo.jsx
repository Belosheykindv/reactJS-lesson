import React from 'react';
import P from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return <><div>
    <img src="https://phonoteka.org/uploads/posts/2021-07/1625574666_4-phonoteka-org-p-kosmicheskie-peizazhi-na-rabochii-stol-kra-4.jpg" />
  </div>
    <div className={P.descriptionBlock}>
      ava + description
    </div></>

}

export default ProfileInfo;