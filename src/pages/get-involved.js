import * as React from "react"
import Layout from "../components/layout"
import { Container } from "../components/grid"
import Seo from "../components/seo"
import PressReleases from "../components/press-releases"

const GetInvolvedPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo
        title="Events"
        description="Events"
        url={location.href}
        // image={thumbnail}
      />

      <Container className="mt-32 max-w-3xl">
        <h1 className="mb-12 text-center">
          Get <span className="text-primary">Involved</span>
        </h1>

        <PressReleases className="my-12" />
      </Container>
    </Layout>
  )
}

export default GetInvolvedPage
