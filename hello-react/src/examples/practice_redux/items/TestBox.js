import React from "react";

const TestBox = (props) => {
  const { backgroundColor, boxOwnColor, clickBtnHandler } = props;

  return (
    <div
      style={{
        border: "1px solid black",
        backgroundColor: backgroundColor,
        width: "500px",
        height: "100px",
        lineHeight: "100px",
        textAlign: "center",
      }}
    >
      Hi, I am a {boxOwnColor} box
      <button onClick={() => clickBtnHandler(boxOwnColor)}>Color Change</button>
    </div>
  );
};

export default TestBox;
