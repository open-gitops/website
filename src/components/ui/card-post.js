import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import useReveal from "../../hooks/use-reveal"
import { linkRegex } from "../../helpers"

const CardPost = ({ title, excerpt, img, date, to }) => {
  const ref = useReveal()
  const className =
    "lift group flex flex-col h-full bg-card border border-line rounded-2xl overflow-hidden text-ink hover:text-ink"
  const inner = (
    <React.Fragment>
      <div className="relative aspect-video overflow-hidden bg-line-strong">
        <GatsbyImage
          image={img}
          alt=""
          className="!absolute inset-0 h-full w-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-2 px-6 pt-5 pb-6">
        {date && <div className="text-[15px] text-muted">{date}</div>}
        <h3 className="m-0 font-display font-bold text-[19px] leading-[1.3] tracking-normal">
          {title}
        </h3>
        {excerpt && <p className="text-muted">{excerpt}</p>}
      </div>
    </React.Fragment>
  )

  return linkRegex().test(to) ? (
    <a ref={ref} href={to} className={className}>
      {inner}
    </a>
  ) : (
    <Link ref={ref} to={to} className={className}>
      {inner}
    </Link>
  )
}

export default CardPost
