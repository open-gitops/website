import * as React from "react"
import classNames from "classnames"

const ContentWrapper = ({ className, prose, children }) => {
  const classes = classNames({
    "py-12 px-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-xl": true,
    [className]: className,
    "prose prose-lg": prose,
  })

  return <div className={classes}>{children}</div>
}

ContentWrapper.defaultProps = {
  prose: true,
}

export default ContentWrapper
