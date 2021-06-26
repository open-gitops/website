import * as React from "react"
import Burger from "@animated-burgers/burger-squeeze"
import "@animated-burgers/burger-squeeze/dist/styles.css"
import classNames from "classnames"

const NavToggler = ({ isOpen, onClick, color }) => {
  const burgerClass = classNames({
    "appearance-none relative z-999 ml-auto lg:hidden": true,
    "burger-dark": color === "light",
  })

  return (
    <Burger
      isOpen={isOpen}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label={`${isOpen ? "Open navigation" : "Close navigation"}`}
      className={burgerClass}
    />
  )
}

export default NavToggler
