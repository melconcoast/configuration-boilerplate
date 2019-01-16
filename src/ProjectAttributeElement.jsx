import React, { Component } from 'react';

export default class ProjectAttributeElement extends Component {

  constructor(props){
    super(props);
    this.state = {
      value : ""
    }
  }
  componentDidMount() {
    this.getAttributeValue();
    console.log(this.state);
  }
  getAttributeValue(){
    for(let index=0; index< this.props.attributes.length; index++){
      let attribute = this.props.attributes[index];
      if(this.props.code == attribute.code){
        this.setState({
          value : attribute.value
        });
      }
    }
  }

  render() {
    return (
      <div  className="fieldSection" >
          <span className="attributeCaption" >{this.props.label}</span>
          <span className="attrTitle" title={this.state.value}>{this.state.value}</span>
      </div>
    );
  }
}
