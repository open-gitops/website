import * as React from "react"
import { withPrefix } from "gatsby"
import CardTestimonial from "../components/ui/card-testimonial"
import images from "../data/testimonial-images.json"

// Each testimonial is an MDX file; webpack compiles them via gatsby-plugin-mdx.
const testimonials = require.context("../../content/testimonials", false, /\.mdx$/)

const Testimonials = () => {
  const track = React.useRef(null)

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
        className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
        {testimonials
          .keys()
          .sort()
          .map(key => {
            const Body = testimonials(key).default
            const image = images[key.replace(/^.*\/|\.mdx$/g, "")]
            return (
              <div
                key={key}
                className="snap-start shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                <CardTestimonial
                  image={image && withPrefix(`/testimonials/${image}`)}>
                  <Body />
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
