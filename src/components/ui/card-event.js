import * as React from "react"
import Button from "./button"
import PinIcon from "../../svg/pin.svg"

const CardEvent = ({ date, title, location, url }) => {
  return (
    <div className="decor py-5 pl-8 pr-4 lg:pr-32 bg-white rounded-2xl shadow-xl before:bg-accent">
      <div className="mb-1 font-display text-night">{date}</div>
      <div className="mb-2 text-xl sm:text-2xl text-dark">{title}</div>
      <div className="flex text-sm text-gray">
        <PinIcon className="mt-0.5 mr-1 h-4 w-auto" />
        <div className="flex-1">{location}</div>
      </div>

      {url && (
        <Button
          to={url}
          label="Attend"
          className="mt-6 lg:!absolute lg:top-1/2 lg:-right-8 lg:mt-0 lg:transform lg:-translate-y-1/2"
        />
      )}
    </div>
  )
}

export default CardEvent
