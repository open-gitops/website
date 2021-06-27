import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"

// Share buttons
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share"

// Share icons
import { EmailIcon, FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share"

const Share = ({ url, title, description, className }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const wrapperClass = classNames({
    "space-x-4": true,
    [className]: className,
  })

  return (
    <div className={wrapperClass}>
      <FacebookShareButton url={url} quote={description}>
        <FacebookIcon size={42} round={true} />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={42} round={true} />
      </TwitterShareButton>

      <LinkedinShareButton
        url={url}
        title={title}
        summary={description}
        source={site.siteMetadata.title}>
        <LinkedinIcon size={42} round={true} />
      </LinkedinShareButton>

      <EmailShareButton url={url} subject={title} body={description}>
        <EmailIcon size={42} round={true} />
      </EmailShareButton>
    </div>
  )
}

export default Share
