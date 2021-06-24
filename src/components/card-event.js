import * as React from "react"
import Button from "./button"
import PinIcon from "../svg/pin.svg"

const CardEvent = ({ date, title, location, url }) => {
  return (
    <div className="relative py-5 pl-8 pr-32 bg-white rounded-2xl shadow-xl">
      <div className="font-bold text-secondary">{date}</div>
      <div className="mb-2 text-2xl text-dark">{title}</div>
      <div className="text-sm text-gray">
        <PinIcon className="inline opacity-40" /> {location}
      </div>

      <Button
        to={url}
        type="primary"
        label="Attend"
        className="absolute top-1/2 -right-8 transform -translate-y-1/2"
      />
    </div>
  )
}

export default CardEvent
