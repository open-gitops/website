import * as React from "react"

const PrinciplesItem = ({ title, number, children }) => {
  return (
    <li className="relative">
      <div className="absolute -z-1 -top-12 -left-8 font-bold text-dark opacity-40 text-8xl">
        {number}
      </div>
      <h3 className="text-4xl text-primary">{title}</h3>
      <p className="text-2xl">{children}</p>
    </li>
  )
}

export default PrinciplesItem
