import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import { css } from "@emotion/core"

const SkyHands = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
        placeholderImage: file(relativePath: { eq: "sky-hands.jpg" }) {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `)

  const skyHands = data.placeholderImage.childImageSharp.fluid

  return <BackgroundImage
    css={css`
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center;
        `}
    Tag="section"
    fluid={skyHands}>
    {children}
  </BackgroundImage>
}

export default SkyHands
