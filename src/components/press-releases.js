import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"
import ExternalLink from "./ui/external-link"

const PressReleases = ({ className }) => {
  const query = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/(content/press-releases)/" } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "MMM DD, YYYY")
                url
              }
            }
          }
        }
      }
    `
  )

  return (
    <div className={className}>
      <h2 className="text-3xl">
        Press <span className="text-accent">Releases</span>
      </h2>

      <ul>
        {query.allMdx.edges.map((item, index) => {
          const classes = classNames({
            "py-3": true,
            "border-t border-night/20": index !== 0,
          })

          return (
            <li key={index} className={classes}>
              <ExternalLink
                to={item.node.frontmatter?.url}
                target="_blank"
                label={item.node.frontmatter?.title}
                className="text-2xl"
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PressReleases
