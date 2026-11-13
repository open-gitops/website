import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"
import Nav from "./nav"
import Title from "./ui/title"
import NavToggler from "./ui/nav-toggler"
import LogoIcon from "../svg/icon.svg"
import LogoType from "../svg/logotype.svg"
import Banner from "./ui/banner"

const Header = ({ color, hasBanner }) => {
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
  const banner = nextEvent
    ? {
        description: `Join us for ${nextTitles}!`,
        shortDescription: nextTitles,
        link: nextEvent.attend,
        cta: "Register",
      }
    : lastRecorded && {
        description: `Recordings for ${lastRecorded.title} are available`,
        shortDescription: `${lastRecorded.title} recordings`,
        link: lastRecorded.recordings,
        cta: "Watch now",
      }
  const showBanner = hasBanner && banner

  const headerClass = classNames({
    "z-50 w-full top-0 lg:absolute": showBanner,
    "fixed top-0 left-0 z-50 py-3 w-full lg:absolute lg:py-5": !showBanner,
    "bg-light bg-opacity-50": color === "light",
    "bg-grad-from bg-opacity-90": color !== "light",
  })

  return (
    <header className={headerClass}>
      {showBanner && (
        <div className="pb-4">
          <Banner
            emoji={nextEvent ? "🎉" : "🎬"}
            description={banner.description}
            shortDescription={banner.shortDescription}
            announcementLink={banner.link || ""}
            cta={banner.cta}
          />
        </div>
      )}
      <div className="px-4 flex items-center 2xl:px-12">
        <Link to="/" className="hover:text-night">
          <span className="sr-only">
            <Title />
          </span>

          <div className="flex items-center">
            <LogoIcon className="h-10 w-auto lg:h-14" />
            <span>
              <LogoType className="ml-2 w-auto h-6 hidden lg:block" />
            </span>
          </div>
        </Link>

        <Nav isOpen={isNavOpen} color={color} />

        <NavToggler
          onClick={() => setisNavOpen(!isNavOpen)}
          isOpen={isNavOpen}
        />
      </div>
    </header>
  )
}

export default Header
