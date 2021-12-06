import React from 'react'
import './aboutme.css'

function AboutMe () {
  return (
    <div className='about-me'>
      <div className='about-me-content'>
        <h1>Hi, I'm Eddie</h1>
        <p className='about-me-text'>I am a Web Developer based in San Francisco Bay Area.</p>

        <p className='about-me-text'>After 16 years of working in the automotive industry of helping clients and technicians to diagnose and solve their problems involving their vehicles, I decided to take on a new challenge and made a decision for a career change. I came upon the web development field and enrolled in the Full Stack Web Developer program at UC Berkeley.</p>

        <p className='about-me-text'>Through the classes and self study, I found that coding is fun and constantly evolving. I really enjoy bringing products to life, and seeing my projects being deployed is very rewarding. You can check out my projects in <a className='github-link' href='https://github.com/eycs0317' target='_blank' rel="noopener noreferrer">Github</a>.</p>

        <p className='about-me-text'>In my free time, I like to take my boat out to fish. My personal record is a 7.8 pound bass from Delta! I also like to build things around the house and explore the outdoors.</p>



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