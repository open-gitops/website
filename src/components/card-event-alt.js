import * as React from "react"
import PinIcon from "../svg/pin.svg"

const CardEventAlt = ({ date, title, location, url }) => {
  return (
    <div className="relative py-5 pl-8 pr-32 bg-dark bg-opacity-30 rounded-2xl">
      <div className="mb-1 text-sm font-bold text-white opacity-75">{date}</div>
      <div className="mb-2 text-lg text-white">{title}</div>
      <div className="text-sm text-white opacity-75">
        <PinIcon className="inline opacity-60" /> {location}
      </div>
    </div>
  )
}

export default CardEventAlt
