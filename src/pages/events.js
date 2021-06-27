import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Events from "../components/events"
import { Container } from "../components/ui/grid"
import thumbnail from "../images/thumbnail-default.png"

const EventsPage = ({ location }) => {
  return (
    <Layout location={location} decor={false}>
      <Seo
        title="Events"
        description="Events"
        url={location.href}
        image={thumbnail}
      />

      <Container>
        <Events />
      </Container>
    </Layout>
  )
}

export default EventsPage
