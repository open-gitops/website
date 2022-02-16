import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MdxContent from "../components/ui/mdx-content"
import { Container } from "../components/ui/grid"
import ContentWrapper from "../components/ui/content-wrapper"
import thumbnail from "../images/thumbnail-default.png"

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
        title="About"
        description="The GitOps Working Group is a WG under the CNCF App Delivery SIG. The focus of the GitOps WG is to clearly define a vendor-neutral, principle-led meaning of GitOps."
        url={location.href}
        image={thumbnail}
      />

      <Container narrow className="pt-28 md:pt-48">
        <h1 className="mb-8 lg:mb-12 text-center">
          About <span className="text-accent">OpenGitOps</span>
        </h1>

        <ContentWrapper>
          <MdxContent>{query.mdx.body}</MdxContent>
        </ContentWrapper>
      </Container>
    </Layout>
  )
}

export default AboutPage
