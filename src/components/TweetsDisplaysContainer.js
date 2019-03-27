import React, { Component } from 'react';
import '../assets/TweetsDisplaysContainer.css'

import { connect } from 'react-redux'
import { getTweets } from '../actions'

import firebase from 'firebase';
// import { firestore } from '../plugins/firebase'
import 'firebase/firestore';
import { runInThisContext } from 'vm';

class TweetsDisplaysContainer extends Component {

    constructor(props){
        super(props)
        this.state = { sampletweets: null
        }
    }

      componentDidMount(){
        // const temptweets = []
        // firestore.collection("tweets").get().then(function(querySnapshot) {
        //     querySnapshot.forEach(function(doc) {
        //         // console.log(doc.data().content);
        //         // 新しく作った一時的な配列にpush
        //         temptweets.push(doc.data())
        //     });
        // });
        // this.setState({
        //     sampletweets: temptweets
        // })
      }

      componentDidUpdate(){
        // const temptweets = []
        // firestore.collection("tweets").get().then(function(querySnapshot) {
        //     querySnapshot.forEach(function(doc) {
        //         // console.log(doc.data().content);
        //         // 新しく作った一時的な配列にpush
        //         temptweets.push(doc.data())
        //     });
        // });
        // this.setState({
        //     sampletweets: temptweets
        // })
      }

    sample2(){
        // console.log(this.props.hahaha)
    }


    render(){
        return(
            <div className="TweetsDisplaysContainer">
                <h1 onClick={this.props.getTweets}>get tweets!</h1>
                <h1 onClick={this.sample2.bind(this)}>sample2</h1>

                <div className="aaa">

                    <ul>

                    </ul>


                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ hahaha: state.firebase.reducer_tweets })
const mapDispatchToProps = ({ getTweets })
export default connect(mapStateToProps, mapDispatchToProps)(TweetsDisplaysContainer)