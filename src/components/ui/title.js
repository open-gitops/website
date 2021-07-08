import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Title = () => {
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

  return <React.Fragment>{site.siteMetadata.title}</React.Fragment>
}

export default Title
