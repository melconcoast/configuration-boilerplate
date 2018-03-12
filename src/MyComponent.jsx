import React, { Component } from 'react';

export default class MyComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      counter: undefined
    }
    this.props.eventManager.on('counterChange', counter => this.setState({counter}));
  }

  render() {
    return <div>Counter from application: {this.state.counter}</div>;
  }
}
