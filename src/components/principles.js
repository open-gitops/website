import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PrinciplesItem from "./ui/principles-item"
import MdxContent from "../components/ui/mdx-content"

const bodies = require.context("../../content/principles", false, /\.mdx$/)

const Principles = () => {
  const query = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: {
            internal: { contentFilePath: { regex: "/(content/principles)/" } }
          }
          sort: { frontmatter: { order: ASC } }
        ) {
          edges {
            node {
              internal {
                contentFilePath
              }
              frontmatter {
                order
                title
              }
            }
          }
        }
      }
    `
  )

  return (
    <ol className="mt-10 space-y-20">
      {query.allMdx.edges.map((item, index) => {
        const file = item.node.internal.contentFilePath.split("/").pop()
        const Body = bodies(`./${file}`).default
        return (
          <PrinciplesItem
            key={index}
            order={item.node.frontmatter?.order}
            title={item.node.frontmatter?.title}>
            <MdxContent>
              <Body />
            </MdxContent>
          </PrinciplesItem>
        )
      })}
    </ol>
  )
}

export default Principles
