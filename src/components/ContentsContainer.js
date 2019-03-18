import React, { Component } from 'react';

import firebase from 'firebase';
import { firestore } from '../plugins/firebase'
import 'firebase/firestore';

import { connect } from 'react-redux'
import { firebaseLogin } from '../actions'
import { dispatch } from 'rxjs/internal/observable/pairs';

class ContentsContainer extends Component {

    render(){

        const props = this.props

        return(
            <div className="contentsContainer">
                <p><strong>ここは名前が表示されます</strong></p>
                <div onClick={props.firebaseLogin}>アクション発動</div>
                <h1>aaaaa</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({tweets: state.firebase.tweets})
const mapDispatchToProps = ({ firebaseLogin })

export default connect({mapStateToProps,mapDispatchToProps})(ContentsContainer)