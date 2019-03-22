import React from "react";
import "./SignInPage.css";

class SignInPage extends React.Component {
  state = {
    user: "",
    password: ""
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  formSubmitHandler = e => {
    e.preventDefault();
    const user = this.state.username;
    const password = this.state.password;
    localStorage.setItem("user", user);
    localStorage.setItem("password", password);
    window.location.reload();
  };

  render() {
    return (
      <form onSubmit={this.formSubmitHandler}>
        <label>Username</label>
        <input
          type="text"
          id="user"
          value={this.state.user}
          onChange={this.handleChange}
          name="user"
          required
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          value={this.state.password}
          onChange={this.handleChange}
          name="password"
          required
        />
        <button>Login</button>
      </form>
    );
  }
}

export default SignInPage;
