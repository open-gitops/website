import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import thumbnail from "../images/thumbnail-default.png"
import { Container } from "../components/ui/grid"
import { Grid } from "../components/ui/grid"
import CardPost from "../components/ui/card-post"

export default function TrainingPage({ location }) {
  const query = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/(content/trainings)/" } }
          sort: { order: ASC, fields: frontmatter___title }
          limit: 6
        ) {
          edges {
            node {
              frontmatter {
                title
                site
                description
                thumbnail {
                  childImageSharp {
                    gatsbyImageData(
                      width: 400
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
        title="training and certification"
        description="Become a professional by getting certified in GitOps"
        url={location.href}
        image={thumbnail}
      />
      <Container className="pt-28 lg:pt-48">
        <h1 className="mb-8 lg:mb-12 text-center lg:text-left">
          Training & Certification
        </h1>
        <Grid md={2} lg={3}>
          {query.allMdx.edges.map((item, index) => {
            return (
              <CardPost
                key={index}
                title={item.node.frontmatter.title}
                date={item.node.frontmatter.date}
                to={item.node.frontmatter.site}
                img={
                  item.node.frontmatter.thumbnail?.childImageSharp
                    .gatsbyImageData
                }
              />
            )
          })}
        </Grid>
      </Container>
    </Layout>
  )
}
