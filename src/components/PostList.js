import React from 'react';
import ContentCard from './ContentCard'

const PostList = ({props}) => {
  return (
    <div>
      { props.projects && props.projects.map(project => {
        return (
          <ContentCard project={project} key={project.id} />
        )
      })}  
    </div>
  )
}

export default PostList