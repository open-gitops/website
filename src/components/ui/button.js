import * as React from "react"
import classNames from "classnames"
import { Link } from "gatsby"
import { linkRegex } from "../../helpers"

// variant: "primary" (default), "ghost" (outline) or "accent" (always yellow)
const Button = ({ to, label, className, onClick, variant, size }) => {
  const classes = classNames("btn", className, {
    "btn-ghost": variant === "ghost",
    "btn-accent": variant === "accent",
    "btn-sm": size === "sm",
  })

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {label}
      </button>
    )
  }

  return linkRegex().test(to) ? (
    <a href={to} className={classes}>
      {label}
    </a>
  ) : (
    <Link to={to} className={classes}>
      {label}
    </Link>
  )
}

export default Button
