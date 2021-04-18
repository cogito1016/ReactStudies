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
    // console.log(this.inputRref);
  };

  render() {
    return (
      <div>
        <input ref={this.inputRref} />
        <span>나는 Ref</span>
      </div>
    );
  }
}

export default Ref_1;
