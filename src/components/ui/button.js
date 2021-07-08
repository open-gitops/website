import * as React from "react"
import classNames from "classnames"
import { Link } from "gatsby"
import { linkRegex } from "../../helpers"

const Button = ({ to, label, className }) => {
  const regex = linkRegex()
  const btnClasses = classNames({
    btn: true,
    [className]: className,
  })

  return (
    <React.Fragment>
      {regex.test(to) && (
        <a href={to} className={btnClasses}>
          <div className="btn--bottom"></div>

          <div className="btn--top">
            <div className="btn--label">{label}</div>
            <div className="btn--border btn--border-left"></div>
            <div className="btn--border btn--border-top"></div>
            <div className="btn--border btn--border-right"></div>
            <div className="btn--border btn--border-bottom"></div>
          </div>
        </a>
      )}

      {!regex.test(to) && (
        <Link to={to} className={btnClasses}>
          <div className="btn--bottom"></div>

          <div className="btn--top">
            <div className="btn--label">{label}</div>
            <div className="btn--border btn--border-left"></div>
            <div className="btn--border btn--border-top"></div>
            <div className="btn--border btn--border-right"></div>
            <div className="btn--border btn--border-bottom"></div>
          </div>
        </Link>
      )}
    </React.Fragment>
  )
}

export default Button
