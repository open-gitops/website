import * as React from "react"
import ExternalLinkIcon from "../../svg/external-link.svg"

const ExternalLink = ({ to, label, icon, className, attrs }) => {
  return (
    <React.Fragment>
      {to && (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          {...attrs}>
          {icon && (
            <React.Fragment>
              {icon}
              <span className="ml-2 font-bold text-lg align-middle">
                {label}
                <ExternalLinkIcon className="inline-block -mt-1 ml-2" />
              </span>
            </React.Fragment>
          )}

          {!icon && (
            <React.Fragment>
              {label} <ExternalLinkIcon className="inline-block -mt-1 ml-2" />
            </React.Fragment>
          )}
        </a>
      )}
    </React.Fragment>
  )
}

export default ExternalLink
