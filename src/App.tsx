import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let aTuple: [string, number] = ['hello', 1];
  // enum, first letter capital
  enum Codes {
    first,
    second,
  } // OR enum Codes {first = 1, second =2};
  let firstName: any = 'string or number, etc';

  const warning = (): void => {
    console.log('Warning');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {firstName} is of {typeof firstName} type!
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
