import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

const appStateToProps = (state) => ({
    netWorth: state.netWorth
});

export default connect(appStateToProps)(App);
