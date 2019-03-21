import React from "react";
import dummyData from "../../dummy-data";
import PostsContainer from "./PostsContainer";
import SearchBar from "../SearchBar/SearchBar";

class PostsPage extends React.Component {
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
      <React.Fragment>
        <SearchBar filterPosts={this.filterPosts} />
        <PostsContainer
          likes={this.state.posts.likes}
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </React.Fragment>
    );
  }
}

export default PostsPage;
