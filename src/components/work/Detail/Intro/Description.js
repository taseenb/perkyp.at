import React from 'react'
import C from '../../../../const'
const { targetBlank } = C

export default function Description ({ detail }) {
  const { description, links } = detail

  return (
    <div className='description'>
      {description}
      <br />
      <br />
      {links &&
        links.map((link, i) => (
          <div className='link' key={link.url}>
            <a href={link.url} {...targetBlank}>
              {link.label || link.url}
            </a>
            {links.length < i + 1 && <br />}
          </div>
        ))}
    </div>
  )
}
