import React, { useRef } from 'react';
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import emailjs from '@emailjs/browser';
const ContactData = [
  {
    id:1,
    icon: <MdOutlineEmail />,
    title:"Email",
    info: "leenafantaeduc@gmail.com",
    link: "mailto:leenafantaeduc@gmail.com",
  },
  {
    id:1,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "lina nour",
    link: "https://www.messenger.com/",
  },
  {
    id:1,
    icon: <BsWhatsapp />,
    title:"WhatsApp",
    info: "0123456789",
    link: "https://www.whatsapp.com/?lang=fr",
  }
]
function Contact() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0x4m7bd', 'template_pu4g20v', form.current, '7_yWRnzSEzrX4NzCc',)
    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
        {ContactData.map(({ id, icon, title, info, link }) => (
          <article key={id} className="contact_option">
                {icon}
                <h4>{title}</h4>
                <h5>{info}</h5>
                <a href={link} target='_blank'>Send Message</a>
          </article>
                ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea placeholder='Your Message' name="message" rows={10}></textarea>
        <button className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact