import * as React from "react"

const CardTestimonial = ({ image, children }) => (
  <figure className="flex flex-col gap-4 h-full p-7 rounded-2xl bg-ground border border-line">
    {image && (
      <img
        src={image}
        alt=""
        loading="lazy"
        className="w-12 h-12 rounded-full object-contain bg-white ring-1 ring-line"
      />
    )}
    <blockquote>{children}</blockquote>
  </figure>
)

export default CardTestimonial
