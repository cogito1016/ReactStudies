import React, { Component } from "react";
import TestBox from "./items/TestBox";

class Before_redux_1 extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "white",
    };
  }

  clickBtnHandler = (color) => {
    this.setState({
      backgroundColor: color,
    });
  };

  render() {
    const { backgroundColor } = this.state;

    return (
      <div>
        <TestBox
          backgroundColor={backgroundColor}
          boxOwnColor={"red"}
          clickBtnHandler={this.clickBtnHandler}
        />
        <TestBox
          backgroundColor={backgroundColor}
          boxOwnColor={"blue"}
          clickBtnHandler={this.clickBtnHandler}
        />
        <TestBox
          backgroundColor={backgroundColor}
          boxOwnColor={"green"}
          clickBtnHandler={this.clickBtnHandler}
        />
      </div>
    );
  }
}

export default Before_redux_1;
