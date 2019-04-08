import React, { Component } from 'react';
import ColorBoxContent from './ColorBoxContent'
import classes from '../../assets/managementPage/ColorBox.css'

class Popup extends React.Component {
    render() {
      return (
        <div className={classes.popup}>
          <div className={classes.popup_inner}>
            <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>close me</button>
          </div>
        </div>
      );
    }
}
class ColorBox extends Component {
    constructor() {
        super();
        this.state = {
          showPopup: false
        };
    }
    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
    }

    render(){
        return(
            <div>
                Color box
                <div className='colorBox'>
                    <h1>hihi</h1>
                    <button onClick={this.togglePopup.bind(this)}>show popup</button>
                    <button onClick={() => {alert('hahha?');}}>try me when popup is open</button>
                    <p>Ganz viel inhalt</p>
                    {this.state.showPopup ? 
                        <Popup
                        text='Close Me'
                        closePopup={this.togglePopup.bind(this)}
                        />
                        : null
                    }
                </div>
                <ColorBoxContent />
            </div>
        )
    }
}

export default ColorBox;

