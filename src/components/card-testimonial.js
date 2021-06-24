import React from "react"

const CardTestimonial = ({ quote }) => {
  return (
    <div className="py-4 pr-4 pl-12 border-2 border-secondary rounded-xl">
      <figure>
        <blockquote className="text-xl text-gray">
          <p className="text-white">{quote}</p>
        </blockquote>
      </figure>
    </div>
  )
}

export default CardTestimonial
