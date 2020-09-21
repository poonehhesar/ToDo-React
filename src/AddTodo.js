import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = (e) => this.setState({ title: e.target.value });

  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          style={{ flexGrow: 1 }}
          placeholder="add todo..."
          value={this.state.title}
          onChange={this.onChange}
        ></input>

        <input type="submit" name="submit" value="submit"></input>
      </form>
    );
  }
}
