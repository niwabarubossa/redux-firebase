import React, { Component } from 'react';
import Post from './Post'
import ProjectSummary from './ProjectSummary'

const PostList = ({props}) => {
  return (
    <div className="project-list section">
      { props.projects && props.projects.map(project => {
        return (
          <ProjectSummary project={project} key={project.id} />
        )
      })}  
    </div>
  )
}

export default PostList