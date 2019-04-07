import React, { Component } from 'react';
import TopContent from './TopContent'
import MiddleContent from './MiddleContent'
import BottomContent from './BottomContent'

class MainContent extends Component {
    render(){
        return(
            <div>
                I am a maincontent content content
                <TopContent />
                <MiddleContent />
                <BottomContent />
            </div>
        )
    }
}

export default MainContent;
