import React, { Component } from 'react';
import '../assets/MainContainer.css'
import TweetsContainer from './TweetsContainer'
import TweetsDisplaysContainer from './TweetsDisplaysContainer'

class MainContainer extends Component {
    render(){
        return(
            <div className="mainContainer">
                <TweetsContainer />
                <TweetsDisplaysContainer />
            </div>
        )
    }
}

export default MainContainer;