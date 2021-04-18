import React, { Component } from "react";

class Ref_1 extends Component {
  constructor() {
    super();
    this.inputRref = React.createRef();
  }

  componentDidMount() {
    this.focusInputElement();
  }

  focusInputElement = () => {
    this.inputRref.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.inputRref} />
        <scan>나는 Ref</scan>
      </div>
    );
  }
}

export default Ref_1;
