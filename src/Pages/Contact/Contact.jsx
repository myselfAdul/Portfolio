import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import styles from './contact.module.css'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ezyxyns', 'template_ipziv4f', form.current, {
        publicKey: 'tsKTpvHowgRlRyfzj',
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
    <form className={styles.contact_form} ref={form} onSubmit={sendEmail}>
      <div>
        <label>Name</label>
        <input type="text" name="user_name" placeholder='Type your name...'/>
      </div>

      <div>
        <label>Email</label>
        <input type="email" name="user_email" placeholder='Please provide your email...' />
      </div>
      
      <div>
        <label>Message</label>
        <textarea name="message" />

      </div>
        
      {/* <button className={styles.send_btn} type="submit" value="Send" /> */}

      <button className={styles.send_btn} type="submit" value="Send"> Submit</button>


      

    </form>
  )
}

export default Contact
