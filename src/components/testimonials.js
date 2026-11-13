import * as React from "react"
import { useStaticQuery, graphql, withPrefix } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import CardTestimonial from "../components/ui/card-testimonial"
import images from "../data/testimonial-images.json"

const Testimonials = () => {
  const track = React.useRef(null)
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

  // Scroll by one visible "page" of cards; CSS snap handles alignment.
  const scroll = dir =>
    track.current?.scrollBy({
      left: dir * track.current.clientWidth,
      behavior: "smooth",
    })

  return (
    <div className="relative">
      <div
        ref={track}
        className="flex gap-6 overflow-x-auto pb-4"
        style={{ scrollSnapType: "x mandatory" }}>
        {query.allMdx.nodes.map(node => {
          const image = images[node.parent.name]
          return (
            <div
              key={node.parent.name}
              className="flex-shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              style={{ scrollSnapAlign: "start" }}>
              <CardTestimonial
                image={image && withPrefix(`/testimonials/${image}`)}>
                <MDXRenderer>{node.body}</MDXRenderer>
              </CardTestimonial>
            </div>
          )
        })}
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
