import React, {Component} from 'react';
import {Button, Image, Grid, Row, Col} from 'react-bootstrap';

import './accountRead.css';
import icon from './NetflixLogo.jpg';

export default class UpdateAccount extends Component {

    constructor() {
        super();
        this.state = {
            mail: "Data",
            password: "Data",
            mailIsInput: false,
            passwordIsInput: false,
            Id: "5b6da7ef10ce015f1ec718d5"
        }
    }

    changeMailBoxStatus = () => {
        this.setState({mailIsInput: true, passwordIsInput: false});
    };

    changePassBoxStatus = () => {
        this.setState({mailIsInput: false, passwordIsInput: true});
    };
    changeMailBox = (e) => {
        this.setState({mail: e.target.value});
        e.preventDefault();
    };
    changePasswordBox = (e) => {
        this.setState({password: e.target.value});
        e.preventDefault();
    };

    componentWillMount() {
        fetch('http://localhost:3001/accounts/' + this.state.Id).then(results => {
            console.log(results);
            return results.json();
        }).then(data => {
            console.log(data);
            this.setState({mail: data.email});
            this.setState({password: data.password});
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div id="main">

                <div className="container-fluid">
                    <div className="row">

                        <img src={icon} id="logo" alt="Netflix-Logo"/>

                        <div className="col-md-5">
                            <h4>
                                E-mail:
                                <label id="mail" onClick={this.changeMailBoxStatus}>
                                    {this.state.mailIsInput === false ? this.state.mail :
                                        <input className="form-control" type="email" onChange={this.changeMailBox}
                                               value={this.state.mail}/>}
                                </label>
                            </h4>
                            <h4>
                                Password:
                                <label id="password" onClick={this.changePassBoxStatus}>
                                    {this.state.passwordIsInput === false ? this.state.password :
                                        <input className="form-control" type="text" onChange={this.changePasswordBox}
                                               value={this.state.password}/>}
                                </label>
                            </h4>
                        </div>
                        <div className="col-md-3">
                            <div className='change'>
                                <h4>
                                    <a href="#">Change E-mail</a>
                                </h4>
                                <h4>
                                    <a href="#">Change Password</a>
                                </h4>
                            </div>
                        </div>

                    </div>
                    <div>
                        <Button id="Delete-btn"className="btn btn-outline-danger " >
                            Delete
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
