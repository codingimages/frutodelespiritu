import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const DevocionalesImage = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
        placeholderImage: file(relativePath: { eq: "devocionales.jpg" }) {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `)

  const devocionales = data.placeholderImage.childImageSharp.fluid

  return <Img
    style={{
      width: "70%",
      margin: "auto",
      height: "auto"
    }}
    fluid={devocionales}>
  </Img>
}

export default DevocionalesImage
