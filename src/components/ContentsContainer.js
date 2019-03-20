import React, { Component } from 'react';

import firebase from 'firebase';
import { firestore } from '../plugins/firebase'
import 'firebase/firestore';
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'

import { connect } from 'react-redux'
import { firebaseLogin, loginStatus, firebaseLogout, submitTweet } from '../actions'
// import { loginStatus } from '../actions'
// import { dispatch } from 'rxjs/internal/observable/pairs';


class ContentsContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            textValue: "initial value"
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    async onSubmit(values){
        const aiueo = values.target.inputText.value;
        console.log(aiueo);
        await this.props.submitTweet(aiueo);
        //今実際に仕えているアクションとの差分をログで確認して対照実験をする
    }


    render(){

        return(
            <div className="contentsContainer">
                <p><strong>{this.props.tweets}</strong></p>
                <div onClick={this.props.firebaseLogin}>アクション発動</div>
                <div onClick={this.props.loginStatus}>ログインステータスは？</div>
                <div onClick={this.props.firebaseLogout}>ログアウトする</div>
                

                <form onSubmit={this.onSubmit}>
                    <input type="text" name="inputText" />
                    <button label="Submit" type="submit">aaa</button>
                </form>


                <h1>aaaaa</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({tweets: state.firebase.tweets})
const mapDispatchToProps = ({ firebaseLogin, loginStatus, firebaseLogout, submitTweet })

export default connect(mapStateToProps,mapDispatchToProps)(ContentsContainer)