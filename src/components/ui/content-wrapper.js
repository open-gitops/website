import * as React from "react"
import classNames from "classnames"

const ContentWrapper = ({ className, prose, children }) => {
  const classes = classNames({
    "py-8 px-6 max-w-4xl mx-auto bg-white rounded-2xl shadow-xl md:py-12 md:px-10": true,
    "prose prose-lg": prose,
    [className]: className,
  })

  return <div className={classes}>{children}</div>
}

ContentWrapper.defaultProps = {
  prose: true,
}

export default ContentWrapper
