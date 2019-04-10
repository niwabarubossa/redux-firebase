import React, { Component } from 'react';

import { connect } from 'react-redux'
import { compose } from 'redux'
import firebase from 'firebase';
import { firestoreConnect } from 'react-redux-firebase'
import 'firebase/firestore';

class RouterDisplay extends Component {
    render(){
        const url_id = this.props.match.params.id;
        console.log(this.props.match.params.id);
        console.log(this.props.projects);
        //このIDに合致したやつをfirebase　で検索かければ良き
        const tweet = (
             this.props.projects && this.props.projects.map(project => {
                 return(
                     <div>
                         { project.tweet_id == url_id ? 
                            <div key={project.tweet_id}>
                                <h1>{project.content}</h1> 
                                <h1>{project.content}</h1> 
                            </div>
                            :
                            <div>
                            </div>  }
                        
                     </div>
                );
            })
        );
        return(
            <React.Fragment>
                {tweet}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects
    }
}
export default compose(
    connect(mapStateToProps,null),
    firestoreConnect([
        { 
            collection: 'projects',

        }
    ])
    // firestoreConnect((props) => [
    //     { collection: 'projects', tweet_id: props.match.params.id } // or `todos/${props.todoId}`
    // ]),
)(RouterDisplay)
