import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PressReleases from "../components/press-releases"
import { Container } from "../components/ui/grid"
import ContentWrapper from "../components/ui/content-wrapper"

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
