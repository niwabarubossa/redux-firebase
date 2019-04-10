import React from 'react';
import ContentCard from './ContentCard'
import { Link } from 'react-router-dom'

const PostList = ({props}) => {
  return (
    <div>
      { props.projects && props.projects.map(project => {
        return (
          <Link to={`/${project.tweet_id}`}>
            <ContentCard project={project} key={project.id} />
          </Link>
        )
      })}  
    </div>
  )
}

export default PostList