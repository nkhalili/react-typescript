import React, { Component } from 'react';

const initialState = {
  name: 'Navid',
  message: 'New Message from HOC',
};

type State = Readonly<typeof initialState>;

const messageHoc = (WrappedComponent: any) => {
  class HOC extends Component<{}, State> {
    // {} means any
    readonly state: State = initialState;

    render() {
      return (
        <WrappedComponent name={this.state.name} message={this.state.message} />
      );
    }
  }

  return HOC;
};

export default messageHoc;
