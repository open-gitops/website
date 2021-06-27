import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "../components/ui/grid"
import ContentWrapper from "../components/ui/content-wrapper"
import Social from "../components/ui/social"
import thumbnail from "../images/thumbnail-default.png"

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
        image={thumbnail}
      />

      <Container narrow className="pt-28 md:pt-32">
        <h1 className="mb-8 lg:mb-12 text-center">
          Get <span className="text-accent">Involved</span>
        </h1>

        <ContentWrapper>
          <MDXRenderer>{query.mdx.body}</MDXRenderer>
        </ContentWrapper>

        <Social full className="mt-10" />
      </Container>
    </Layout>
  )
}

export default GetInvolvedPage
