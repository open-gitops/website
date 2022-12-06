import { Link } from "gatsby"
import * as React from "react"

const Banner = ({ description, shortDescription, emoji, announcementLink }) => {
  const isExternalLink =
    announcementLink.indexOf("http://") === 0 ||
    announcementLink.indexOf("https://") === 0

  return (
    <div className="bg-accent">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center">
          <div className="flex w-0 flex-1 items-center">
            {emoji && <span className="flex p-2 text-4xl">{emoji}</span>}
            <p className="ml-3 truncate font-bold text-2xl text-night">
              {announcementLink ? (
                isExternalLink ? (
                  <>
                    <a
                      href={announcementLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:hidden hover:underline hover:text-night">
                      {shortDescription}
                    </a>
                    <a
                      href={announcementLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden md:inline hover:underline hover:text-night">
                      {description}
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      to={announcementLink}
                      className="md:hidden hover:underline hover:text-night">
                      {shortDescription}
                    </Link>
                    <Link
                      to={announcementLink}
                      className="hidden md:inline hover:underline hover:text-night">
                      {description}
                    </Link>
                  </>
                )
              ) : (
                <>
                  <span className="md:hidden">{shortDescription}</span>
                  <span className="hidden md:inline">{description}</span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
