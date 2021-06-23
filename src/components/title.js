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

  return <>{site.siteMetadata.title}</>
}

export default Title
