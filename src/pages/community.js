import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PressReleases from "../components/press-releases"
import { Container, Grid } from "../components/ui/grid"
import ContentWrapper from "../components/ui/content-wrapper"
import Members from "../components/members"

const AboutPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo
        title="Community"
        description="Community Description"
        url={location.href}
        // image={thumbnail}
      />

      <Container narrow className="mt-32">
        <h1 className="mb-12 text-center">Community</h1>

        <PressReleases className="my-12" />

        <h2 className="mb-10 text-center">
          Member <span className="text-primary">Companies</span>
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
