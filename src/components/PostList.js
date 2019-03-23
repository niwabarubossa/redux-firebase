import React from 'react'
import Post from './Post'

const PostList = ({ state_posts }) => (
  <ul>
    {
        state_posts.map((post, index) => 
        <Post key={index} {...post}/>
      )
    }
  </ul>
)

// PostList.propTypes = {
//   posts: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.object.isRequired,
//       body: PropTypes.string.isRequired,
//       created_at: PropTypes.string.isRequired,
//       updated_at: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired
// }

export default PostList