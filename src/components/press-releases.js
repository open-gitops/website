import * as React from "react"
import ExternalLink from "./ui/external-link"

const PressReleases = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-3xl">
        Press <span className="text-primary">Releases</span>
      </h2>

      <ul>
        <li className="py-3">
          <ExternalLink
            to="/"
            label="Press release title"
            className="text-2xl"
          />
        </li>
        <li className="py-3 border-t border-secondary">
          <ExternalLink
            to="/"
            label="Press release title"
            className="text-2xl"
          />
        </li>
        <li className="py-3 border-t border-secondary">
          <ExternalLink
            to="/"
            label="Press release title"
            className="text-2xl"
          />
        </li>
      </ul>
    </div>
  )
}

export default PressReleases
