import * as React from "react"
import classNames from "classnames"

const BgElement = ({ className }) => {
  const classes = classNames({
    "absolute -z-1 -left-1/2 my-auto h-[54rem] w-1/2 bg-gradient-to-b from-transparent to-white transform rotate-45 -translate-x-1/2 lg:w-2/3": true,
    [className]: className,
  })

  return <div className={classes}></div>
}

export default BgElement
