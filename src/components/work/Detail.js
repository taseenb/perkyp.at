import React, { useContext } from 'react'
import { cx } from 'emotion'

import { Helmet } from 'react-helmet'

import ReqContext from '../../context/ReqContext'
import Intro from './Detail/Intro'
import Visuals from './Detail/Visuals'

export default function Detail (props) {
  const { seo, template, displayName, intro, image, detail, shared } = props
  const { metaDescription } = shared

  const { baseUrl } = useContext(ReqContext)

  const templateClass = template === 'default' ? 'default' : null
  const detailClass = detail.className || null

  // Html head
  const title = `${displayName} by Perky Pat`
  const desc = intro || metaDescription
  const ogImage = baseUrl + image

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={desc} />
        <meta property='og:description' content={desc} />
        <meta property='og:image' content={ogImage} />
        <meta property='og:image:height' content='1080' />
        <meta property='og:image:width' content='1920' />
        <meta property='og:type' content='article' />
      </Helmet>
      <div id={`${seo}`} className={cx('detail', templateClass, detailClass)}>
        <Intro {...props} />
        <Visuals {...props} />
      </div>
    </>
  )
}
