import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './contactForm.css';

function ContactForm () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const isValidEmail = email => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
};

  const submit = () => {
      if (name && isValidEmail(email) && message) {
          const serviceId = 'service_zk97931';
          const templateId = 'template_3ipf9nd';
          const userId = 'user_GgvOg209LTY03oE7AfG4K';
          const templateParams = {
              name,
              email,
              message
          };

          emailjs.send(serviceId, templateId, templateParams, userId)
              .then(response => console.log(response))
              .then(error => console.log(error));

          setName('');
          setEmail('');
          setMessage('');
          setEmailSent(true);
          setTimeout(() => {
            setEmailSent(false)
          },2000)
      } else {
        if(!isValidEmail(email)) {
          alert('Invalid Email')
        } else {
          alert('Please fill in all fields.');
        }

      }
  }

  return (
      <div id="contact-form">

        <div className='form-row'>

          <div className="form-field">
            <label className='form-label'> Name <span className='form-required'>*</span></label>
            <input className='form-input' type="text" value={name} onChange={e => setName(e.target.value)} />
          </div>

          <div className="form-field">
            <label className='form-label'> Email <span className='form-required'>*</span></label>
            <input className='form-input' type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>

        </div>

        <div className='form-row'>

          <div className="form-field-textarea">
            <label className='form-label' > Message <span className='form-required'>*</span></label>
            <textarea className='form-textarea'  value={message} onChange={e => setMessage(e.target.value)}></textarea>
          </div>

        </div>


        <div className='form-row form-row-button'>
          <button className='form-button' onClick={submit}>Send Message</button>
          <div className='form-message'>
            {emailSent ? <span>Thank you for your message!</span> : null }

          </div>

        </div>

        {/* <div className='form-row'></div>
            <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span> */}
      </div>
  );
}

export default ContactForm;