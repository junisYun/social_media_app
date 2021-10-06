import React from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
import { Users, Posts } from '../../dummyData';

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
