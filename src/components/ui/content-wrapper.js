import * as React from "react"
import classNames from "classnames"

const ContentWrapper = ({ className, prose, offset, children }) => {
  const classes = classNames({
    "py-8 px-6 max-w-4xl bg-white shadow-xl md:py-12 md:px-10": true,
    "prose prose-lg": prose,
    "mx-auto rounded-2xl": !offset,
    "-mx-4 sm:mx-auto sm:rounded-2xl": offset,
    [className]: className,
  })

  return <div className={classes}>{children}</div>
}

ContentWrapper.defaultProps = {
  prose: true,
  offset: false,
}

export default ContentWrapper
