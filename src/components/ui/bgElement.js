import * as React from "react"
import classNames from "classnames"

const BgElement = ({ side, className }) => {
  const classes = classNames({
    " absolute -z-1 top-0 h-[44rem] bg-gradient-to-t from-[#4d8dff] to-transparent-blue md:h-[64rem]": true,
    "bg-clip-right right-0 w-2/3": side === "right",
    "bg-clip-left w-full -translate-x-32 md:-translate-x-1/2":
      side !== "right",
    [className]: className,
  })

  return <div className={classes}></div>
}

export default BgElement
