import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MediaContainer = styled.div`
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  justify-content: center;
  margin: 0 auto;
  background-color: 'rgb(26,26,27)'
`

const Animations = () => {
  
  return(
    <Layout>
      <SEO title="Animations by TJ"/>
      <MediaContainer>
      <iframe title="NightDrive" width="560" height="315" src="https://www.youtube.com/embed/69PY--NDU5k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </MediaContainer>
    </Layout>
  )
}

export default Animations
