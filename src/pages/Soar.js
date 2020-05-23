import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import  Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MediaContainer = styled.div`
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  justify-content: center;
  margin: 0 auto;
`
const Image = styled(Img)`
  width: 100%;
  max-width: 500px;
`

const Soar = () => {
  const data = useStaticQuery(graphql`
    query Soar {
      soar: allFile(filter: {relativeDirectory: {eq: "soar"}}) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
          
        }
      }
    }
  `)
  console.log(data)
  return(
    <Layout>
      <SEO title="Soar Gallery by TJ"/>
      <MediaContainer>
      {data.soar.nodes.map(soar => (
        <Image
          key={soar.id}
          fluid={soar.childImageSharp.fluid}
        />
      ))}
      </MediaContainer>

    </Layout>
  )
}

export default Soar
