import React, { Component } from 'react';

import firebase from 'firebase';
// import { firestore } from '../plugins/firebase'
import 'firebase/firestore';
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

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

    renderField(field){
        const { input, label, type, meta: {touched, error} } = field
        
        return (
            <TextField 
                hintText={label}
                floatingLabelText={label}
                type={type}
                errorText={touched && error}
                {...input}
            />
        )
    }
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
        const { handleSubmit, pristine, submitting, invalid } = this.props
        const style = { margin: 12 }

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

                {/* <form onSubmit={handleSubmit(this.onSubmit)}>
                    <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
                    <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

                    <RaisedButton label="Submit" type="submit" style={style} />
                </form> */}

                <form onSubmit={this.firebase_submit}>

                    <textarea id="content" onChange={this.handleChange} />
                    <button>create</button>
                </form>


            </div>
        )
    }
}

const validate = values => {
    const errors = {}

    if (!values.title) errors.title = "タイトルが空です"
    if (!values.body) errors.body = "内容が空です"
    return errors
}


const mapDispatchToProps = dispatch => {
    return {
        submitTweet: () => dispatch(submitTweet()),
        getPosts: () => dispatch(getPosts()),
        createProject: (project) => dispatch(createProject(project))
    };
  };

// const mapDispatchToProps = ({ submitTweet })

export default connect(null, mapDispatchToProps)(
    reduxForm({ validate, form: 'contentsContainerForm' })(ContentsContainer)
)