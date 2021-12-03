import React from 'react'
import './project.css'

function Project ({image, title, description, github, deploylink}) {
  return (
    <div className='project'>

      <div className='project-image-container'>
        <img className='project-image' alt='' src={image}></img>
      </div>

      <div className='project-info'>
        <h1 className='project-text'>{title}</h1>
        <p className='project-para'>{description}</p>

        <div className='project-btn-container'>

            <a className='btn btn-1' href={github} target='_blank' rel="noopener noreferrer">Github</a>


          <a className='btn' href={deploylink} target='_blank' rel="noopener noreferrer">View Site</a>
        </div>

      </div>

    </div>

  )
}

export default Project;