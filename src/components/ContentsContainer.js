import React, { Component } from 'react';

import firebase from 'firebase';
import { firestore } from '../plugins/firebase'
import 'firebase/firestore';
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


import { connect } from 'react-redux'
import { firebaseLogin, loginStatus, firebaseLogout, submitTweet } from '../actions'
// import { loginStatus } from '../actions'
// import { dispatch } from 'rxjs/internal/observable/pairs';


class ContentsContainer extends Component {

    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
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
                fullWidth={true}
            />
        )
    }
    async onSubmit(values){
        await this.props.submitTweet(values)
        // this.props.history.push('/')
    }

    // sampleSubmit(event){
    //     firestore.collection('tweets').add({
    //         content: 'sampleContent',
    //         created_at: new Date(),
    //       }).then(() => {
    //         console.log('aaa')
    //       });
    // }

    




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

                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
                    <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

                    <RaisedButton label="Submit" type="submit" style={style} />
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


const mapDispatchToProps = ({ submitTweet })

export default connect(null, mapDispatchToProps)(
    reduxForm({ validate, form: 'contentsContainerForm' })(ContentsContainer)
)


// const mapStateToProps = state => ({tweets: state.firebase.tweets})
// const mapDispatchToProps = ({ firebaseLogin, loginStatus, firebaseLogout, submitTweet })

// export default connect(mapStateToProps,mapDispatchToProps)(ContentsContainer)