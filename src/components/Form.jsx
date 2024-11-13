import "./FormStyles.css";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bhv2hrh', 'template_a9em1fg', form.current, {
        publicKey: 'gIWed3JCNFHvrfVKV',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
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
      <input type="submit" value="Send" />
      </form>
    </div>
    
  );
};

// const Form = () => {
//   return (
//     <div className="form">
//         <form>
//           <label>Your Name</label>
//           <input type="text" />
//           <label>Email</label>
//           <input type="email" />  
//           <label>Subject</label>
//           <input type="text" />  
//           <label>Message</label>
//           <textarea rows="6" placeholder="Type your message here"/> 
//           <button className="btn">Submit</button>  
//         </form>
//     </div>
//   )
// }

export default Form