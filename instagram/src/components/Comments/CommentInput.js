import React from "react";

const CommentInput = props => {
  return (
    <form>
      <input
        className="commentInput"
        type="text"
        placeholder="Add Comment..."
      />
    </form>
  );
};

export default CommentInput;
