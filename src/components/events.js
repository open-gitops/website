import * as React from "react"
import { Link, useStaticQuery, graphql, withPrefix } from "gatsby"
import { Container } from "./ui/grid"
import Reveal from "./ui/reveal"
import photos from "../data/event-photos.json"

const pageSize = 9

// "Kubecon - Barcelona, Spain" -> "KubeCon · Barcelona, Spain"
const place = location =>
  location?.replace(/kubecon/i, "KubeCon").replace(" - ", " · ")

const sectionTitle =
  "m-0 text-[clamp(32px,3.6vw,44px)] leading-[1.12] tracking-[-0.025em]"
const textLink =
  "inline-flex items-center min-h-[44px] font-semibold text-link underline underline-offset-4 hover:text-link-hover"

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
          sort: [{ frontmatter: { date: DESC } }, { frontmatter: { title: ASC } }]
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
    // Soonest first; same-day events keep their title order.
    .sort((a, b) => new Date(a.node.frontmatter.date) - new Date(b.node.frontmatter.date))

  const pastEvents = query.allMdx.edges.filter(event => {
    const eventDate = event.node.frontmatter?.date
    const startDate = new Date(eventDate)
    return eventDate ? startDate < date : false
  })

  const isHome = Events.defaultProps.upcomingLimit !== upcomingLimit
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
    <Container className="flex flex-col gap-8 py-16 md:py-[88px]">
      {upcomingEvents.length > 0 && (
        <React.Fragment>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h2 className={sectionTitle}>Upcoming Events</h2>
            {isHome && (
              <Link to="/events" className={textLink}>
                View all events
              </Link>
            )}
          </div>

          <Reveal className="flex flex-col px-7 py-2 rounded-2xl bg-card border border-line">
            {upcomingEvents.slice(0, upcomingLimit).map(({ node: { frontmatter: e } }) => (
              <div
                key={e.title}
                className="flex flex-wrap items-center gap-x-6 gap-y-2 py-5 border-t border-line first:border-t-0">
                <span className="flex-[0_0_120px] text-[15px] font-semibold text-date">
                  {e.date}
                </span>
                <span className="flex-[1_1_220px] font-display font-bold text-xl">
                  {e.title}
                </span>
                <span className="flex-[1_1_220px] text-base text-muted">
                  {place(e.location)}
                </span>
                {e.attend && (
                  <a
                    href={e.attend}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Attend ${e.title}`}
                    className="btn btn-accent btn-sm">
                    Attend
                  </a>
                )}
              </div>
            ))}
          </Reveal>

          <Reveal as="figure" className="flex flex-col gap-3">
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
                    className="w-full aspect-[3/2] object-cover rounded-xl transition-opacity hover:opacity-90"
                  />
                </a>
              ))}
            </div>
            <figcaption className="text-sm text-muted">
              Scenes from past ArgoCons. Photos:{" "}
              <a href="https://www.flickr.com/photos/143247548@N03/">
                CNCF on Flickr
              </a>
              ,{" "}
              <a href="https://creativecommons.org/licenses/by-nc/2.0/">
                CC BY-NC 2.0
              </a>
              .
            </figcaption>
          </Reveal>
        </React.Fragment>
      )}

      {pastEvents.length > 0 && (
        <div className="flex flex-col">
          {isHome ? (
            <h3 className="mb-3 font-sans text-[13px] leading-normal font-semibold tracking-[0.08em] uppercase text-muted">
              Past events
            </h3>
          ) : (
            <h2 className={`${sectionTitle} mb-6`}>Past Events</h2>
          )}

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
              className="mb-4 w-full max-w-md min-h-[44px] rounded-lg bg-card border border-line-strong px-4 text-ink placeholder:text-muted"
            />
          )}

          <ul className="border-b border-line-strong">
            {shownPastEvents.map(({ node: { frontmatter: e } }) => (
              <li
                key={e.title}
                className="flex flex-wrap items-center gap-x-6 gap-y-1 py-3.5 border-t border-line-strong">
                <span className="flex-[0_0_120px] text-[15px] text-muted">{e.date}</span>
                <span className="flex-[1_1_220px] font-semibold">{e.title}</span>
                <span className="flex-[1_1_220px] text-base text-muted">
                  {place(e.location)}
                  {e.recordings && (
                    <React.Fragment>
                      {" "}
                      &middot;{" "}
                      <a
                        href={e.recordings}
                        className="font-semibold text-link underline underline-offset-2 hover:text-link-hover">
                        Recordings
                      </a>
                    </React.Fragment>
                  )}
                </span>
              </li>
            ))}
          </ul>

          {showAll && shownPastEvents.length === 0 && (
            <p className="mt-4">No events match &quot;{search}&quot;.</p>
          )}

          {showAll && pageCount > 1 && (
            <nav
              aria-label="Past events pages"
              className="flex items-center gap-6 mt-2">
              <button
                type="button"
                disabled={currentPage === 0}
                onClick={() => setPage(currentPage - 1)}
                className={`${textLink} disabled:opacity-40 disabled:no-underline`}>
                &larr; Newer
              </button>
              <span className="text-muted">
                Page {currentPage + 1} of {pageCount}
              </span>
              <button
                type="button"
                disabled={currentPage === pageCount - 1}
                onClick={() => setPage(currentPage + 1)}
                className={`${textLink} disabled:opacity-40 disabled:no-underline`}>
                Older &rarr;
              </button>
            </nav>
          )}

          {!showAll && (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className={`${textLink} self-start mt-2`}>
              Show all {pastEvents.length} past events
            </button>
          )}
        </div>
      )}
    </Container>
  )
}

Events.defaultProps = {
  upcomingLimit: 1000,
  pastLimit: 1000,
}

export default Events
