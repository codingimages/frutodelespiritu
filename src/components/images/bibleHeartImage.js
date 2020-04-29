import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const BibleOne = () => {
  const data = useStaticQuery(graphql`
    {
        placeholderImage: file(relativePath: { eq: "bible-heart.jpg" }) {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `)

  const bibleOne = data.placeholderImage.childImageSharp.fluid

  return <Img
    style={{
      width: "70%",
      margin: "auto",
      height: "auto"
    }}
    fluid={bibleOne}>
  </Img>
}

export default BibleOne
