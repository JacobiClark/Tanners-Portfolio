import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"
import Comics from "./Comics"


const LandingContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  padding: 0 20px;
`
const VideoContainer = styled.div`
  position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`
const Video = styled.iframe`
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
`
const IndexPage = () => {
  return(
    <Comics>
    </Comics>
  )
}

export default IndexPage


