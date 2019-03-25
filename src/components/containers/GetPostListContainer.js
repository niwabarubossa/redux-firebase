import {connect} from 'react-redux'
import PostList from '../PostList'
import { getPosts } from '../../actions'
const mapStateToProps = (state) => {    
  // const count = state.posts.count
  const length = Object.keys(state.firebase).length
  const currentState = state.firebase[length-1].items
  console.log('---------current state----------')
  console.log(currentState);
  return { state_posts: currentState }
}

const mapDispatchToProps = ({ getPosts })

const GetPostList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)

export default GetPostList