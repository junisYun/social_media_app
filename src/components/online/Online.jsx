import React from 'react';
import './online.css';
const Online = ({ userName, userProfileImg }) => {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={userProfileImg} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUserName">{userName}</span>
    </li>
  );
};

export default Online;
