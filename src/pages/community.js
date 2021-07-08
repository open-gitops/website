import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Social from "../components/ui/social"
import { Container, Grid } from "../components/ui/grid"
import ContentWrapper from "../components/ui/content-wrapper"
import Members from "../components/members"
import thumbnail from "../images/thumbnail-default.png"

const AboutPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo
        title="Community"
        description="Community Description"
        url={location.href}
        image={thumbnail}
      />

      <Container narrow className="pt-28 md:pt-48">
        <h1 className="mb-8 lg:mb-12 text-center">Community</h1>

        <Social full className="mb-12 md:mb-24" />

        <h2 className="mb-10 text-center">
          Member <span className="text-accent">Companies</span>
        </h2>

        <ContentWrapper prose={false}>
          <Grid xs={2} md={3} lg={4}>
            <Members />
          </Grid>
        </ContentWrapper>
      </Container>
    </Layout>
  )
}

export default AboutPage
