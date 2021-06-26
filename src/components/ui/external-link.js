import * as React from "react"
import ExternalLinkIcon from "../../svg/external-link.svg"

const ExternalLink = ({ to, label, className }) => {
  return (
    <React.Fragment>
      {to && (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className={className}>
          {label}
          <ExternalLinkIcon className="inline-block -mt-1 ml-2" />
        </a>
      )}
    </React.Fragment>
  )
}

export default ExternalLink
