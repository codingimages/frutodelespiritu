import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const JesusEmptyCross = () => {
  const data = useStaticQuery(graphql`
    {
        placeholderImage: file(relativePath: { eq: "jesus-empty-cross.jpg" }) {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `)

  const jesusEmptyCross = data.placeholderImage.childImageSharp.fluid

  return <Img
    style={{
      width: "70%",
      margin: "auto",
      height: "auto"
    }}
    fluid={jesusEmptyCross}>
  </Img>
}

export default JesusEmptyCross
