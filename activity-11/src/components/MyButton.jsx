import React from "react";

class MyButton extends React.Component {
  helloWorld(message) {
    alert(message);
  }
  render() {
    return (
      <button type="button" onClick={() => this.helloWorld(this.props.text)}>
        {this.props.text}
      </button>
    );
  }
}

export default MyButton;
