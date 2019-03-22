import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostsContainer/PostsPage";
import SignInPage from "./components/SignInPage/SignInPage";
import Authenticate from "./components/Authentication/Authenticate";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignInAuth />
      </div>
    );
  }
}

const SignInAuth = Authenticate(PostsPage)(SignInPage);

export default App;
