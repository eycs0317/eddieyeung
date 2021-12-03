import React from 'react'
import './aboutme.css'

function AboutMe () {
  return (
    <div className='about-me'>
      <div className='about-me-content'>
        <h1>Hi, I'm Eddie</h1>
        <p className='about-me-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
        <p className='about-me-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
        <p className='about-me-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
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
      1.pass - background, school
      2.current - keep learning

      After working 16 years in Automotive field.
      after 16 year of automotive
      try something different
      enjoy learning new thing
      from bay area,ca
      enjoy the outdoor

      currently practicing on what i learn from the bootcamp and building things, improving my skill
      if u need to find me, message me on linkedin
        </p> */}
    </div>
  )
}

export default AboutMe;