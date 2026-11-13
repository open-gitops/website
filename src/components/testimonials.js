import * as React from "react"
import { withPrefix } from "gatsby"
import CardTestimonial from "../components/ui/card-testimonial"
import images from "../data/testimonial-images.json"
import useCrawl from "../hooks/use-crawl"

// Each testimonial is an MDX file; webpack compiles them via gatsby-plugin-mdx.
const testimonials = require.context("../../content/testimonials", false, /\.mdx$/)
const keys = testimonials.keys().sort()

const Testimonials = () => {
  const { track, scroll, pause, resume } = useCrawl(keys.length)

  // The cards render twice so the crawl can loop seamlessly; the copy is inert.
  const cards = copy =>
    keys.map(key => {
      const Body = testimonials(key).default
      const image = images[key.replace(/^.*\/|\.mdx$/g, "")]
      return (
        <div
          key={`${copy}-${key}`}
          inert={copy ? "" : undefined}
          aria-hidden={copy ? "true" : undefined}
          className="shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
          <CardTestimonial image={image && withPrefix(`/testimonials/${image}`)}>
            <Body />
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
