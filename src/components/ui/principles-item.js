import * as React from "react"

const PrinciplesItem = ({ title, order, children }) => {
  return (
    <li className="relative">
      <div className="absolute -z-1 -top-12 -left-2 font-bold text-dark opacity-40 text-8xl md:-left-8">
        {order}
      </div>
      <h3 className="text-3xl sm:text-4xl text-primary">{title}</h3>
      <p className="text-xl sm:text-2xl">{children}</p>
    </li>
  )
}

export default PrinciplesItem
