import * as React from "react"
import useReveal from "../../hooks/use-reveal"

const Reveal = ({ as: Tag = "div", ...props }) => (
  <Tag ref={useReveal()} {...props} />
)

export default Reveal
