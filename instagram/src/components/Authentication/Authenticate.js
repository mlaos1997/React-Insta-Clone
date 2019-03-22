import React from "react";
import PostsPage from "../PostsContainer/PostsPage";
import SignInPage from "../SignInPage/SignInPage";

const Authenticate = PostsPage => SignInPage => {
  return class extends React.Component {
    state = {
      signedIn: false
    };

    componentDidMount = () => {
      if (!localStorage.getItem("user")) {
        this.setState({ signedIn: false });
      } else {
        this.setState({ signedIn: true });
      }
    };

    render() {
      if (this.state.signedIn) return <PostsPage />;
      return <SignInPage />;
    }
  };
};

export default Authenticate;
