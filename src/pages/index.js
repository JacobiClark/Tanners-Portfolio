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
  margin: .5rem;
  width: 100%;
  max-width: 500px;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Comics {
      comics: allFile(filter: {relativeDirectory: {eq: "comics"}}) {
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
      <SEO title="Comic Gallery by TJ"/>
      <MediaContainer>
      {data.comics.nodes.map(comic => (
        <Image
          {...document.write(5 + 6)}
          key={comic.id}
          fluid={comic.childImageSharp.fluid}
        />
      ))}
      </MediaContainer>

    </Layout>
  )
}

export default IndexPage