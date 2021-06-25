import React from "react"
import QuotesIcon from "../svg/quotes.svg"

const CardTestimonial = ({ quote, children }) => {
  return (
    <div className="relative py-4 pr-4 pl-16 border-2 border-secondary rounded-xl">
      <QuotesIcon className="absolute top-4 left-4 text-primary" />

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
