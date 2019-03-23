import {connect} from 'react-redux'
import PostList from '../PostList'

const mapStateToProps = (state) => {    
  // const count = state.posts.count
  console.log(state)
  console.log(state.firebase)
  console.log(state.firebase[2].items)
  // const currentState = state.posts[2]  // 一番新しいstateを取り出す
  const currentState = state.firebase[2].items
  return { state_posts: currentState }  // 描画するのに必要なのはとりあえずitemsだけなのでitemsだけ返す
}

const GetPostList = connect(
  mapStateToProps
)(PostList)

export default GetPostList