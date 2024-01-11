import React, { Component } from "react";

export default class display extends Component {
  state = {
    Title: "Im From Display Component",
  };
  render() {
    return (
      <div style={{ color: "white", backgroundColor: "gray" }}>
        <center>
          <h2>{this.props.name}</h2>
        </center>
      </div>
    );
  }
}
