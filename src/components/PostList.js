import React, { Component } from 'react';
import Post from './Post'

class PostList extends Component{
  render() {
    return(
      <div>
      {this.props.state_posts.map((state_post) => 
        <Post key={state_post.title} {...state_post} />
      )}
      </div>
    )
  }
}

var hairetu = [{title: 'aiueo',body: 'aiueo'},{title: 'kaki',body: 'bady'}]
hairetu.map((one) =>
    console.log(one.body)
)
var hairetu = [{title: 'aiueo',body: 'aiueo'},{title: 'kaki',body: 'bady'}]
export default PostList