import React from 'react';
import './contact.css'
import ContactForm from './ContactForm'
function Contact () {
  return (
    <div className='contact'>
      <div className="contact-upper">
        <h1 className='contact-title'>Contact Me</h1>
        <p className='contact-message'>If you like to talk to me please fill in the form below! I will get back to you within 48hrs.</p>
      </div>
      <div className="contact-lower">
        <ContactForm />
      </div>


    </div>
  )
}

export default Contact;