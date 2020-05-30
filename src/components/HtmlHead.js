import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

import ReqContext from '../context/ReqContext'

export default function HtmlHead ({ data }) {
  const { baseUrl } = useContext(ReqContext)
  const { pathname } = useLocation()
  const { title, description, metaDescription, metaKeywords, ogImage } = data
  const canonicalUrl = 'https://perkyp.at' + pathname

  return (
    <Helmet>
      <title>{title}</title>
      <link rel='canonical' href={canonicalUrl} />
      <meta name='description' content={metaDescription} />
      <meta name='keywords' content={metaKeywords} />

      {/* OG meta */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='@taseenb' />
      <meta name='twitter:image:alt' content={description} />
      <meta property='og:image' content={baseUrl + ogImage} />
      <meta property='og:image:height' content='1080' />
      <meta property='og:image:width' content='1920' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:type' content='website' />
    </Helmet>
  )
}
