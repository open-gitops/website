import * as React from "react"
import { withPrefix } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import CardTestimonial from "../components/ui/card-testimonial"
import Reveal from "./ui/reveal"
import images from "../data/testimonial-images.json"
import useCrawl from "../hooks/use-crawl"

// Each testimonial is an MDX file; webpack compiles them via gatsby-plugin-mdx.
const testimonials = require.context("../../content/testimonials", false, /\.mdx$/)
const keys = testimonials.keys().sort()
const avatar = name => images[name] && withPrefix(`/testimonials/${images[name]}`)

const Testimonials = () => {
  const { track, scroll, pause, resume } = useCrawl(keys.length)

  // The cards render twice so the crawl can loop seamlessly; the copy is inert.
  const cards = copy =>
    keys.map(key => {
      const Body = testimonials(key).default
      return (
        <div
          key={`${copy}-${key}`}
          inert={copy ? "" : undefined}
          aria-hidden={copy ? "true" : undefined}
          className="shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
          <CardTestimonial image={avatar(key.replace(/^.*\/|\.mdx$/g, ""))}>
            <Body />
          </CardTestimonial>
        </div>
      )
    })

  const arrowClass =
    "w-11 h-11 rounded-full border-[1.5px] border-ghost text-xl text-ink hover:bg-yellow hover:text-dark hover:border-yellow"

  return (
    <div className="flex flex-col gap-12">
      <Reveal as="figure" className="flex flex-col gap-5 max-w-[940px]">
        <blockquote className="font-display font-bold text-[clamp(28px,3.4vw,42px)] leading-[1.22] tracking-[-0.02em] [text-wrap:balance]">
          &ldquo;GitOps is the{" "}
          <span className="text-highlight [background:var(--h1-hl)] [box-decoration-break:clone]">
            best thing since configuration as code.
          </span>
          &rdquo;
        </blockquote>
        <p className="max-w-[720px] text-muted">
          Git changed how we collaborate, but declarative configuration is the
          key to dealing with infrastructure at scale, and sets the stage for
          the next generation of management tools.
        </p>
        <figcaption className="flex items-center gap-3 text-[15px] text-muted">
          <img
            src={avatar("featured")}
            alt=""
            loading="lazy"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span>
            <strong className="font-semibold text-ink">Kelsey Hightower</strong>{" "}
            &middot; Staff Developer Advocate,{" "}
            <a href="https://web.archive.org/web/20210407164411/https://twitter.com/kelseyhightower/status/1164192321891528704">
              Google
            </a>
          </span>
        </figcaption>
      </Reveal>

      <Reveal>
        <MDXProvider components={{ strong: props => <strong className="font-semibold" {...props} /> }}>
          <div
            ref={track}
            onMouseEnter={pause}
            onMouseLeave={() => resume(0)}
            onFocus={pause}
            onBlur={() => resume(0)}
            onTouchStart={pause}
            onTouchEnd={() => resume(2000)}
            className="no-scrollbar flex gap-6 overflow-x-auto">
            {cards(false)}
            {cards(true)}
          </div>
        </MDXProvider>

        <div className="flex justify-center gap-3 mt-6 lg:justify-end">
          <button
            type="button"
            aria-label="Previous quotes"
            onClick={() => scroll(-1)}
            className={arrowClass}>
            &larr;
          </button>
          <button
            type="button"
            aria-label="Next quotes"
            onClick={() => scroll(1)}
            className={arrowClass}>
            &rarr;
          </button>
        </div>
      </Reveal>
    </div>
  )
}

export default Testimonials
