import React, { Component } from 'react';

export default class MyComponent extends Component {

  constructor(props){
    super(props);

  }

  render() {
    return <span>{this.props.label}:{this.props.value}</span>;
  }
}
