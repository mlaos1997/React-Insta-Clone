import React from "react";
import "./Comments.css";

const Comment = props => {
  return (
    <p className="comment">
      <strong>{props.comment.username}</strong> {props.comment.text}
    </p>
  );
};

export default Comment;
