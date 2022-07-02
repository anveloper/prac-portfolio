import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4zjil3b', 'template_3xxbgj8', form.current, 'bKR3B3LQwOu_ZOpva');

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon' />
            <h4>E-mail</h4>
            <h5>hh@gmail.com</h5>
            <a href="mailto:hh@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Facebook DM</h5>
            <a href="https://m.me/seongjin.an.1992" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+082 00000000</h5>
            <a href="http://api.whatsapp.com/send?phone=+08200000000" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={ sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your email' required />
          <textarea name="message" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact