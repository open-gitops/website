import * as React from "react"

const SkipToContent = () => {
  return (
    <a
      className="absolute left-1/2 transform -translate-x-1/2 w-px h-px p-0 -m-px overflow-hidden text-xl bg-primary whitespace-nowrap clip-0 focus:w-auto focus:h-auto focus:pt-3 focus:pb-1.5 focus:px-4 focus:m-0 focus:visible focus:text-dark focus:z-999 focus:clip-auto"
      href="#main">
      Skip to content
    </a>
  )
}

export default SkipToContent
