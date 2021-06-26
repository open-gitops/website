import * as React from "react"
import classNames from "classnames"
import Button from "./ui/button"
import Circle from "../svg/circle.svg"
import Amazong from "../../content/members/amazon/amazon.svg"
import Azure from "../../content/members/azure/azure.svg"
import Codefresh from "../../content/members/codefresh/codefresh.svg"
import Github from "../../content/members/github/github.svg"
import Redhat from "../../content/members/redhat/redhat.svg"
import Weaveworks from "../../content/members/weaveworks/weaveworks.svg"

const FeaturedMembers = ({ className }) => {
  const itemInnerClass =
    "aspect-w-1 aspect-h-1 flex justify-center items-center"
  const itemLogoClass = "m-auto h-auto w-4/6"
  const itemClass = "absolute bg-white rounded-full shadow-xl"
  const wrapperClass = classNames({
    "relative flex flex-wrap py-12": true,
    [className]: className,
  })

  return (
    <div className={wrapperClass}>
      <Circle className="absolute top-0 left-[30%] text-secondary" />
      <Circle className="absolute -top-44 left-[50%] h-auto w-[800px] text-secondary transform rotate-180" />

      <div className="relative py-28 w-full sm:py-40 md:py-48 lg:w-3/4 lg:py-52">
        <div
          className={`${itemClass} w-[25%] lg:w-[21%] 2xl:w-[17%] top-[1%] left-0`}>
          <div className={itemInnerClass}>
            <Codefresh className={itemLogoClass} />
          </div>
        </div>
        <div
          className={`${itemClass} w-[22%] lg:w-[18%] 2xl:w-[14%] top-[15%] left-[32%] lg:left-[32%] `}>
          <div className={itemInnerClass}>
            <Github className={itemLogoClass} />
          </div>
        </div>
        <div
          className={`${itemClass} w-[27%] md:w-[26%] lg:w-[18%] 2xl:w-[16%] top-[10%] left-[60%] lg:left-[65%] `}>
          <div className={itemInnerClass}>
            <Azure className={itemLogoClass} />
          </div>
        </div>
        <div
          className={`${itemClass} w-[25%] lg:w-[17%] 2xl:w-[13%] top-[50%] sm:top-[60%] left-[10%] lg:left-[16%] `}>
          <div className={itemInnerClass}>
            <Redhat className={itemLogoClass} />
          </div>
        </div>
        <div
          className={`${itemClass} w-[20%] lg:w-[19%] 2xl:w-[15%] top-[60%] left-[46%] lg:left-[50%] `}>
          <div className={itemInnerClass}>
            <Weaveworks className={itemLogoClass} />
          </div>
        </div>
        <div
          className={`${itemClass} w-[22%] lg:w-[18%] 2xl:w-[14%] top-[60%] left-[77%] lg:left-[85%] `}>
          <div className={itemInnerClass}>
            <Amazong className={`${itemLogoClass} top-2`} />
          </div>
        </div>
      </div>

      <div className="w-full text-center lg:w-1/4">
        <Button
          to="/"
          label="See all 41 members"
          className="mt-10 sm:mt-16 lg:mt-20"
        />
      </div>
    </div>
  )
}

export default FeaturedMembers
