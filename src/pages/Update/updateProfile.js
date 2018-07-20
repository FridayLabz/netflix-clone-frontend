import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Field from "./Field";


export default class UpdateProfile extends React.Component {

    constructor(){
        super();
        this.state={
            curImg:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            PictureBox:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            HiddenStatusPicture:true,

            curUsername:"Khaled",
            UsernameBox:"Khaled",
            HiddenStatusUsername:true

        }
    }
    changeProfilePicture=(e)=>{
        if(this.state.curImg!==this.state.PictureBox) {
            alert("Editted Successfuly");
            this.setState({curImg:this.state.PictureBox});
            this.setState({HiddenStatusPicture:true});
        }
        else{
            alert("You didn't edit anything!");
        }
        e.preventDefault();
    };
    changeURLBox=(e)=>{
        this.setState({PictureBox:e.target.value});
        e.preventDefault();
    };
    ToggleStatusPicture=(e)=>{
        this.setState({HiddenStatusPicture:!this.state.HiddenStatusPicture});
        e.preventDefault();
    };
    changeUsername=(e)=>{
        if(this.state.curUsername!==this.state.UsernameBox){
            alert("Editted Successfuly");
            this.setState({curUsername:this.state.UsernameBox});
            this.setState({HiddenStatusUsername:true});
        }
        else{
            alert("You didn't edit anything!");
        }
        e.preventDefault();
    };
    changeUsernameBox=(e)=>{
        this.setState({UsernameBox:e.target.value});
        e.preventDefault();
    };
    ToggleStatusUsername=(e)=>{
        this.setState({HiddenStatusUsername:!this.state.HiddenStatusUsername});
        e.preventDefault();
    };
    sendRequest=(e)=>{
        
      e.preventDefault();
    };
    render(){

        return (
            <div className="App"  >
                <div className="App-title">
                    Edit Profile
                    <br/>
                    <br/>
                    <img src={this.state.curImg} width={200} height={200} style={{borderRadius:"50%"}}/>
                    <form>
                        <Field
                            FieldName="Picture URL: "
                            value={this.state.PictureBox}
                            HiddenStatus={this.state.HiddenStatusPicture}
                            EditTextBox={this.changeURLBox}
                            click={this.changeProfilePicture}
                            ToggleStatus={this.ToggleStatusPicture}
                        />
                        <Field
                            FieldName="Username: "
                            value={this.state.UsernameBox}
                            HiddenStatus={this.state.HiddenStatusUsername}
                            EditTextBox={this.changeUsernameBox}
                            click={this.changeUsername}
                            ToggleStatus={this.ToggleStatusUsername}
                        />

                    </form>
                </div>
                <br/>
                <div className="Buttons">
                    <button type="button" className="btn btn-outline-success" id  = "OkButton" onClick = {this.sendRequest}>Done</button>
                    <button type="button" className="btn btn-outline-danger" id  = "CancelButton">Cancel</button>
                </div>
            </div>
        );
    }
}

