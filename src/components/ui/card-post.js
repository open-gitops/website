import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const CardPost = ({ title, excerpt, img, date, to }) => {
  return (
    <Link
      to={to}
      className="group block bg-white shadow-xl rounded-2xl overflow-hidden transition hover:shadow-2xl">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <GatsbyImage
          image={img}
          alt={title}
          className="!absolute transform transition group-hover:scale-110"
        />
      </div>

      <div className="relative z-10 px-4 pb-8 text-center">
        <div className="-mt-8 px-4 pt-4 bg-white rounded-2xl">
          <div className="font-display text-xl text-dark transition group-hover:text-blue">
            {title}
          </div>
        </div>

        <div className="my-4 font-display text-sm text-blue">{date}</div>

        <div className="px-4 text-gray">{excerpt}</div>
      </div>
    </Link>
  )
}

export default CardPost
