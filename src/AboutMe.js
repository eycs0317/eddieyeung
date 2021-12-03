import React from 'react'
import './aboutme.css'

function AboutMe () {
  return (
    <div className='about-me'>
      <div className='about-me-content'>
        <h1>Hi, I'm Eddie</h1>
        <p className='about-me-text'>I'm a Web Developer from Bay Area, CA. I'm currently look for my first software development job.
      After 16 years of working Automotive field of helping client/tech to diagnose and repair their vehicle.
      I decide to have a career switch to Web development.</p>
        <p className='about-me-text'>From Self Study, Online course and Bootcamp - I have done it all! I found that coding is fun and I really enjoy the 'Aha' moment!</p>
        <p className='about-me-text'>In my space time i enjoy learn new things and enjoy the outdoor!
If u need to reach me, You can send me a message at the Contact page.</p>
        <div className="about-me-photo-container">

          <div className="photo-item">
            <img src="./camping.JPG" alt="" className='about-me-photo'/>
            <p className='photo-text'>Backpacking in California Coast</p>
          </div>

          <div className="photo-item">
            <img src="./sparky.JPG" alt="" className='about-me-photo'/>
            <p className='photo-text'>My 14 years old pup ~ Sparky
            !</p>
          </div>

          <div className="photo-item">
            <img src="./fish.jpg" alt="" className='about-me-photo'/>
            <p className='photo-text'>My PB Largemouth Bass! ~ 7.8lbs</p>
          </div>

          <div className="photo-item">
            <img src="./snow.JPG" alt="" className='about-me-photo'/>
            <p className='photo-text'>SnowBoarding at Tahoe!</p>
          </div>


        </div>

      </div>
      {/* <p>
      I'm a Web developer from Bay Area, CA. I'm currently look for my first dev job.
      After 16 years of working Automotive field of helping client/tech to diagnose and repair their vehicle.
      I decide to have a career switch to Web development, from self study, online course and bootcamp - done it all
      I found that coding is fun and i really enjoy the 'Aha' moment! - enjoy learn new things
      In my space time i enjoy learn new things and enjoy the outdoor!

      if u need to reach me, U can send me a message at the Contact page.
        </p> */}
    </div>
  )
}

export default AboutMe;