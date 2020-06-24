import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message, { mySearch } from './Message';

const initialState = {
  name: 'Navid',
  message: 'New Message',
};

type State = Readonly<typeof initialState>;

class App extends React.Component<any, State> {
  readonly state: State = initialState;
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message name={this.state.name} message={this.state.message} />
          {`Result: ${mySearch('Hello', 'h')}`}
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
}

export default App;
