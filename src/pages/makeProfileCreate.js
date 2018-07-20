import React, { Component } from 'react';
import './makeProfileCreate.css';
import icon from './profilePicture.jpg';

class UserCreate extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            ppUrl: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }
    handleChange(event) {
        this.setState({username: event.target.value});
    }
    handleChange2(event) {
        this.setState({ppUrl: event.target.value});
    }
    render() {
        return (
            <div className="App">
                <header className="App-header row">
                    <div className= "col-md-3"></div>
                    <div className= "col-md-9">
                        <h1 id = "title" className="App-title">Add Profile</h1>
                        <h6 id = "description"><font color="#808080">Add a profile for a new person who wants to do something</font></h6>
                    </div>
                </header>
                <div className= "profileInfo row">
                    <div className= "col-md-3"></div>
                    <div className= "profilePicture col-md-2">
                        <img src={icon} id="PP" alt = "Mahmoud 3li" onClick={()=>{alert("was3 2edak");}}/>
                    </div>
                    <div className="username col-md-4">
                        <input className= "TextBox" id = "user_name" type="text" placeholder= "Username" value={this.state.username} onChange={this.handleChange}
                        />
                        <input className= "TextBox" id = "urlText" type="text" placeholder= "Url Text" value={this.state.ppUrl} onChange={this.handleChange2}
                        />
                    </div>
                </div>
                <div className="row" id="buttonsfooter">
                    <div className="col-md-5" ></div>
                    <div className="col-md-2" >
                        <button type="button" className="btn btn-outline-success" id  = "OkButton">Ok</button>
                        <button type="button" className="btn btn-outline-danger" id  = "CancelButton">Cancel</button>
                </div>
                </div>
            </div>
        );
    }
}
export default UserCreate;
