import { useStaticQuery, Link } from "gatsby"
import React from "react"
import "./discover.css"

const Discover = () => {
  const data = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { path: { eq: "/why-gatsby" } }) {
          html
          excerpt(pruneLength: 280)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    `
  )
  return (
    <Link
      to={data.markdownRemark.frontmatter.path}
      className="article-card-link"
    >
      <section>
        <article>
          <h2 className="article-title">
            {data.markdownRemark.frontmatter.title}
          </h2>
          <p className="article-date">{data.markdownRemark.frontmatter.date}</p>
          <p className="article-excerpt">{data.markdownRemark.excerpt}</p>
          READ MORE
        </article>
      </section>
    </Link>
  )
}

export default Discover
