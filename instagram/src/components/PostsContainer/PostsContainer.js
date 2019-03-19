import React from "react";
import Post from "./Post";
import "./Posts.css";

const PostsContainer = props => {
  return (
    <div className="posts-container-wrapper">
      {props.posts.map(post => (
        <Post key={post.likes} post={post} />
      ))}
    </div>
  );
};

export default PostsContainer;
