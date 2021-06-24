import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Grid } from "../components/grid"
import Seo from "../components/seo"
import CardPost from "../components/card-post"

const BlogPage = ({ location }) => {
  const query = useStaticQuery(
    graphql`
      query {
        allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          edges {
            node {
              slug
              excerpt(pruneLength: 160)
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
                thumbnail {
                  childImageSharp {
                    gatsbyImageData(
                      width: 600
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout location={location}>
      <Seo
        title="Blog"
        description="Blog"
        url={location.href}
        // image={thumbnail}
      />

      <Container className="mt-32">
        <h1 className="mb-12 text-center">Blog</h1>

        <Grid md={2} lg={3}>
          {query.allMdx.edges.map(item => {
            return (
              <CardPost
                title={item.node.frontmatter.title}
                date={item.node.frontmatter.date}
                excerpt={item.node.excerpt}
                img={
                  item.node.frontmatter.thumbnail.childImageSharp
                    .gatsbyImageData
                }
                to={item.node.slug}
              />
            )
          })}
        </Grid>
      </Container>
    </Layout>
  )
}

export default BlogPage
