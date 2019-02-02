import React from 'react'
import '../styles/contact.css'

import ContactIcon from '../components/icons/contact';

const Contact = () => (
  <div className='contact_container'>
    <h1>Contact</h1>
    <h4 className='contacts_text'>Feel free to contact me so we can get your project started!</h4>
    <div className='contacts_subb'>

    <a className='contacts_email' href={'mailto: timbilestimbiles@gmail.com'}>timbilestimbiles@gmail.com</a>
    <p>817-456-9649</p>
    </div>
    <ContactIcon type='contact'/>
  </div>
)

export default Contact
