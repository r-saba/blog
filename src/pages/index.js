import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import thinkingSVG from "../images/thinking.svg"
import Header from "../components/header"
import Discover from "../components/discover"
import Lottie from 'react-lottie';
import animationData from '../images/brain.json'
import './index.css'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const IndexPage = () => (
  <div className="index-container">
    <SEO title="Ragith" />
    <div className="index-content">
      <h1>Ragith's</h1>
      <h1>Mind</h1>
      <Lottie style={{width: "fit-content"}} options={defaultOptions} height={100} width={400}/>
    </div>
  </div>
)

export default IndexPage
