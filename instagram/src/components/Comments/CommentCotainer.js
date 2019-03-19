import React from "react";
import "./Comments.css";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      commentText: ""
    };
  }

  addNewComment = (e, index) => {
    e.preventDefault();
    const newComment = { text: this.state.commentText, username: "marcelo" };

    this.setState(prevState => {
      return {
        comments: [...prevState.comments, newComment],
        commentText: ""
      };
    });
  };

  handleChange = e => {
    this.setState({ commentText: e.target.value });
  };

  render() {
    return (
      <div className="comment-wrapper">
        <div className="comment-header">
          <div className="social-wrapper">
            <div className="social">
              <i className="far fa-heart" />
            </div>
            <div className="social">
              <i className="far fa-comment" />
            </div>
          </div>
          <div className="likes">
            <strong>{this.state.likes} likes</strong>
          </div>
        </div>
        <div className="comments">
          {this.state.comments.map((comment, index) => (
            <Comment comment={comment} key={index} />
          ))}
          <div className="input">
            <CommentInput
              handleChange={this.handleChange}
              commentText={this.state.commentText}
              addNewComment={this.addNewComment}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CommentContainer;
