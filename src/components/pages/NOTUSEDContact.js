import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Page from '../shared/Page'

import data from '../../data'
import C from '../../const'

const blank = C.targetBlank

function Contact (props) {
  const [email, setEmail] = useState('')
  const { metaDescription } = data
  const { displayName, description } = data.pages.contact
  const desc = description || metaDescription

  // console.log(description, metaDescription)

  useEffect(() => {
    // Do not render on the server
    setEmail('mail@perkyp.at')
  }, [])

  return (
    <>
      <Helmet>
        <title>{displayName}</title>
        <meta name='description' content={desc} />
        <meta property='og:description' content={desc} />
        <meta property='og:type' content='profile' />
      </Helmet>
      <Page id='contact'>
        <div className='name-box'>
          <div className='heading'>
            <Link to='/bio'>Esteban ALMIRON</Link>
          </div>
          London E8
        </div>
        <br />
        <br />
        <div className='links-list'>
          <a href='https://github.com/taseenb' {...blank}>
            Github
          </a>
          <a href='https://www.linkedin.com/in/estebanalmiron' {...blank}>
            Linkedin
          </a>
          <a href='https://twitter.com/perkyp_at' {...blank}>
            Twitter
          </a>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </Page>
    </>
  )
}

export default Contact
