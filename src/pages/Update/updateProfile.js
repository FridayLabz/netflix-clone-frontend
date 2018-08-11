import React, {Component} from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';

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
            Id:'5b45fa295c5bc43e2f1e648f',
            HiddenStatusUsername:true
        }
    }
    componentWillMount(){
      fetch('http://localhost:3001/users/'+this.state.Id).then(results=>{
        return results.json();
      }).then(data=>{
        console.log(data);
        // console.log(data.object);
        // console.log(data.userName);
        this.setState({curImg:data.urlPhoto});
        this.setState({PictureBox:data.urlPhoto});
        this.setState({curUsername:data.userName});
        this.setState({UsernameBox:data.userName});
      }).catch(err=>{
        console.log(err);
      })
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
      //console.log("userName="+this.state.curUsername + "&urlPhoto="+this.state.curImg)
      var jsonData = {};
      jsonData["userName"]=this.state.curUsername;
      jsonData["urlPhoto"]=this.state.curImg;
      fetch('http://localhost:3001/users/update/'+this.state.Id,{
        method:'PUT',
        body : JSON.stringify(jsonData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(results=>{
        return results.json();
      }).then(data=>{
        console.log(data.msg);
      }).catch(err=>{
        console.log(err);
      })
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
