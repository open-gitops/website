import * as React from "react"
import PinIcon from "../../svg/pin.svg"

const CardEventAlt = ({ date, title, location }) => {
  return (
    <div className="decor py-5 pl-8 pr-5 bg-dark/20 rounded-2xl before:bg-dark/10">
      <div className="mb-1 text-sm font-display text-light">{date}</div>
      <div className="mb-2 text-lg text-white">{title}</div>
      <div className="flex text-sm text-light">
        <PinIcon className="mt-0.5 mr-1 h-4 w-auto" />
        <div className="flex-1">{location}</div>
      </div>
    </div>
  )
}

export default CardEventAlt
