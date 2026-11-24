import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Nav from "./nav"
import Title from "./ui/title"
import NavToggler from "./ui/nav-toggler"
import ThemeSwitch from "./ui/theme-switch"
import Button from "./ui/button"
import LogoIcon from "../svg/icon.svg"
import LogoType from "../svg/logotype.svg"
import Banner from "./ui/banner"

const Header = ({ hasBanner }) => {
  const [isNavOpen, setisNavOpen] = React.useState(false)
  const { allMdx } = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { internal: { contentFilePath: { regex: "/(content/events)/" } } }
        sort: [{ frontmatter: { date: ASC } }, { frontmatter: { title: ASC } }]
      ) {
        nodes {
          frontmatter {
            title
            date
            shortDate: date(formatString: "MMM D")
            location
            attend
            recordings
          }
        }
      }
    }
  `)
  // Next event on or after today; the scheduled deploy rebuilds daily so this rolls forward.
  // With nothing upcoming, fall back to the most recent event that has recordings.
  const today = new Date().toISOString().slice(0, 10)
  const events = allMdx.nodes.map(n => n.frontmatter).filter(e => e.date)
  const nextEvent = events.find(e => e.date.slice(0, 10) >= today)
  // Co-located events on the same day share the banner, e.g. ArgoCon + FluxCon.
  const nextTitles = events
    .filter(e => nextEvent && e.date === nextEvent.date)
    .map(e => e.title)
    .join(" & ")
  const lastRecorded = events
    .filter(e => e.recordings && e.date.slice(0, 10) < today)
    .pop()
  // "Kubecon - Barcelona, Spain" -> "Barcelona"
  const city = nextEvent?.location?.split(" - ").pop().split(",")[0]
  const banner = nextEvent
    ? {
        text: [nextTitles, nextEvent.shortDate, city].filter(Boolean).join(" · "),
        link: nextEvent.attend,
        cta: "Register",
      }
    : lastRecorded && {
        text: `Recordings for ${lastRecorded.title} are available`,
        link: lastRecorded.recordings,
        cta: "Watch now",
      }

  return (
    <header>
      {hasBanner && banner && <Banner {...banner} />}

      <div className="bg-surface border-b border-line">
        <div className="container flex items-center gap-2 py-3.5">
          <Link
            to="/"
            className="flex items-center gap-3 min-h-[44px] text-ink hover:text-ink">
            <span className="sr-only">
              <Title />
            </span>
            <LogoIcon className="w-[60px] h-10 text-mark" aria-hidden="true" />
            <LogoType className="w-auto h-5" aria-hidden="true" />
          </Link>

          <Nav isOpen={isNavOpen} />

          <div className="flex items-center gap-2 ml-auto lg:ml-4">
            <ThemeSwitch />
            <Button
              to="/get-involved"
              label="Get involved"
              variant="accent"
              size="sm"
              className="hidden lg:inline-flex"
            />
            <NavToggler
              onClick={() => setisNavOpen(!isNavOpen)}
              isOpen={isNavOpen}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
