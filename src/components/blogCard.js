import React from 'react'

import { Link } from "gatsby"

import "./blogCard.css"

const BlogCard = ({ path, title, date, excerpt }) => (
    <div className="blog-card-container">
        <Link
        to={path}
        className="blog-card-link"
        >
        <article>
            <h2 className="blog-card-title">
            {title}
            </h2>
            <p className="blog-card-excerpt">{excerpt}</p>
        </article>
        </Link>
    </div>
)

export default BlogCard