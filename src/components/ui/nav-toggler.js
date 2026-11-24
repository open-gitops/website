import * as React from "react"
import "@animated-burgers/burger-squeeze/dist/styles.css"

// Uses the burger-squeeze styles on a real button.
const NavToggler = ({ isOpen, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-expanded={isOpen}
    aria-label="Menu"
    className={`burger burger-squeeze burger-dark relative z-999 ml-2 lg:hidden${
      isOpen ? " open" : ""
    }`}>
    <span className="burger-lines block" />
  </button>
)

export default NavToggler
