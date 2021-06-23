import * as React from "react"
import Codefresh from "../svg/members/codefresh.svg"

const FeaturedMembers = ({ className }) => {
  return (
    <div className={className}>
      <div className="py-12">
        <div className="w-44 bg-white rounded-full shadow-xl">
          <div className="aspect-w-1 aspect-h-1 flex justify-center items-center">
            <Codefresh className="m-auto h-auto w-4/6" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedMembers
