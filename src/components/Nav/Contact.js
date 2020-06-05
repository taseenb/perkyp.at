import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const blank = { rel: 'noopener noreferrer', target: '_blank' }

export default function Contact ({ onClose }) {
  const [email, setEmail] = useState('')

  useEffect(() => {
    // Do not render on the server
    setEmail('mail@perkyp.at')
  }, [])

  return (
    <div className='nav-contact'>
      <div className='name-box'>
        <div className='heading'>
          <Link to='/bio' onClick={onClose}>
            Esteban ALMIRON
          </Link>
        </div>
        London E8
      </div>
      <br />
      <br />
      <div className='links-list'>
        <a href='https://github.com/taseenb' {...blank}>
          Github
        </a>
        <br />
        <a href='https://www.linkedin.com/in/estebanalmiron' {...blank}>
          Linkedin
        </a>
        <br />
        <a href='https://twitter.com/perkyp_at' {...blank}>
          Twitter
        </a>
        <br />
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  )
}
