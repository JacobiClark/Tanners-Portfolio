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

const NightDrive = () => {
  const data = useStaticQuery(graphql`
    query NightDrive {
      nightDrive: allFile(filter: {relativeDirectory: {eq: "nightDrive"}}) {
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
      <SEO title="NightDrive Gallery by TJ"/>
      <MediaContainer>
      {data.nightDrive.nodes.map(nightDrive => (
        <Image
          key={nightDrive.id}
          fluid={nightDrive.childImageSharp.fluid}
        />
      ))}
      </MediaContainer>

    </Layout>
  )
}

export default NightDrive
