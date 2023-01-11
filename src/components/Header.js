import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  width: 100%;
  max-width: 62.5rem;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 4.5rem;
  background: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const StyledLogo = styled.div`
  font-size: 4rem;
  font-weight: 900;
  color: black;
`

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/" aria-label="home">
        <ul>Home</ul>
      </Link>
        <Link to="/aboutme" aria-label="About Me">
          <ul> About Me</ul>
        </Link>
        <Link to={"/project"} aria-label={"Projects"}>
        <ul>Projects</ul>
        </Link>
    </StyledHeader>
  )
}

export default Header