import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { SocialIcon } from 'react-social-icons';


const StyledDropdownItem = styled(Dropdown.Item)`
	background-color: rgb(26,26,27);
  color: white;
  margin:2px;
`
const StyledDropdownToggle = styled(Dropdown.Toggle)`
	background-color: transparent;
	border: none;
	&:after {
		content: none;
	}
`
const StyledDropdown = styled(Dropdown)`
  display: block;
  right: 8%;
  position: absolute;
	@media (min-width: 900px) {
		display: none;
	}
`
const StyledNavLink = styled(Nav.Link)`
	display: none;
	@media (min-width: 900px) {
		display: inline;
	}
`

const StyledNav = styled(Nav)`
  margin: 0 auto;
  float: none;
`

const Header = ({ siteTitle }) => (
  <header>
    <Navbar style={{backgroundColor: 'rgb(26,26,27)', marginBottom: '10px'}} variant="dark">
      <StyledNav>
        <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
        <StyledNavLink style={{color: 'rgb(255,255,255)'}}href="https://www.instagram.com/mr_tanj/" target="_blank">Instagram</StyledNavLink>
        <StyledNavLink href="/Comics">Comics</StyledNavLink>
        <StyledNavLink href="/InkIllustrations">Ink Illustrations</StyledNavLink>
        <StyledNavLink href="/Animations">Animations</StyledNavLink>
        {/*<StyledNavLink href="/Storyboards">Storyboards</StyledNavLink>*/}
        <StyledNavLink href="/Contact">Contact</StyledNavLink>
      </StyledNav>
      <StyledDropdown>
        <StyledDropdownToggle size="lg" variant="secondary">
          <FontAwesomeIcon icon={faBars} />
        </StyledDropdownToggle>
        <Dropdown.Menu alignRight style={{backgroundColor: 'rgb(52,53,54)'}} variant="dark">
          <StyledDropdownItem href="/Comics">Comics</StyledDropdownItem>
          <StyledDropdownItem href="/InkIllustrations">Ink Illustrations</StyledDropdownItem>
          <StyledDropdownItem href="/Animations">Animations</StyledDropdownItem>
          {/*<StyledDropdownItem href="/Storyboards">Storyboards</StyledDropdownItem>*/}
          <StyledDropdownItem href="/Contact">Contact</StyledDropdownItem>
          <StyledDropdownItem style={{color: 'rgb(255,255,255)'}} href="https://instagram.com/mr_tanj/">Instagram</StyledDropdownItem>
        </Dropdown.Menu>
      </StyledDropdown>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
