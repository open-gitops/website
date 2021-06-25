import * as React from "react"
import Layout from "../components/layout"
import { Container } from "../components/grid"
import Seo from "../components/seo"
import PressReleases from "../components/press-releases"

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

        <h2>
          Member <span className="text-primary">Companies</span>
        </h2>

        <div className="p-12 bg-white rounded-2xl shadow-xl"></div>
      </Container>
    </Layout>
  )
}

export default AboutPage
