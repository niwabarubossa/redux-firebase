import React, { Component } from 'react';

import firebase from 'firebase';
// import { firestore } from '../plugins/firebase'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import 'firebase/firestore';
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import Post from './Post'
import PostList from './PostList'

import { connect } from 'react-redux'
import { firebaseLogin, loginStatus, firebaseLogout, submitTweet, createProject, getPosts } from '../actions'


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

    renderEvents(){
    };

    async onSubmit(values){
        await this.props.submitTweet(values)
        // this.props.history.push('/')
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

        console.log('----------state--------')
        console.log(this.state)
        console.log('----------state--------')
        console.log('----------props--------')
        console.log(this.props)
        console.log('----------props--------')

        const { projects } = this.props;

        return(
            <div className="contentsContainer">
                {/* <p><strong>{this.props.tweets}</strong></p>
                <div onClick={this.props.firebaseLogin}>アクション発動</div>
                <div onClick={this.props.loginStatus}>ログインステータスは？</div>
                <div onClick={this.props.firebaseLogout}>ログアウトする</div>
                
                <input type="text" name="inputText" />
                <button onClick={this.sampleSubmit.bind(this)}>sampleSubmit</button> */}

                {/* <form onSubmit={this.sampleSubmit.bind(this)}>
                    <input type="text" name="inputText" />
                    <button label="Submit" type="submit">aaa</button>
                </form> */}
                <h1>aaaaa</h1>

                <form onSubmit={this.firebase_submit}>

                    <textarea id="content" onChange={this.handleChange} />
                    <button>create</button>
                </form>
        
                <PostList props={this.props} />

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
    console.log('---------------')
    console.log(state)
    console.log('---------------')
    return {
        projects: state.firestore.ordered.projects
    }
}
// const mapDispatchToProps = ({ submitTweet })

// export default connect(null, mapDispatchToProps)(
//     reduxForm({ validate, form: 'contentsContainerForm' })(ContentsContainer)
// )
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ContentsContainer)