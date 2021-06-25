import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const CardPost = ({ title, excerpt, img, date, to }) => {
  return (
    <div className="block bg-white shadow-xl rounded-2xl overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <GatsbyImage image={img} alt={title} />
      </div>

      <div className="relative z-10 px-4 pb-8 text-center">
        <div className="-mt-8 px-4 pt-4 bg-white rounded-2xl">
          <Link to={to} className="font-bold text-2xl text-dark">
            {title}
          </Link>
        </div>

        <div className="my-6 font-bold text-sm text-purple">{date}</div>

        <div className="px-4 text-gray">{excerpt}</div>
      </div>
    </div>
  )
}

export default CardPost
