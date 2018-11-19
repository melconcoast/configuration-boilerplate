import React, { Component } from 'react';
import axios from 'axios';
import { animateScroll } from "react-scroll";

export default class Notes extends Component {

  constructor(props){
    super(props);
   this.id = props.project.id;
   this.state = {
     data: [],
     newNote: "",
     isUrgent: false
   };
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
      axios.get('be-services/projectManagement/project/'+this.id+'/note').then(result => {this.setState({data: result.data})});
  }

  sendData(){
    // const data = document.getElementsByClassName('notesInput')[0].value;
    // alert(this.state.newNote);
    let generateNewNote = {
        createdBy: {userId: "AFFSuper"},
        createdDate: "2018-11-05T13:07:17.000Z",
        isUrgent: this.state.isUrgent,
        text: this.state.newNote
    }
      axios.post('be-services/projectManagement/project/'+this.id+'/note', generateNewNote).then( function(){
          this.fetchData();
          this.state.newNote= "";
          this.setState(this.state);//, this.scrollToBottom
          }.bind(this)
      ).catch(function (error) {
          console.log(error);
      });

  }

    // scrollToBottom() {
    //     animateScroll.scrollToBottom({
    //         containerId: "notesList"
    //     });
    // }

    handleChange = (event) => {
        this.setState({newNote: event.target.value})
    }

    handleCheck = (event) => {
      this.setState({isUrgent: !this.state.isUrgent});
    }

  render() {
    if (this.state.data != null){
        return (
        <div className="mainContainer">
            <div id="notesList" className="notesList">
                {this.state.data.map(elem => {
                    if(elem.isUrgent)
                        return (<div className="commentUrgent" key={elem.id}>{elem.createdBy.userId},
                        {new Date(elem.createdDate.toString()).toDateString()}<div>{elem.text}</div></div>)
                    else{
                        return (<div className="comment" key={elem.id}>{elem.createdBy.userId},
                            {new Date(elem.createdDate.toString()).toDateString()}<div>{elem.text}</div></div>)
                    }
                })}
            </div>
            <div className="addNoteFieldContainer">
                    <textarea value={this.state.newNote} className="notesInput"  type="noteText" placeholder="Add your note" onChange={this.handleChange}/>
                    <button className="innerButton" onClick={this.sendData.bind(this)}>Send</button>
                    <input id="urgentFlagCheckBox" className="checkbox" type="checkbox" onChange={this.handleCheck}/>
                    <label className="urgentFlagLabel">Urgent Message</label>
            </div>
        </div>

        );
    }
    else {
      return (
          <div className="notes">
              <textarea  value={this.state.newNote} className="notesInput" type="noteText" placeholder="Add your note" onChange={this.handleChange} />
              <button className="innerButton" onClick={this.sendData.bind(this)}>Send</button>
              <input id="urgentFlagCheckBox" className="checkbox" type="checkbox" onChange={this.handleCheck}/>
              <label className="urgentFlagLabel">Urgent Message</label>
          </div>
      );
    }
  }
}
