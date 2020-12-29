import React from "react"
import { graphql, Link } from "gatsby"
import "./blogTemplate.css"
import returnSVG from "../images/return.svg"
import { Helmet } from "react-helmet"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Helmet
        title={frontmatter.title}
        meta={[
          { name: "description", content: `${markdownRemark.excerpt}` },
          { name: "keyword", content: `${frontmatter.keywords}` },
        ]}
      ></Helmet>
      <div className="blog-post-container">
        <div className="blog-post">
          <Link to="/" className="template-chevron-link">
            <img src={returnSVG} className="template-chevron-icon" alt="left arrow"></img>
          </Link>
          <div className="blog-title">
            <h1>{frontmatter.title}</h1>
          </div>
          <div className="blog-frontmatter">
            <p className="blog-date">{frontmatter.date}</p>
            <p className="blog-keywords">{frontmatter.keywords}</p>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        keywords
      }
    }
  }
`
