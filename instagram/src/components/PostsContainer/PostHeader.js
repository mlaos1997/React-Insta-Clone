import React from "react";
import "./Posts.css";

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-thumb-wrapper">
        <img
          src={props.thumbnailUrl}
          alt="post header"
          className="post-thumb"
        />
      </div>
      <div>
        <strong>{props.username}</strong>
      </div>
    </div>
  );
};

export default PostHeader;
