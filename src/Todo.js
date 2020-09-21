import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component {
  getStyle() {
    return {
      backgroundColor: "pink",
      padding: "10px",
      borderBottom: "1px dotted #ffff",

      textDecoration: this.props.todoProp.completed ? "line-through" : "none",
    };
  }

  render() {
    const { id, title } = this.props.todoProp;

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markCompleteProp2.bind(this, id)}
          ></input>
          {title}
          <button
            onClick={this.props.deleteTodoProp2.bind(this, id)}
            style={btnStyle}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  background: "#000000",
  color: "#fff",
  border: "none",
  padding: "2px 6px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

Todo.propTypes = {
  todoProp: PropTypes.object.isRequired,
};

export default Todo;
