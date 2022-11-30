import React, { Component } from "react";

class Title extends Component {
  render() {
    // console.log(this.props.title);
    return <>{this.props.children}</>;
  }
}

export default Title;
