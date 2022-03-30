import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Social from "../components/ui/social"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Grid } from "../components/ui/grid"
import ContentWrapper from "../components/ui/content-wrapper"
import Members from "../components/members"
import thumbnail from "../images/thumbnail-default.png"

const AboutPage = ({ location }) => {

  const members = useStaticQuery(graphql`
    query  {
      all: allMdx(
        filter: { fileAbsolutePath: { regex: "/(content/members)/" },  frontmatter: {
           current: {ne: false}
        }}
        sort: { order: ASC, fields: frontmatter___title }
      ) {
        edges {
          node {
            frontmatter {
              title
              site
              founding
              logo {
                publicURL
              }
            }
          }
        }
       }

      founding: allMdx(
        filter: { fileAbsolutePath: { regex: "/(content/members)/" },  frontmatter: {
          founding: {eq: true}
        }}
        sort: { order: ASC, fields: frontmatter___title }
      ) {
        edges {
          node {
            frontmatter {
              title
              site
              founding
              logo {
                publicURL
              }
            }
          }
        }
      }
    }
  `)


  return (
    <Layout location={location}>
      <Seo
        title="Community"
        description="Where to find the OpenGitOps project online."
        url={location.href}
        image={thumbnail}
      />

      <Container narrow className="pt-28 md:pt-48">
        <h1 className="mb-8 lg:mb-12 text-center">Community</h1>

        <Social full className="mb-12 md:mb-24" />

        <h2 className="mb-10 text-center">
          Founding <span className="text-accent">Members</span>
        </h2>

        <ContentWrapper prose={false}>
          <Grid xs={2} md={3} lg={4}>
            <Members members={members.founding.edges} />
          </Grid>
        </ContentWrapper>

        <h2 className="mb-10 text-center pt-12 md:pt-24">
          Current <span className="text-accent">Members</span>
        </h2>

        <ContentWrapper prose={false}>
          <Grid xs={2} md={3} lg={4}>
            <Members members={members.all.edges} />
          </Grid>
        </ContentWrapper>


      </Container>
    </Layout>
  )
}

export default AboutPage
