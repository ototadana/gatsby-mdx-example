import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import styled from "@emotion/styled"

const BlogContainer = styled.div`
  padding: 10px;
`

const Title = styled.h1`
  border-bottom: 1px solid gray;
`

const Blog = ({ data }) => (
  <BlogContainer>
    <Title>{data.mdx.frontmatter.title}</Title>
    <MDXRenderer frontmatter={data.mdx.frontmatter}>{data.mdx.body}</MDXRenderer>
  </BlogContainer>
)
export default Blog

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        slug
        images {
          childImageSharp {
            gatsbyImageData(
              width: 300
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`