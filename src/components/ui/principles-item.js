import * as React from "react"

const PrinciplesItem = ({ title, order, children }) => {
  return (
    <li className="relative">
      <div className="absolute -z-1 -top-10 -left-2 font-display text-dark/20 text-8xl md:-left-8">
        {order}
      </div>
      <h3 className="text-3xl sm:text-4xl text-accent">{title}</h3>
      <div className="text-xl sm:text-2xl">{children}</div>
    </li>
  )
}

export default PrinciplesItem
