import React, { Component } from 'react';
import classes from '../assets/Popup.css'

class Popup extends React.Component {
    render() {
      return (
        <div className={classes.popup} style={{zIndex: 10}}>
          <div className={classes.popup_inner}>
            <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>close me</button>
          </div>
        </div>
      );
    }
}
export default Popup;