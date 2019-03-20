import React from "react";
import "./Comments.css";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      commentText: "",
      likes: 0
    };
  }

  componentDidMount = () => {
    this.setState({
      comments: this.props.comments,
      likes: this.props.likes
    });
  };

  addNewComment = (e, index) => {
    e.preventDefault();
    const newComment = { text: this.state.commentText, username: "marcelo" };

    this.setState(prevState => {
      return {
        active: false,
        comments: [...prevState.comments, newComment],
        commentText: ""
      };
    });
  };

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  likePost = e => {
    console.log("liked");
    const currentState = this.state.active;
    this.setState({
      likes: this.state.likes + 1,
      active: !currentState
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
              <i
                onClick={this.likePost}
                className={
                  this.state.active ? "fas fa-heart red-bg" : "far fa-heart"
                }
              />
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
