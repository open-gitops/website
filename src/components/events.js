import * as React from "react"
import { useStaticQuery, graphql, withPrefix } from "gatsby"
import { Grid, Container } from "./ui/grid"
import CardEvent from "./ui/card-event"
import CardEventAlt from "./ui/card-event-alt"
import Button from "./ui/button"
import Map from "../svg/map.svg"
import photos from "../data/event-photos.json"

const pageSize = 9

const Events = ({ upcomingLimit, pastLimit }) => {
  const date = new Date()
  const [expanded, setExpanded] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const [page, setPage] = React.useState(0)
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
  // Search covers every past event; pagination applies to the matches.
  const matchedPastEvents = showAll
    ? pastEvents.filter(({ node: { frontmatter: f } }) =>
        `${f?.title} ${f?.location} ${f?.date}`.toLowerCase().includes(term)
      )
    : pastEvents.slice(0, pastLimit)
  const pageCount = Math.max(1, Math.ceil(matchedPastEvents.length / pageSize))
  const currentPage = Math.min(page, pageCount - 1)
  const shownPastEvents = showAll
    ? matchedPastEvents.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
    : matchedPastEvents

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

            <figure className="mt-12">
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {photos.map(p => (
                  <a
                    key={p.file}
                    href={p.page}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${p.event} (CNCF, ${p.license})`}>
                    <img
                      src={withPrefix(`/event-photos/${p.file}`)}
                      alt={p.alt}
                      loading="lazy"
                      className="w-full aspect-[3/2] object-cover rounded-xl transition hover:opacity-90"
                    />
                  </a>
                ))}
              </div>
              <figcaption className="mt-3 text-sm">
                Scenes from past ArgoCons. Photos:{" "}
                <a
                  href="https://www.flickr.com/photos/143247548@N03/"
                  className="underline hover:text-accent">
                  CNCF on Flickr
                </a>
                ,{" "}
                <a
                  href="https://creativecommons.org/licenses/by-nc/2.0/"
                  className="underline hover:text-accent">
                  CC BY-NC 2.0
                </a>
                .
              </figcaption>
            </figure>

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
                onChange={e => {
                  setSearch(e.target.value)
                  setPage(0)
                }}
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

            {showAll && pageCount > 1 && (
              <nav
                aria-label="Past events pages"
                className="flex items-center justify-center gap-6 mt-4 lg:justify-start">
                <button
                  type="button"
                  disabled={currentPage === 0}
                  onClick={() => setPage(currentPage - 1)}
                  className="font-bold text-accent hover:underline disabled:opacity-40 disabled:no-underline">
                  &larr; Newer
                </button>
                <span>
                  Page {currentPage + 1} of {pageCount}
                </span>
                <button
                  type="button"
                  disabled={currentPage === pageCount - 1}
                  onClick={() => setPage(currentPage + 1)}
                  className="font-bold text-accent hover:underline disabled:opacity-40 disabled:no-underline">
                  Older &rarr;
                </button>
              </nav>
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
