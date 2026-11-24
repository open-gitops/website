import * as React from "react"

const Banner = ({ text, link, cta }) => {
  const isExternal = /^https?:\/\//.test(link || "")

  return (
    <div className="bg-bar text-white border-b border-line">
      <div className="container flex flex-wrap items-center justify-center gap-x-4 py-0.5 text-[15px] font-medium text-center">
        <span className="py-2.5">{text}</span>
        {link && (
          <a
            href={link}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="inline-flex items-center min-h-[44px] font-semibold text-yellow underline underline-offset-2 hover:text-white">
            {cta}
          </a>
        )}
      </div>
    </div>
  )
}

export default Banner
