import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const FormGroup = styled.div`
	color: rgb(141,141,138);
    display: block;
	width: 90%;
	margin: 30px auto;
`;

export const Input = styled.input`
	padding: 0.5em;
	color: rgb(229,63,2);
	background: rgb(39,39,41);
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;
  
const Contact = () => {
  return(
    <Layout>
      <SEO title="Comic Gallery by TJ"/>
      <h3>Thanks for stoppying by!</h3>
      <h3>More of my work can be found on my <a href="https://www.instagram.com/mr_tanj/" rel="noreferrer noopener" target="_blank">Instagram</a></h3>
      <h2>Please slide into my DMs below</h2>
      <FormGroup>
        <form
          name="contact-form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <Input type="hidden" name="bot-field" />
          <Input type="hidden" name="form-name" value="contact" />
          <Input name="name" placeholder="Your Name" type="text" />
          <Input name="email" placeholder="name@name.com" type="email" />
          <Input style={{height: '150px'}} name="message" placeholder="Message" type="text" />
          <button>Send</button>
        </form>
      </FormGroup>
    </Layout>
  )
}

export default Contact
