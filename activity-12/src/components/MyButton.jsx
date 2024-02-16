import React from "react";

class MyButton extends React.Component {
  helloWorld() {
    alert("Hello world!");
  }
  render() {
    return (
      <button type="button" onClick={this.helloWorld}>
        {this.props.text}
      </button>
    );
  }
}

export default MyButton;
