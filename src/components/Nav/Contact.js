import React, { useState, useEffect } from 'react'

const blank = { rel: 'noopener noreferrer', target: '_blank' }

export default function Contact () {
  const [email, setEmail] = useState('')

  useEffect(() => {
    // Do not render on the server
    setEmail('mail@perkyp.at')
  }, [])

  return (
    <div>
      <div className='name-box'>
        <div className='heading'>Esteban ALMIRON</div>
        London E8
      </div>
      <br />
      <br />
      <div className='links-list'>
        <a href={`mailto:${email}`}>{email}</a>
        <br />
        <a href='https://github.com/taseenb' {...blank}>
          Github
        </a>
        <br />
        <a href='https://twitter.com/perkyp_at' {...blank}>
          Twitter
        </a>
        <br />
        <a href='https://www.linkedin.com/in/estebanalmiron' {...blank}>
          Linkedin
        </a>
      </div>
    </div>
  )
}
