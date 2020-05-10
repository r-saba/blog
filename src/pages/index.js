import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import thinkingSVG from "../images/thinking.svg"
import Header from "../components/header"
import Discover from "../components/discover"
import Helmet from "react-helmet"

const IndexPage = () => (
  <Layout>
    <SEO title="Ragith" />
    <Helmet>
      <meta http-equiv="refresh" content="0; URL=https://www.ragith.com/blog" />
      <link rel="canonical" href="https://www.example.com/" />
    </Helmet>
    <Header />
    <Discover />
  </Layout>
)

export default IndexPage
