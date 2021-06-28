import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Events from "../components/events"
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

      <div className="md:pt-12">
        <Events />
      </div>
    </Layout>
  )
}

export default EventsPage
