import * as React from "react"

const CardMember = ({ to, logoSrc, title }) => {
  return (
    <div className="group bg-white rounded-xl">
      <a href={to} target="_blank" rel="noopener noreferrer" className="block">
        <div className="py-2 text-gray text-center text-sm border-b-2 border-light/30 transition-colors duration-200 group-hover:text-dark group-hover:border-accent">
          {title}
        </div>

        <div className="relative aspect-[4/3]">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={logoSrc}
              alt={title}
              title={title}
              className="absolute w-8/12 h-1/3 object-contain"
            />
          </div>
        </div>
      </a>
    </div>
  )
}

export default CardMember
