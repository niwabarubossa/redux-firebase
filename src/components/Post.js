import React from 'react'

const Post = ({ _id, body }) => (
  <li>
    { body }
    { body.content }
  </li>
)

// Post.propTypes = {
//   post: PropTypes.shape({
//     _id: PropTypes.object.isRequired,
//     body: PropTypes.string.isRequired,
//     created_at: PropTypes.string.isRequired,
//     updated_at: PropTypes.string.isRequired
//   })
// }

export default Post