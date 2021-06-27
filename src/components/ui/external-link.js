import * as React from "react"
import classNames from "classnames"
import ExternalLinkIcon from "../../svg/external-link.svg"

const ExternalLink = ({
  to,
  label,
  icon,
  target,
  className,
  attrs,
  size,
  color,
  full,
}) => {
  const labelClass = classNames({
    "ml-2 font-bold align-middle": true,
    "w-auto h-2": size === "sm",
    "sm:text-lg": size !== "sm",
  })

  const linkIconClass = classNames({
    "inline-block -mt-1 ml-2": true,
    "w-auto h-3": size === "sm",
  })

  const linkClass = classNames({
    "text-accent": color === "accent",
    [className]: className,
  })

  return (
    <React.Fragment>
      {to && (
        <a
          href={to}
          target={target}
          rel="noopener noreferrer"
          className={linkClass}
          {...attrs}>
          {icon && (
            <React.Fragment>
              {icon}
              {full && (
                <span className={labelClass}>
                  {label}
                  <ExternalLinkIcon className={linkIconClass} />
                </span>
              )}
            </React.Fragment>
          )}

          {!icon && (
            <React.Fragment>
              {label} <ExternalLinkIcon className={linkIconClass} />
            </React.Fragment>
          )}
        </a>
      )}
    </React.Fragment>
  )
}

ExternalLink.defaultProps = {
  full: true,
  target: "_self",
}

export default ExternalLink
