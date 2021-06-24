import * as React from "react"
import classNames from "classnames"

const ArticleWrapper = ({ className, children }) => {
  const classes = classNames({
    "prose prose-lg": true,
    [className]: className,
  })
  return (
    <article itemScope itemType="http://schema.org/Article" className={classes}>
      {children}
    </article>
  )
}

export default ArticleWrapper
