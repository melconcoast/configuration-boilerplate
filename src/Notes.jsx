import React, { Component } from 'react';
import axios from 'axios';

export default class Notes extends Component {

  constructor(props){
    super(props);
   this.id = props.project.id;
   this.state = {
     data: [],
     newNote: ""
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
    alert(this.state.newNote);
    let generateNewNote = {
        createdBy: {userId: "AFFSuper"},
        createdDate: "2018-11-05T13:07:17.000Z",
        isUrgent: false,
        text: this.state.newNote
    }
      axios.post('be-services/projectManagement/project/'+this.id+'/note', generateNewNote

          // {
//               topic: 'topic',
//               logs: JSON.stringify(sendData)
//           },
//           {
//               headers: {
// //              'Content-Type': 'application/json'
// //            'Content-Type': 'multipart/form-data'
//                   'Content-Type': 'application/x-www-form-urlencoded'
//               }
//           }
      ).then( function(){
          this.fetchData();
          // this.newNote ="";
          this.state.newNote= "";
          this.setState(this.state);
          }.bind(this)
      ).catch(function (error) {
          console.log(error);
      });
  }

    handleChange = (event) => {
        this.setState({newNote: event.target.value})
    }

  render() {
    if (this.state.data != null){
        return (
            <div>
                {this.state.data.map(elem => {return (<div key={elem.id}>{elem.text}</div>)})}
                <textarea value={this.state.newNote} className="notesInput" type="noteText" placeholder="Add your note" onChange={this.handleChange}/>
                <button onClick={this.sendData.bind(this)}>Send</button>
            </div>

        );
    }
    else {
      return (
          <div>
              <textarea  value={this.state.newNote} className="notesInput" type="noteText" placeholder="Add your note" onChange={this.handleChange} />
              <button onClick={this.sendData.bind(this)}>Send</button>
          </div>
      );
    }
  }
}
