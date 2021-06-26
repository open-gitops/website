import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid } from "./ui/grid"
import CardEvent from "./ui/card-event"
import CardEventAlt from "./ui/card-event-alt"
import Button from "./ui/button"

const Events = ({ upcomingLimit, pastLimit }) => {
  const date = new Date()
  const query = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/(content/events)/" } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "MMM DD, YYYY")
                location
                url
              }
            }
          }
        }
      }
    `
  )

  const upcomingtEvents = query.allMdx.edges.filter(event => {
    const eventDate = event.node.frontmatter?.date
    const startDate = new Date(eventDate)
    return eventDate ? startDate > date : false
  })

  const pastEvents = query.allMdx.edges.filter(event => {
    const eventDate = event.node.frontmatter?.date
    const startDate = new Date(eventDate)
    return eventDate ? startDate < date : false
  })

  return (
    <React.Fragment>
      <section className="py-32">
        <h2>
          Upcomings <span className="text-primary">Events</span>
        </h2>
        <p>Today, {date.toDateString()}</p>

        <div className="mt-12 max-w-4xl space-y-7">
          {upcomingtEvents.map(
            (item, index) =>
              index < upcomingLimit && (
                <CardEvent
                  key={index}
                  date={item.node.frontmatter?.date}
                  title={item.node.frontmatter?.title}
                  location={item.node.frontmatter?.location}
                  url={item.node.frontmatter?.url}
                />
              )
          )}
        </div>

        {Events.defaultProps.upcomingLimit !== upcomingLimit && (
          <div className="text-center mt-10 lg:text-left">
            <Button to="/events" label="View all Events" />
          </div>
        )}
      </section>

      <section className="pb-20">
        <h2 className="text-3xl">
          Past <span className="text-primary">Events</span>
        </h2>

        <Grid md={2} xl={3} className="py-6">
          {pastEvents.map(
            (item, index) =>
              index < pastLimit && (
                <CardEventAlt
                  key={index}
                  date={item.node.frontmatter?.date}
                  title={item.node.frontmatter?.title}
                  location={item.node.frontmatter?.location}
                  url={item.node.frontmatter?.url}
                />
              )
          )}
        </Grid>
      </section>
    </React.Fragment>
  )
}

Events.defaultProps = {
  upcomingLimit: 1000,
  pastLimit: 1000,
}

export default Events
