import React from 'react'
import { Helmet } from 'react-helmet'

import data from '../../data'
import C from '../../const'

const blank = C.targetBlank

function Bio (props) {
  const { metaDescription } = data
  const { displayName, description } = data.pages.bio
  const desc = description || metaDescription

  console.log(description, metaDescription)

  return (
    <>
      <Helmet>
        <title>{displayName}</title>
        <meta name='description' content={desc} />
        <meta property='og:description' content={desc} />
        <meta property='og:type' content='profile' />
      </Helmet>
      <div id='bio' className='page'>
        <div className='row no-gutters py-md-4 px-md-4 px-2 py-2'>
          <div className='col-12'>
            <div className='row no-gutters'>
              <div className='col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4'>
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
                    Hello! I'm Esteban, based in London.
                    <br />
                    In 2005 I graduated in art and media studies at the
                    University of Bologna, Italy. Today I build interactive
                    applications for companies, brands and other organisations
                    in collaboration with digital studios, designers, artists.
                    <br />
                    <br />
                  </p>
                </div>

                <div className='tech'>
                  <h2 className='heading'>Tech</h2>
                  <p>
                    Javascript / ES6+, React / Redux, Node.js, Express, Three.js
                    / WebGL, canvas 2D, HTML5, D3.js, Babel, Webpack,
                    Browserify, Electron, AWS, Google Cloud, etc.
                    <br />
                    <br />
                  </p>
                </div>

                <h2 className='heading'>Clients &amp; Partners</h2>
                {/* In the last years I have worked with:  */}
                <ul className='clients-list'>
                  <li>
                    <a href='http://www.unit9.com/' {...blank}>
                      Unit 9, London
                    </a>
                    <ul>
                      <li>Hugo Boss</li>
                    </ul>
                  </li>
                  <li>
                    <a href='http://www.field.io/' {...blank}>
                      Field.io, London
                    </a>
                  </li>
                  <li>
                    <a href='http://www.theguardian.com/uk/' {...blank}>
                      The Guardian, London
                    </a>
                    <ul>
                      <li>
                        Spotify, Nespresso, Paramount, Barclays, Natwest,
                        Heathrow
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='http://signal-noise.co.uk/' {...blank}>
                      Signal | Noise, London
                    </a>
                    <ul>
                      <li>The Economist</li>
                    </ul>
                  </li>
                  <li>
                    <a href='http://www.toasterltd.com/' {...blank}>
                      Toaster, London
                    </a>
                    <ul>
                      <li>Google</li>
                    </ul>
                  </li>
                  <li>
                    <a href='http://www.artificialrome.com/' {...blank}>
                      Artificial Rome, Berlin
                    </a>
                    <ul>
                      <li>Siemens, Sennheiser</li>
                    </ul>
                  </li>
                  <li>
                    <a href='http://www.agencepoupeesrusses.com/' {...blank}>
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
                        <a href='http://www.christianlouboutin.com/' {...blank}>
                          Christian Louboutin
                        </a>
                        ,{' '}
                        <a href='http://www.industrialfacility.com/' {...blank}>
                          Industrial Facility
                        </a>
                        ,{' '}
                        <a href='http://www.wastberg.com/' {...blank}>
                          Wastberg
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='http://www.mazarine.com/' {...blank}>
                      Mazarine Digital, Paris
                    </a>
                    <ul>
                      <li>
                        Chanel, Dior, Caroll, Carven, Biotherm, Club Med, etc.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='http://www.betc-life.com/fr/' {...blank}>
                      BETC, Paris
                    </a>
                    <ul>
                      <li>Peugeot, Canal +, Pages Jaunes, Sixt, etc.</li>
                    </ul>
                  </li>
                  <li>
                    <a href='http://www.buzzman.fr/' {...blank}>
                      Buzzman, Paris
                    </a>
                    <ul>
                      <li>Microsoft Bing, MTV, Cannes Lions, etc.</li>
                    </ul>
                  </li>

                  <li>
                    <a href='http://www.heineken.fr/' {...blank}>
                      Heineken France, Paris
                    </a>
                  </li>
                  <li>
                    <a href='http://www.alaincharlesperrot.com/' {...blank}>
                      Alain Charles Perrot, Architecte - Paris
                    </a>
                  </li>
                  <li>
                    <a href='http://www.mademoisellechapeaux.com/' {...blank}>
                      Mademoiselle Chapeaux - Paris
                    </a>
                  </li>
                  <li>
                    <a href='http://www.galeriecharlot.com/' {...blank}>
                      Galerie Charlot - Paris
                    </a>
                  </li>
                  <li>
                    <a href='http://www.ponctuelle.fr/' {...blank}>
                      Ponctuelle Light Design - Paris
                    </a>
                  </li>
                  <li>
                    <a href='http://www.dancityfestival.com/' {...blank}>
                      Dancity Festival - Italy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bio
