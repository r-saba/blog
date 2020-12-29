import React from "react"
import BlogCard from "./blogCard"

import { graphql, useStaticQuery } from "gatsby"

import "./discover.css"

const Discover = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
          edges {
            node {
              frontmatter {
                path
                title
                date
              }
              excerpt
            }
          }
        }
      }
    `
  )
  const blogs = data.allMarkdownRemark.edges;

  const blogCards = blogs.map((blog) => <BlogCard key={blog.node.frontmatter.title} path={blog.node.frontmatter.path} date={blog.node.frontmatter.date} title={blog.node.frontmatter.title} excerpt={blog.node.excerpt} />)


  return (
    <section className="section-discover">
      {blogCards}
    </section>
  )
}

export default Discover
