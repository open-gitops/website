import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Events from "../components/events"
import { Container } from "../components/ui/grid"

const EventsPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo
        title="Events"
        description="Events"
        url={location.href}
        // image={thumbnail}
      />

      <Container>
        <Events />
      </Container>
    </Layout>
  )
}

export default EventsPage
