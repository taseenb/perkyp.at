import React from 'react'
import { Helmet } from 'react-helmet'

import Page from '../shared/Page'

import data from '../../data'
import C from '../../const'

const blank = C.targetBlank

function Bio (props) {
  const { metaDescription } = data
  const { displayName, description } = data.pages.bio
  const desc = description || metaDescription

  // console.log(description, metaDescription)

  return (
    <>
      <Helmet>
        <title>{displayName}</title>
        <meta name='description' content={desc} />
        <meta property='og:description' content={desc} />
        <meta property='og:type' content='profile' />
      </Helmet>
      <Page id='bio'>
        <div className='intro'>
          <h2 className='heading'>Bio</h2>

          <p className=''>
            <strong>
              Front end development (React, Node)
              <br />
              Computational design, UX/UI
              <br />
              Interactive and visual arts
            </strong>
            <br />
            <br />
          </p>
          <p>
            Hello! I'm Esteban (Perky Pat is just a{' '}
            <strong>
              <a
                href='https://scifi.stackexchange.com/questions/60900/what-is-the-story-or-metaphor-behind-perky-pat'
                {...blank}
              >
                puppet
              </a>
            </strong>{' '}
            from an{' '}
            <strong>
              <a
                href='https://www.goodreads.com/book/show/14185.The_Three_Stigmata_of_Palmer_Eldritch'
                {...blank}
              >
                illusory world
              </a>
            </strong>
            ). In 2005 I graduated in art and media studies at the University of
            Bologna, Italy. I build interactive applications for companies,
            brands and other organisations in collaboration with digital
            studios, designers, artists.
            <br />
            <br />
          </p>
        </div>

        <div className='tech'>
          <h2 className='heading'>Tech</h2>
          <p>
            Javascript / ES6+, React, MobX, Redux, Three.js /
            WebGL, Node.js, Express, A-Frame, canvas 2D, HTML5, D3.js, Babel, Webpack, Browserify, AWS, Google Cloud, Electron, etc.
            <br />
            <br />
          </p>
        </div>

        <h2 className='heading'>Clients &amp; Partners</h2>
        {/* In the last years I have worked with:  */}
        <ul className='clients-list'>
          <li>
            <a href='https://www.happyfinish.com/' {...blank}>
              Happy Finish, London
            </a>
          </li>
          <li>
            <a href='https://www.unit9.com/' {...blank}>
              Unit 9, London
            </a>
          </li>
          <li>
            <a href='https://www.field.io/' {...blank}>
              Field.io, London
            </a>
          </li>
          <li>
            <a href='https://www.theguardian.com/uk/' {...blank}>
              The Guardian, London
            </a>
            <ul>
              <li>
                Spotify, Paramount, Nespresso, Barclays, Natwest, Heathrow
              </li>
            </ul>
          </li>
          <li>
            <a href='https://signal-noise.co.uk/' {...blank}>
              Signal | Noise, London
            </a>
            <ul>
              <li>The Economist</li>
            </ul>
          </li>
          <li>
            <a href='https://www.toasterltd.com/' {...blank}>
              Toaster, London
            </a>
            <ul>
              <li>Google</li>
            </ul>
          </li>
          <li>
            <a href='https://www.artificialrome.com/' {...blank}>
              Artificial Rome, Berlin
            </a>
            <ul>
              <li>Siemens, Sennheiser</li>
            </ul>
          </li>
          <li>
            <a href='https://www.agencepoupeesrusses.com/' {...blank}>
              Poupées Russes, Paris
            </a>
            <ul>
              <li>Guerlain, Dior</li>
            </ul>
          </li>
          <li>
            La Moulade, London
            <ul>
              <li>
                <a href='https://www.christianlouboutin.com/' {...blank}>
                  Christian Louboutin
                </a>
                ,{' '}
                <a href='https://www.industrialfacility.com/' {...blank}>
                  Industrial Facility
                </a>
                ,{' '}
                <a href='https://www.wastberg.com/' {...blank}>
                  Wastberg
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href='https://www.mazarine.com/' {...blank}>
              Mazarine Digital, Paris
            </a>
            <ul>
              <li>Chanel, Dior, Caroll, Carven, Biotherm, Club Med, etc.</li>
            </ul>
          </li>
          <li>
            <a href='https://www.betc-life.com/fr/' {...blank}>
              BETC, Paris
            </a>
            <ul>
              <li>Peugeot, Canal +, Pages Jaunes, Sixt, etc.</li>
            </ul>
          </li>
          <li>
            <a href='https://www.buzzman.fr/' {...blank}>
              Buzzman, Paris
            </a>
            <ul>
              <li>Microsoft Bing, MTV, Cannes Lions, etc.</li>
            </ul>
          </li>

          <li>
            <a href='https://www.heineken.fr/' {...blank}>
              Heineken France, Paris
            </a>
          </li>
          {/* <li>
            <a href='http://www.alaincharlesperrot.com/' {...blank}>
              Alain Charles Perrot, Architecte - Paris
            </a>
          </li> */}
          <li>
            <a href='https://www.mademoisellechapeaux.com/' {...blank}>
              Mademoiselle Chapeaux - Paris
            </a>
          </li>
          <li>
            <a href='https://www.galeriecharlot.com/' {...blank}>
              Galerie Charlot - Paris
            </a>
          </li>
          <li>
            <a href='https://www.ponctuelle.com/' {...blank}>
              Ponctuelle Light Design - Paris
            </a>
          </li>
          <li>
            <a href='http://www.dancityfestival.com/' {...blank}>
              Dancity Festival - Italy
            </a>
          </li>
        </ul>
      </Page>
    </>
  )
}

export default Bio
