import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import { Container } from "../components/grid"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "../components/seo"
import ContentWrapper from "../components/content-wrapper"
import PressReleases from "../components/press-releases"

const AboutPage = ({ location }) => {
  const query = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "about" }) {
          body
        }
      }
    `
  )

  return (
    <Layout location={location}>
      <Seo
        title="Events"
        description="Events"
        url={location.href}
        // image={thumbnail}
      />

      <Container narrow className="mt-32">
        <h1 className="mb-12 text-center">
          About <span className="text-primary">OpenGitOps</span>
        </h1>

        <ContentWrapper>
          <MDXRenderer>{query.mdx.body}</MDXRenderer>
        </ContentWrapper>

        <PressReleases className="my-12" />
      </Container>
    </Layout>
  )
}

export default AboutPage
