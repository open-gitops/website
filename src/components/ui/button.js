import * as React from "react"
import classNames from "classnames"
import { Link } from "gatsby"
import { linkRegex } from "../../helpers"

const Button = ({ to, label, className, onClick }) => {
  const regex = linkRegex()
  const btnClasses = classNames({
    btn: true,
    [className]: className,
  })

  const inner = (
    <div className="btn--top">
      <div className="btn--label">{label}</div>
      <div className="btn--border btn--border-left"></div>
      <div className="btn--border btn--border-top"></div>
      <div className="btn--border btn--border-right"></div>
      <div className="btn--border btn--border-bottom"></div>
    </div>
  )

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={btnClasses}>
        <div className="btn--bottom"></div>
        {inner}
      </button>
    )
  }

  return (
    <React.Fragment>
      {regex.test(to) && (
        <a href={to} className={btnClasses}>
          <div className="btn--bottom"></div>
          {inner}
        </a>
      )}

      {!regex.test(to) && (
        <Link to={to} className={btnClasses}>
          <div className="btn--bottom"></div>
          {inner}
        </Link>
      )}
    </React.Fragment>
  )
}

export default Button
