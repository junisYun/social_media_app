import React from 'react';
import './friends.css';
const Friends = ({ userName, userProfileImg }) => {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={userProfileImg} alt="" />
      <span className="sidebarFriendName">{userName}</span>
    </li>
  );
};

export default Friends;
