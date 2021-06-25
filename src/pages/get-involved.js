import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import { Container } from "../components/grid"
import Seo from "../components/seo"
import PressReleases from "../components/press-releases"
import { MDXRenderer } from "gatsby-plugin-mdx"
import ContentWrapper from "../components/content-wrapper"

const GetInvolvedPage = ({ location }) => {
  const query = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "get-involved" }) {
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
          Get <span className="text-primary">Involved</span>
        </h1>

        <ContentWrapper>
          <MDXRenderer>{query.mdx.body}</MDXRenderer>
        </ContentWrapper>

        <PressReleases className="my-12" />
      </Container>
    </Layout>
  )
}

export default GetInvolvedPage
