import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PressReleases from "../components/press-releases"
import { Container } from "../components/ui/grid"
import ContentWrapper from "../components/ui/content-wrapper"

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

        <PressReleases className="mt-20" />
      </Container>
    </Layout>
  )
}

export default AboutPage
