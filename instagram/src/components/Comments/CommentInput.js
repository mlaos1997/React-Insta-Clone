import React from "react";

const CommentInput = props => {
  return (
    <form onSubmit={props.addNewComment}>
      <input
        onChange={props.handleChange}
        className="commentInput"
        value={props.commentText}
        type="text"
        placeholder="Add Comment..."
      />
    </form>
  );
};

export default CommentInput;
