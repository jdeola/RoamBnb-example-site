/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";



function Seo({ title, description, image, url, type }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title,
            defaultDescription: description,
            siteUrl: url,
            defaultImage: image,
            defaultType: type,
          }
        }
      }
    `
  )

  const { pathname } = useLocation()
  
  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    defaultType
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    type: type || defaultType
  }

  return (
    <Helmet title={seo.title}>
        {seo.description && <meta name="description" content={seo.description} />}
        {seo.url && <meta name="url" content={seo.url} />}
        {seo.image && <meta name="image" content={seo.image} />}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.type && <meta property="og:type" content={seo.type} />}
        {seo.description && <meta property="og:description" content={seo.description} />}
        {seo.url && <meta property="og:url" content={seo.url} />}
        {seo.image && <meta property="og:image" content={seo.image} />}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="icon" href={seo.image} />
        <link rel="icon" type= "image/png" href={seo.image}/> 
        <link rel="shortcut icon" type= "image/png" href={seo.image}/> 
        <link rel="apple-touch-icon" href={seo.image}/>
        <link rel="canonical" href={seo.url} /> 
        <html lang="en" amp />
    </Helmet>
  )
}

Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
  url: null,
  article: false
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  article: PropTypes.bool
}

export default Seo
