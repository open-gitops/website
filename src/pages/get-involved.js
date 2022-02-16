import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MdxContent from "../components/ui/mdx-content"
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
        title="Get Involved"
        description="The GitOps Working Group is an open group, inviting companies and individuals to join and contribute to the community and the adoption of GitOps across the cloud native landscape. There are a few ways you can get involved."
        url={location.href}
        image={thumbnail}
      />

      <Container narrow className="pt-28 md:pt-48">
        <h1 className="mb-8 lg:mb-12 text-center">
          Get <span className="text-accent">Involved</span>
        </h1>

        <ContentWrapper>
          <MdxContent>{query.mdx.body}</MdxContent>
        </ContentWrapper>

        <Social full className="mt-10" />
      </Container>
    </Layout>
  )
}

export default GetInvolvedPage
