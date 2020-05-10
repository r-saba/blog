import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import thinkingSVG from "../images/thinking.svg"
import "./header.css"
const Header = ({ siteTitle }) => (
  <header>
    <h1>Ragith's Mind</h1>
    <img className="thinking-img" src={thinkingSVG}></img>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
