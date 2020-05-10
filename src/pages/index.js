import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import thinkingSVG from "../images/thinking.svg"
import Header from "../components/header"
import Discover from "../components/discover"

const IndexPage = () => (
  <Layout>
    <SEO title="Ragith" />
    <Header />
    <Discover />
  </Layout>
)

export default IndexPage
