import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // let firstValue: string = 'Hello';
  //let firstValue: number = 123;
  //let firstValue: boolean = true;
  // let firstValue: number[] = [1, 2, 3];
  let firstValue: Array<string> = ['hello', 'string', 'array'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {firstValue} is of {typeof firstValue} type!
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
