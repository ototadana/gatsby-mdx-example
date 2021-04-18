import React from "react"
import { Link, graphql } from "gatsby"

const Article = ({ info }) => {
  const {title, slug, date} = info
  return (
    <div>
      <h1><Link to={slug}>{title}</Link></h1>
      <h2>{date}</h2>
    </div>
  )
}

const Index = ({ data }) => {
  return (
    <div>
      {data.allMdx.edges.map(e => <Article info={e.node.frontmatter}/>)}
    </div>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            date
            slug
            title
          }
        }
      }
    }
  }
`