import React from "react";
import PostHeader from "./PostHeader";
import "./Posts.css";
import CommentContainer from "../Comments/CommentCotainer";

const Post = props => {
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img src={props.post.imageUrl} alt="post" className="post-image" />
      </div>
      <CommentContainer
        likes={props.post.likes}
        comments={props.post.comments}
      />
      <div className="timestamp">{props.post.timestamp}</div>
    </div>
  );
};

export default Post;
