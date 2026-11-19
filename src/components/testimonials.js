import * as React from "react"
import { useStaticQuery, graphql, withPrefix } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import CardTestimonial from "../components/ui/card-testimonial"
import images from "../data/testimonial-images.json"
import useCrawl from "../hooks/use-crawl"

const Testimonials = () => {
  const query = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/(content/testimonials)/" } }
          sort: { fields: fileAbsolutePath, order: ASC }
        ) {
          nodes {
            body
            parent {
              ... on File {
                name
              }
            }
          }
        }
      }
    `
  )
  const nodes = query.allMdx.nodes
  const { track, scroll, pause, resume } = useCrawl(nodes.length)

  // The cards render twice so the crawl can loop seamlessly; the copy is inert.
  const cards = copy =>
    nodes.map(node => {
      const image = images[node.parent.name]
      return (
        <div
          key={`${copy}-${node.parent.name}`}
          inert={copy ? "" : undefined}
          aria-hidden={copy ? "true" : undefined}
          className="flex-shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
          <CardTestimonial image={image && withPrefix(`/testimonials/${image}`)}>
            <MDXRenderer>{node.body}</MDXRenderer>
          </CardTestimonial>
        </div>
      )
    })

  return (
    <div className="relative">
      <div
        ref={track}
        onMouseEnter={pause}
        onMouseLeave={() => resume(0)}
        onFocus={pause}
        onBlur={() => resume(0)}
        onTouchStart={pause}
        onTouchEnd={() => resume(2000)}
        className="no-scrollbar flex gap-6 overflow-x-auto pb-4">
        {cards(false)}
        {cards(true)}
      </div>

      <div className="flex justify-center gap-4 mt-4 lg:justify-end">
        <button
          type="button"
          aria-label="Previous quotes"
          onClick={() => scroll(-1)}
          className="w-12 h-12 rounded-full border-2 border-night text-2xl text-night hover:bg-accent">
          &larr;
        </button>
        <button
          type="button"
          aria-label="Next quotes"
          onClick={() => scroll(1)}
          className="w-12 h-12 rounded-full border-2 border-night text-2xl text-night hover:bg-accent">
          &rarr;
        </button>
      </div>
    </div>
  )
}

export default Testimonials
