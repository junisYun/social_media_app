import React from 'react';
import './topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useHistory } from 'react-router';

const Topbar = () => {
  const history = useHistory();
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span
          className="logo"
          onClick={() => {
            history.push('/social_media_app/home');
          }}
        >
          RattaSocial
        </span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Timeline</span>
          <span
            className="topbarLink"
            onClick={() => {
              history.push('/social_media_app');
            }}
          >
            Log out
          </span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img
          className="topbarImg"
          src="assets/person/Ratta.PNG"
          alt=""
          onClick={() => {
            history.push('/social_media_app/profile');
          }}
        />
      </div>
    </div>
  );
};

export default Topbar;
