import * as React from "react"
import Button from "./button"
import PinIcon from "../../svg/pin.svg"

const CardEvent = ({ date, title, location, url }) => {
  return (
    <div className="decor decor-primary py-5 pl-8 lg:pr-32 bg-white rounded-2xl shadow-xl">
      <div className="mb-1 font-bold text-secondary">{date}</div>
      <div className="mb-2 text-xl sm:text-2xl text-dark">{title}</div>
      <div className="text-sm text-gray">
        <PinIcon className="inline opacity-40" /> {location}
      </div>

      <Button
        to={url}
        label="Attend"
        className="mt-6 lg:!absolute lg:top-1/2 lg:-right-8 lg:mt-0 lg:transform lg:-translate-y-1/2"
      />
    </div>
  )
}

export default CardEvent
