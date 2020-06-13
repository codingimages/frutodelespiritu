import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const SpinnerImage = () => {
    const data = useStaticQuery(graphql`
    {
        placeholderImage: file(relativePath: { eq: "spinner.gif" }) {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `)

    const spinnerImage = data.placeholderImage.childImageSharp.fluid

    return <Img
        style={{
            margin: "auto",
        }}
        fluid={spinnerImage}>
    </Img>
}

export default SpinnerImage
