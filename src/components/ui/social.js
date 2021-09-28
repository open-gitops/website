import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"
import ExternalLink from "./external-link"
import Github from "../../svg/github.svg"
import Slack from "../../svg/slack.svg"
import Twitter from "../../svg/twitter.svg"
import Reddit from "../../svg/reddit.svg"

const Social = ({ color, size, full, mobile, className }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              twitter
              github
              slack
              reddit
            }
          }
        }
      }
    `
  )

  const wrapperClass = classNames({
    "flex flex-wrap": true,
    "sm:justify-center": full,
    "justify-center": !full,
    [className]: className,
  })

  const itemClass = classNames({
    "my-3": full,
    "w-full": mobile,
    "w-1/2 sm:px-4 sm:w-auto lg:text-center": full && !mobile,
    "px-3 lg:px-2": !full,
  })

  const iconClass = classNames({
    "inline-block w-auto h-8": true,
    "h-8 lg:h-7": size === "sm",
    "h-6": size === "md",
    "h-10": size === "lg",
    "text-accent": color === "accent",
  })

  return (
    <div className={wrapperClass}>
      <div className={itemClass}>
        <ExternalLink
          to={site.siteMetadata.social.github}
          size={size}
          color={color}
          full={full}
          label="GitHub"
          attrs={{ "aria-label": "github", title: "Follow us on GitHub" }}
          icon={<Github className={iconClass} />}
        />
      </div>

      <div className={itemClass}>
        <ExternalLink
          to={site.siteMetadata.social.twitter}
          size={size}
          color={color}
          full={full}
          label="Twitter"
          attrs={{ "aria-label": "twitter", title: "Join our Twitter page" }}
          icon={<Twitter className={iconClass} />}
        />
      </div>

      <div className={itemClass}>
        <ExternalLink
          to={site.siteMetadata.social.slack}
          size={size}
          color={color}
          full={full}
          label="Slack"
          attrs={{ "aria-label": "slack", title: "Join our Slack channel" }}
          icon={<Slack className={iconClass} />}
        />
      </div>

      <div className={itemClass}>
        <ExternalLink
          to={site.siteMetadata.social.reddit}
          size={size}
          color={color}
          full={full}
          label="Reddit"
          attrs={{ "aria-label": "reddit", title: "Join our Reddit" }}
          icon={<Reddit className={iconClass} />}
        />
      </div>
    </div>
  )
}

Social.defaultProps = {
  full: false,
}

export default Social
