import React, { Component } from 'react';
import Cookies from 'universal-cookie';


export default class ReadMovie extends Component {
    constructor(){
        super();
        this.state = {
            movies : []
        }
    }
    componentWillMount(){
        const cookies = new Cookies();
        const token = cookies.get('Authorization');
        fetch('http://localhost:3001/api/movie/getmovies', {headers:{Authorization:token}}).then(res=> {
            return res.json();
        }).then(movies => {
            console.log(movies);
            this.setState({movies:movies})
        })
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}