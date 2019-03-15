import React, { Component } from 'react';
import '../assets/TweetContainer.css'
import ContentsContainer from './ContentsContainer'
import ImageContainer from './ImageContainer'
import ButtonContainer from './ButtonContainer'

class TweetContainer extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="tweetContainer">
                    <div className="clearfix">
                        <ImageContainer />
                        <ContentsContainer />
                    </div>
                    <ButtonContainer />
                
                </div>
            </React.Fragment>
        )
    }
}
export default TweetContainer;