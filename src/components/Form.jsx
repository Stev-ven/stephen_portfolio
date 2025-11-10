import "./FormStyles.css";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g8w2869', 'template_a9em1fg', form.current, {
        publicKey: 'gIWed3JCNFHvrfVKV',
      })
      .then(
        () => {
          alert('Message successfully sent!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send the message', error.text);
        },
      );
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Subject</label>
      <input type="text" name="from_subject" />
      <label>Message</label>
      <textarea name="message"/>
      <input type="submit" className="btn" value="Send" />
      </form>
    </div>
    
  );
};



export default Form