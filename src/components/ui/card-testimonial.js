import * as React from "react"
import QuotesIcon from "../../svg/quotes.svg"

const CardTestimonial = ({ quote, image, children }) => {
  return (
    <div className="relative h-full py-4 pr-4 pl-16 border-2 border-night rounded-xl">
      <QuotesIcon className="absolute top-4 left-4 text-accent" />

      {image && (
        <img
          src={image}
          alt=""
          loading="lazy"
          className="absolute bottom-4 left-2 w-12 h-12 rounded-full object-contain bg-white ring-2 ring-accent"
        />
      )}

      <figure>
        <blockquote className="text-xl">
          {quote && <p>{quote}</p>}
          {!quote && children}
        </blockquote>
      </figure>
    </div>
  )
}

export default CardTestimonial
