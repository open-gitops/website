import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MdxContent from "../components/ui/mdx-content"
import Reveal from "./ui/reveal"

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
          nodes {
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
    `
  )

  return (
    <ol className="flex flex-col gap-16 min-w-0 pl-10 flex-[999_1_560px]">
      {query.allMdx.nodes.map(({ internal, frontmatter }) => {
        const Body = bodies(`./${internal.contentFilePath.split("/").pop()}`)
          .default
        return (
          <Reveal as="li" key={frontmatter.order} className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-10 -top-11 font-display font-extrabold text-8xl leading-none text-numeral">
              {frontmatter.order}
            </div>
            <div className="relative flex flex-col gap-2">
              <h3 className="m-0 text-[clamp(28px,3vw,38px)] leading-[1.15] tracking-[-0.02em] text-principle">
                {frontmatter.title}
              </h3>
              <div className="text-[21px] leading-normal">
                <MdxContent>
                  <Body />
                </MdxContent>
              </div>
            </div>
          </Reveal>
        )
      })}
    </ol>
  )
}

export default Principles
