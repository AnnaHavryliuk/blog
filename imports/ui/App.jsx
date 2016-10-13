import React, { Component } from 'react';

// App component - represents main content
export default class App extends Component {
  render() {
    return (
      <main>
        {this.props.main}
      </main>
    );
  }
}
