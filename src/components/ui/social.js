import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"
import ExternalLink from "./external-link"
import Facebook from "../../svg/facebook.svg"
import Github from "../../svg/github.svg"
import Slack from "../../svg/slack.svg"
import Twitter from "../../svg/twitter.svg"
import Reddit from "../../svg/reddit.svg"

const Social = ({ color, size, className }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              twitter
              github
              slack
              facebook
              reddit
            }
          }
        }
      }
    `
  )

  const wrapperClass = classNames({
    "flex justify-center space-x-8 lg:space-x-4": true,
    [className]: className,
  })

  const iconClass = classNames({
    "inline-block w-auto": true,
    "h-8 lg:h-6": size === "sm",
    "h-8": size === "md",
    "h-10": size === "lg",
  })

  return (
    <div className={wrapperClass}>
      <ExternalLink
        to={site.siteMetadata.social.github}
        label="GitHub"
        attrs={{ "aria-label": "github", title: "Follow us on GitHub" }}
        icon={<Github className={iconClass} />}
      />

      <ExternalLink
        to={site.siteMetadata.social.facebook}
        label="Facebook"
        attrs={{ "aria-label": "facebook", title: "Join our Facebook page" }}
        icon={<Facebook className={iconClass} />}
      />

      <ExternalLink
        to={site.siteMetadata.social.twitter}
        label="Twitter"
        attrs={{ "aria-label": "twitter", title: "Join our Twitter page" }}
        icon={<Twitter className={iconClass} />}
      />

      <ExternalLink
        to={site.siteMetadata.social.slack}
        label="Slack"
        attrs={{ "aria-label": "slack", title: "Join our Slack channel" }}
        icon={<Slack className={iconClass} />}
      />

      <ExternalLink
        to={site.siteMetadata.social.reddit}
        label="Reddit"
        attrs={{ "aria-label": "reddit", title: "Join our Reddit" }}
        icon={<Reddit className={iconClass} />}
      />
    </div>
  )
}

export default Social
