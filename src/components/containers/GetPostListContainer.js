import React, { Component } from "react";
import {connect} from 'react-redux'
import PostList from '../PostList'
import { getPosts } from '../../actions'


class GetPostListContainer extends Component {

  componentDidMount() {
    this.props.getPosts();
  }

  render(){
    return(
      <div>
        <PostList props={this.props} />
      </div>
    )
  }
} 

const mapStateToProps = (state) => {    
  const length = Object.keys(state.firebase).length
  const currentState = state.firebase[length-1].items
  console.log('---------current state----------')
  console.log(currentState);
  return { state_posts: currentState }
}

// const mapDispatchToProps = ({ getPosts })
const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetPostListContainer);