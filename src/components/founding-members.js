import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid } from "./ui/grid"
import Members from "./members"

const FoundingMembers = () => {
  const { founding } = useStaticQuery(graphql`
    query {
      founding: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/(content/members)/" }
          frontmatter: { founding: { eq: true } }
        }
        sort: { order: ASC, fields: frontmatter___title }
      ) {
        edges {
          node {
            frontmatter {
              title
              site
              founding
              logo {
                publicURL
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Grid xs={2} md={3} lg={4}>
      <Members members={founding.edges} />
    </Grid>
  )
}

export default FoundingMembers
