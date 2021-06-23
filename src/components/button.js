import * as React from "react"
import classNames from "classnames"
import { Link } from "gatsby"

const Button = ({ label, type, to, external, className }) => {
  const btnClasses = classNames({
    "btn px-7 py-3 cursor-pointer inline-block font-extrabold text-center text-xl border-transparent border-solid rounded-full appearance-none transition-all ease-linear": true,
    "bg-primary border border-primary text-dark hover:bg-primary hover:border-primary hover:text-white hover:shadow-primary":
      type === "primary",
    "bg-primary border border-primary text-primary bg-opacity-20 border-opacity-20 hover:bg-primary hover:border-primary hover:text-white":
      type === "secondary",
    [className]: className,
  })

  return (
    <>
      {external && (
        <a href={to} className={btnClasses}>
          {label}
        </a>
      )}

      {!external && (
        <Link to={to} className={btnClasses}>
          {label}
        </Link>
      )}
    </>
  )
}

export default Button
