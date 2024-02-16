import React from "react";

class MyButton extends React.Component {
  helloWorld() {
    alert("Hello world!");
  }
  render() {
    return (
      <button type="button" onClick={this.helloWorld}>
        Click Me!
      </button>
    );
  }
}

export default MyButton;
