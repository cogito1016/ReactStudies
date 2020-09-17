import React from 'react'; //리액트 모듈을 불러옴
import logo from './logo.svg'; //로더(웹팩의 기능) file-loader의 역할 
import './App.css';  //css-loader의 역할

//babel-loader는 최신 자바스크립트로 작성된 코드를 ES5문법으로 변환해줌
//==> 브라우저 버전마다의 호환성과 JSX문법의 변환을 위해 필요

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
