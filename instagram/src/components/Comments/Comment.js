import React from "react";
import "./Comments.css";

const Comment = props => {
  return (
    <p>
      <strong>{props.comment.username}</strong> {props.comment.text}
    </p>
  );
};

export default Comment;
