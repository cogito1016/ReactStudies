import React from "react"; //리액트 모듈을 불러옴
//import logo from './logo.svg'; 로더(웹팩의 기능) file-loader의 역할
//import './App.css';  css-loader의 역할

//babel-loader는 최신 자바스크립트로 작성된 코드를 ES5문법으로 변환해줌
//==> 브라우저 버전마다의 호환성과 JSX문법의 변환을 위해 필요

import Ref_1 from "./examples/practice_ref/Ref_1";
import Before_redux_1 from "./examples/practice_redux/Before_redux_1";

function App() {
  return (
    <div className="App">
      {/* <Ref_1 /> */}
      <Before_redux_1 />
    </div>
  );
}

export default App;
