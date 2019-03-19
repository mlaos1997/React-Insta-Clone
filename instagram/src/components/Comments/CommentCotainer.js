import React from "react";
import "./Comments.css";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

const CommentContainer = props => {
  return (
    <div className="comment-wrapper">
      <div className="comment-header">
        <div className="social-wrapper">
          <div className="social">
            <i class="far fa-heart" />
          </div>
          <div className="social">
            <i class="far fa-comment" />
          </div>
        </div>
        <div className="likes">
          <strong>{props.likes} likes</strong>
        </div>
      </div>
      <div className="comments">
        {props.comments.map(comment => (
          <Comment comment={comment} />
        ))}
        <div className="input">
          <CommentInput />
        </div>
      </div>
    </div>
  );
};

export default CommentContainer;
