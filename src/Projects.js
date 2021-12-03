import React from 'react'
import './projects.css'
import Project from './Project';
function Projects () {
  return (
    <div className='projects'>
      <div className='projects-title-container'>
        <h1 className='projects-text'>Projects</h1>
        <p className='projects-para'>This is some of my Projects. You can see more from my <a className='github-link ' href='https://github.com/eycs0317' target='_blank' rel="noopener noreferrer" >Github</a>.</p>
      </div>

      <div className='projects-container'>
        <Project
          image={'./stocking.jpg'}
          title={'Stocking'}
          description={'Simple to use - Provide up-to-date stock information and the latest market news'}
          github='https://github.com/eycs0317/stocking'
          deploylink='https://eycs0317.github.io/stocking/'
          />
        <Project
          image={'./ta05.jpg'}
          title={'Tamagacha'}
          description={'Tamagacha is a game that imitate Tamagotchi from the 90s'}
          github='https://github.com/eycs0317/Tamagacha'
          deploylink='https://tamagacha.herokuapp.com/'
          />
          <Project
          image={'./ecommerce.jpg'}
          title={'Ecommerce'}
          description={'Ecommerce site that build with React and Firebase Authentication'}
          github='https://github.com/eycs0317/ecommerce'
          deploylink='https://myshop-d9e43.web.app/'
          />
      </div>
    </div>

  )
}

export default Projects

