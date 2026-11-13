import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Container } from "./ui/grid"
import CardEvent from "./ui/card-event"
import CardEventAlt from "./ui/card-event-alt"
import Button from "./ui/button"
import Map from "../svg/map.svg"

const Events = ({ upcomingLimit, pastLimit }) => {
  const date = new Date()
  const [expanded, setExpanded] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const query = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { internal: { contentFilePath: { regex: "/(content/events)/" } } }
          sort: { frontmatter: { date: DESC } }
        ) {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "MMM DD, YYYY")
                location
                attend
                recordings
              }
            }
          }
        }
      }
    `
  )

  const upcomingEvents = query.allMdx.edges
    .filter(event => {
      const eventDate = event.node.frontmatter?.date
      const startDate = new Date(eventDate)
      return eventDate ? startDate > date : false
    })
    .reverse()

  const pastEvents = query.allMdx.edges.filter(event => {
    const eventDate = event.node.frontmatter?.date
    const startDate = new Date(eventDate)
    return eventDate ? startDate < date : false
  })

  const showAll = expanded || pastEvents.length <= pastLimit
  const term = search.trim().toLowerCase()
  const shownPastEvents = showAll
    ? pastEvents.filter(({ node: { frontmatter: f } }) =>
        `${f?.title} ${f?.location} ${f?.date}`.toLowerCase().includes(term)
      )
    : pastEvents.slice(0, pastLimit)

  return (
    <div className="relative pt-32 overflow-hidden">
      <Map className="absolute -z-1 top-12 left-[40%] h-auto w-[140%] sm:w-[1700px] text-[#4d8dff]" />

      <Container>
        {upcomingEvents.length > 0 && (
          <React.Fragment>
            <h2>
              Upcomings <span className="text-accent">Events</span>
            </h2>
            <p>Today, {date.toDateString()}</p>

            <div className="mt-12 max-w-4xl space-y-7">
              {upcomingEvents.map(
                (item, index) =>
                  index < upcomingLimit && (
                    <CardEvent
                      key={index}
                      date={item.node.frontmatter?.date}
                      title={item.node.frontmatter?.title}
                      location={item.node.frontmatter?.location}
                      url={item.node.frontmatter?.attend}
                    />
                  )
              )}
            </div>

            {Events.defaultProps.upcomingLimit !== upcomingLimit && (
              <div className="text-center mt-10 lg:text-left">
                <Button to="/events" label="View all Events" />
              </div>
            )}
          </React.Fragment>
        )}

        {pastEvents.length > 0 && (
          <React.Fragment>
            <h2 className="mt-20 text-3xl lg:mt-32">
              Past <span className="text-accent">Events</span>
            </h2>

            {showAll && (
              <input
                type="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search past events"
                aria-label="Search past events"
                className="mt-6 w-full max-w-md rounded-xl bg-dark/20 px-4 py-3 font-normal text-white placeholder-light/70 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            )}

            <Grid md={2} xl={3} className="pr-6 pt-4 pb-6 lg:gap-12">
              {shownPastEvents.map((item, index) => (
                <CardEventAlt
                  key={index}
                  date={item.node.frontmatter?.date}
                  title={item.node.frontmatter?.title}
                  location={item.node.frontmatter?.location}
                  url={item.node.frontmatter?.recordings}
                />
              ))}
            </Grid>

            {showAll && shownPastEvents.length === 0 && (
              <p className="mt-4">No events match &quot;{search}&quot;.</p>
            )}

            {!showAll && (
              <div className="text-center mt-6 lg:text-left">
                <Button
                  onClick={() => setExpanded(true)}
                  label={`Show all ${pastEvents.length} past events`}
                />
              </div>
            )}
          </React.Fragment>
        )}
      </Container>
    </div>
  )
}

Events.defaultProps = {
  upcomingLimit: 1000,
  pastLimit: 1000,
}

export default Events
