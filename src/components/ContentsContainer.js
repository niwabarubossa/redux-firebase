import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import firebase from 'firebase';
import { firestoreConnect } from 'react-redux-firebase'
import 'firebase/firestore';
import PostList from './PostList'
import { firebaseLogin, loginStatus, firebaseLogout, submitTweet, createProject, getPosts } from '../actions'

import classes from '../assets/ContentsContainer.css'

class ContentsContainer extends Component {

    state={
        title: '',
        body: ''
    }
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    async onSubmit(values){
        await this.props.submitTweet(values)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    firebase_submit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state)
    }
    render(){
        return(
            <div>
                <div className={classes.ContentsContainer}>
                    <form onSubmit={this.firebase_submit}>
                        <textarea id="content" onChange={this.handleChange} />
                        <button>create</button>
                    </form>
                </div>
                <div>    
                    <PostList props={this.props} />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitTweet: () => dispatch(submitTweet()),
        getPosts: () => dispatch(getPosts()),
        createProject: (project) => dispatch(createProject(project))
    };
  };
const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects
    }
}
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ContentsContainer)