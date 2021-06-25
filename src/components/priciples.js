import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PrinciplesItem from "./principles-item"

const Priciples = () => {
  const query = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/(content/principles)/" } }
          sort: { order: ASC, fields: frontmatter___order }
        ) {
          edges {
            node {
              frontmatter {
                order
                title
                description
              }
            }
          }
        }
      }
    `
  )

  return (
    <ol className="mt-10 space-y-20">
      {query.allMdx.edges.map((item, index) => (
        <PrinciplesItem
          key={index}
          order={item.node.frontmatter?.order}
          title={item.node.frontmatter?.title}>
          {item.node.frontmatter?.description}
        </PrinciplesItem>
      ))}
    </ol>
  )
}

export default Priciples
