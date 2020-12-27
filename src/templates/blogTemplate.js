import React from "react"
import { graphql, Link } from "gatsby"
import "./blogTemplate.css"
import returnSVG from "../images/return.svg"
import { Helmet } from "react-helmet"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
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
          <div className="blog-title">
            <Link to="/">
              <img src={returnSVG}></img>
            </Link>
            <h1>{frontmatter.title}</h1>
          </div>
          <h2>{frontmatter.date}</h2>
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
