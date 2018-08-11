import React, { Component } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { Button, Image, Grid, Row, Col } from 'react-bootstrap';

export default class YourComponent extends React.Component {
  theMovie() {
    //  "write the code that will lead you to the movie when you click its picture"
  }
  render() {
    var Name = 'Your Name',
      Age = 'Your Age',
      Email = 'Your E-mail',
      Gender = 'Male Or Female';
    var Address = 'Your Address';

    const imageStyle = {
      position: 'relative',
      top: '20px',
      bottom: '0',
      left: '120px',
      borderRadius: '125px',
      height: '125px',
      width: '125px'
    };
    const infoStyle = {
      position: 'relative',
      color: 'white',
      top: '50px',
      bottom: '0',
      left: '140px',
      font: 'normal normal 1000 20px/2 sans-serif'
    };
    return (
      <div style={{ position: 'relative' }}>
        <div
          className="upperpane"
          style={{
            backgroundColor: 'rgb(215,0,0)',
            position: 'relative',
            height: '62px',
            width: '1500px',
            font: 'normal normal 1000 40px/2 sans-serif',
            color: 'white'
          }}
        >
          Netflix
        </div>
        <div
          className="leftAndRightPanes"
          style={{
            position: 'relative',
            background:
              'linear-gradient(to right,  rgba(130,130,130) 0%,black 75%,black 75%,black 100%)',
            width: '1500px',
            height: '800px'
          }}
        >
          <img
            style={imageStyle}
            src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            style={imageStyle}
          />
          <div className="info" style={infoStyle}>
            {Name}
            <br />
            {Gender}, {Age}
            <br />
            {Address}
            <br />
            {Email}
          </div>
          <div
            className="movies"
            style={{
              position: 'relative',
              left: '750px',
              bottom: '290px',
              font: 'normal normal 1000 25px/2 sans-serif'
            }}
          >
            <h2
              className="Interestslist"
              style={{
                color: 'white',
                position: 'relative',
                top: '0px',
                bottom: '0',
                left: '0',
                right: '500px'
              }}
            >
              Interests
            </h2>
            <button
              style={{
                position: 'relative',
                backgroundColor: 'transparent',
                border: 'none',
                right: '150px',
                bottom: '10px',
                height: '0px',
                width: '0px',
                cursor: 'pointer'
              }}
            >
              <img
                src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                style={{
                  position: 'relative',
                  height: '100px',
                  width: '100px'
                }}
                onClick={this.theMovie}
              />
            </button>
            <button
              style={{
                position: 'relative',
                backgroundColor: 'transparent',
                border: 'none',
                right: '30px',
                bottom: '10px',
                height: '0px',
                width: '0px',
                cursor: 'pointer'
              }}
            >
              <img
                src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                style={{
                  position: 'relative',
                  left: '10px',
                  right: '500px',
                  height: '100px',
                  width: '100px'
                }}
                onClick={this.theMovie}
              />
            </button>
            <button
              style={{
                position: 'relative',
                backgroundColor: 'transparent',
                left: '100px',
                bottom: '10px',
                height: '0px',
                width: '0px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <img
                src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                style={{
                  position: 'relative',
                  right: '0px',
                  height: '100px',
                  width: '100px'
                }}
                onClick={this.theMovie}
              />
            </button>
            <button
              style={{
                position: 'relative',
                backgroundColor: 'transparent',
                left: '220px',
                bottom: '10px',
                height: '0px',
                width: '0px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <img
                src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                style={{
                  position: 'relative',
                  left: '0px',
                  right: '100px',
                  height: '100px',
                  width: '100px'
                }}
                onClick={this.theMovie}
              />
            </button>
            <h2
              className="Watchedlist"
              style={{
                color: 'white',
                position: 'relative',
                top: '0px',
                bottom: '0',
                right: '10px'
              }}
            >
              Watched
            </h2>
            <button
              style={{
                position: 'relative',
                backgroundColor: 'transparent',
                right: '150px',
                bottom: '10px',
                height: '0px',
                width: '0px',
                cursor: 'pointer',
                border: 'none'
              }}
            >
              <img
                src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                style={{
                  position: 'relative',
                  height: '100px',
                  width: '100px'
                }}
                onClick={this.theMovie}
              />
            </button>
            <button
              style={{
                position: 'relative',
                backgroundColor: 'transparent',
                border: 'none',
                right: '30px',
                bottom: '10px',
                height: '0px',
                width: '0px',
                cursor: 'pointer'
              }}
            >
              <img
                src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                style={{
                  position: 'relative',
                  left: '10px',
                  right: '500px',
                  height: '100px',
                  width: '100px'
                }}
                onClick={this.theMovie}
              />
            </button>
            <button
              style={{
                position: 'relative',
                backgroundColor: 'transparent',
                left: '100px',
                bottom: '10px',
                height: '0px',
                width: '0px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <img
                src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                style={{
                  position: 'relative',
                  right: '0px',
                  height: '100px',
                  width: '100px'
                }}
                onClick={this.theMovie}
              />
            </button>
            <button
              style={{
                position: 'relative',
                backgroundColor: 'transparent',
                left: '220px',
                bottom: '10px',
                height: '0px',
                width: '0px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <img
                src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                style={{
                  position: 'relative',
                  left: '0px',
                  right: '100px',
                  height: '100px',
                  width: '100px'
                }}
                onClick={this.theMovie}
              />
            </button>
            <h2
              className="toWatchList"
              style={{
                color: 'white',
                position: 'relative',
                top: '0px',
                bottom: '0',
                right: '10px'
              }}
            >
              To Watch
            </h2>
            <button
              style={{
                position: 'relative',
                backgroundColor: 'transparent',
                right: '150px',
                bottom: '10px',
                height: '0px',
                width: '0px',
                cursor: 'pointer',
                border: 'none'
              }}
            >
              <img
                src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                style={{
                  position: 'relative',
                  height: '100px',
                  width: '100px'
                }}
                onClick={this.theMovie}
              />
            </button>
            <button
              style={{
                position: 'relative',
                backgroundColor: 'transparent',
                border: 'none',
                right: '30px',
                bottom: '10px',
                height: '0px',
                width: '0px',
                cursor: 'pointer'
              }}
            >
              <img
                src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                style={{
                  position: 'relative',
                  left: '10px',
                  right: '500px',
                  height: '100px',
                  width: '100px'
                }}
                onClick={this.theMovie}
              />
            </button>
            <button
              style={{
                position: 'relative',
                backgroundColor: 'transparent',
                left: '100px',
                bottom: '10px',
                height: '0px',
                width: '0px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <img
                src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                style={{
                  position: 'relative',
                  right: '0px',
                  height: '100px',
                  width: '100px'
                }}
                onClick={this.theMovie}
              />
            </button>
            <button
              style={{
                position: 'relative',
                backgroundColor: 'transparent',
                left: '220px',
                bottom: '10px',
                height: '0px',
                width: '0px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <img
                src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                style={{
                  position: 'relative',
                  left: '0px',
                  right: '100px',
                  height: '100px',
                  width: '100px'
                }}
                onClick={this.theMovie}
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
//https://dummyimage.com/600x400/00ffee/fff
