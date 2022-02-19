import * as React from "react"
import Button from "./button"
import PinIcon from "../../svg/pin.svg"

const CardEventAlt = ({ date, title, location, url }) => {
  return (
    <div className="decor py-5 pl-8 lg:pr-40 bg-dark/20 rounded-2xl before:bg-dark/10">
      <div className="mb-1 text-sm font-display text-light">{date}</div>
      <div className="mb-2  text-lg  text-white">{title}</div>
      <div className="flex text-sm text-light">
        <PinIcon className="mt-0.5 mr-1 h-4 w-auto" />
        <div className="flex-1 lg:pr-2">{location}</div>
      </div>

      <Button
        to={url}
        label="Recordings"
        className="mt-6 lg:!absolute lg:top-1/2 lg:-right-8 lg:mt-0 lg:transform lg:-translate-y-1/2 mr-2"
      />
    </div>
  )
}

export default CardEventAlt
