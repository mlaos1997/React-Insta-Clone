import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostsContainer from "./components/PostsContainer/PostsContainer";

class App extends Component {
  state = {
    posts: [],
    filteredPosts: []
  };

  componentDidMount = () => {
    this.setState({ posts: dummyData });
  };

  filterPosts = e => {
    const filterPost = this.state.posts.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({ filteredPosts: filterPost });
  };

  render() {
    return (
      <div className="App">
        <SearchBar filterPosts={this.filterPosts} />
        <PostsContainer
          likes={this.state.posts.likes}
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}

export default App;
