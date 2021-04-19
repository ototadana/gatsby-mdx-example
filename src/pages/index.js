import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/react"

const globalStyle = css`
  html {
    font-size: 10pt;
    background-color: #f0f0f0;
    padding: 20px;
  }
`

const Container = styled.div`
  margin: 0 auto;

  @media only screen and (min-width: 500px) {
    width: 60%;
    max-width: 600px;
  }
`

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0px;
`

const Date = styled.h2`
  font-size: 1.0rem;
  margin: 0px;
  color: gray;
`

const Article = ({ info }) => {
  const {title, slug, date} = info
  return (
    <div css={css`
      margin: 10px;
      padding: 8px 12px;
      background-color: white;
    `}>
      <Title><Link to={slug}>{title}</Link></Title>
      <Date>{date}</Date>
    </div>
  )
}

const Index = ({ data }) => {
  return (
    <>
      <Global styles={globalStyle}/>
      <Container>
        {data.allMdx.edges.map(e => <Article info={e.node.frontmatter}/>)}
      </Container>
    </>
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