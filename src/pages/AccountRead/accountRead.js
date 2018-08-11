import React, {Component} from 'react';
import './accountRead.css';


export default class UpdateAccount extends Component {

    constructor() {
        super();
        this.state = {
            mail: "",
            password: "",
            mailIsInput: false,
            passwordIsInput: false,
            Id: "5b6da7ef10ce015f1ec718d5"
        }
    }

    changeMailBox = () => {
        this.setState({mailIsInput: true, passwordIsInput: false});
    };

    changePassBox = () => {
        this.setState({mailIsInput: false, passwordIsInput: true});
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
                <h2 id="title">Account</h2>
                <div className='Properties'>
                    <h4>
                        <label>E-mail:</label>
                        <label id="mail" onClick={this.changeMailBox}>
                            {this.state.mailIsInput === false ? <h4>{this.state.mail}</h4> :
                                <input type="text" value={this.state.mail}/>}
                        </label>
                    </h4>

                    <h4>
                        <label>Password:</label>
                        <label id="password" onClick={this.changePassBox}>
                            {this.state.passwordIsInput === false ? <h4>{this.state.password}</h4> :
                                <input type="text" value={this.state.password}/>}
                        </label>
                    </h4>
                </div>
                <div className='change'>
                    <h4>
                        <label>Change E-mail</label>
                    </h4>
                    <h4>
                        <label>Change Password</label>
                    </h4>
                </div>
            </div>
        );
    }
}
