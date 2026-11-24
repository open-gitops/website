import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Events from "../components/events"
import thumbnail from "../images/thumbnail-default.png"

const EventsPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo
        title="Events"
        description="Events"
        url={location.href}
        image={thumbnail}
      />

      <div>
        <Events />
      </div>
    </Layout>
  )
}

export default EventsPage
