import React, { useContext } from 'react'
import { cx } from 'emotion'

import { Helmet } from 'react-helmet'

import ReqContext from '../../context/ReqContext'

import Intro from './Detail/Intro'
import Visuals from './Detail/Visuals'

import data from '../../data'

export default function Detail ({ work }) {
  const { baseUrl } = useContext(ReqContext)
  const { seo, template, displayName, intro, image } = work

  const templateClass = template === 'default' ? 'default' : null
  const detailClass = work.detail.className || null

  // Html head
  const title = `${displayName} by Perky Pat`
  const desc = intro || data.metaDescription
  const ogImage = `/static/work/${seo}/${image}`

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={desc} />
        <meta property='og:description' content={desc} />
        <meta property='og:image' content={baseUrl + ogImage} />
        <meta property='og:image:height' content='1080' />
        <meta property='og:image:width' content='1920' />
        <meta property="og:type" content="article" />
      </Helmet>
      <div id={`${seo}`} className={cx('detail', templateClass, detailClass)}>
        <Intro work={work} />
        <Visuals work={work} />
      </div>
    </>
  )
}
