import * as React from "react"
import Burger from "@animated-burgers/burger-squeeze"
import "@animated-burgers/burger-squeeze/dist/styles.css"

const NavToggler = ({ isOpen, onClick }) => {
  return (
    <Burger
      isOpen={isOpen}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label={`${isOpen ? "Open navigation" : "Close navigation"}`}
      className="appearance-none relative z-999 ml-auto burger-dark lg:hidden"
    />
  )
}

export default NavToggler
