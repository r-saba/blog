import React from "react"
import SEO from "../components/seo"
import "../fonts/typography.css"
import "./index.css"

import { WelcomeSection, Discover } from "../components"

const IndexPage = () => (
    <div>
        <SEO title="Ragith's Mind"/>
        <WelcomeSection />
        <Discover />
    </div>
)

export default IndexPage
