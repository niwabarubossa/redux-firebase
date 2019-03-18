import React, { Component } from 'react';

import firebase from 'firebase';
import { firestore } from '../plugins/firebase'
import 'firebase/firestore';

import { connect } from 'react-redux'
import { firebaseLogin } from '../actions'
import { loginStatus } from '../actions'
// import { dispatch } from 'rxjs/internal/observable/pairs';

class ContentsContainer extends Component {

    render(){

        const props = this.props

        return(
            <div className="contentsContainer">
                <p><strong>{props.tweets}</strong></p>
                <div onClick={props.firebaseLogin}>アクション発動</div>
                <div onClick={props.loginStatus}>ログインステータスは？</div>
                <h1>aaaaa</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({tweets: state.firebase.tweets})
const mapDispatchToProps = ({ firebaseLogin, loginStatus })

export default connect(mapStateToProps,mapDispatchToProps)(ContentsContainer)