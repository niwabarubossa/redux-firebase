import React, { Component } from 'react';
import ColorBoxContent from './ColorBoxContent'
import classes from '../../assets/managementPage/ColorBox.css'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
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
        const AddBtnStyle={
            position: "fixed",
            right: 12,
            bottom: 12
        }

        return(
            <React.Fragment>
                <div className={classes.colorBoxContainer}>
                    <div className={classes.colorBox}>
                        <button onClick={this.togglePopup.bind(this)}>記録する</button>
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
                

                <FloatingActionButton style={AddBtnStyle} onClick={this.togglePopup.bind(this)}>
                    <ContentAdd />
                </FloatingActionButton>
            </React.Fragment>

        )
    }
}


export default ColorBox;

