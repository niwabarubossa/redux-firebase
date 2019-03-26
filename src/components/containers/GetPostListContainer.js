import {connect} from 'react-redux'
import PostList from '../PostList'

const mapStateToProps = (state) => {    
  const length = Object.keys(state.firebase).length
  const currentState = state.firebase[length-1].items
  return { state_posts: currentState }
}

const GetPostList = connect(
  mapStateToProps
)(PostList)

export default GetPostList