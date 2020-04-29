import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const SkyHands = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
        placeholderImage: file(relativePath: { eq: "bible-study.jpg" }) {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `)

  const skyHands = data.placeholderImage.childImageSharp.fluid

  return <Img
    style={{
      width: "70%",
      margin: "auto",
      height: "auto"
    }}
    fluid={skyHands}>
  </Img>
}

export default SkyHands
