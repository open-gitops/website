import * as React from "react"
import classNames from "classnames"
import Codefresh from "../svg/members/codefresh.svg"
import Button from "./button"
import Circle from "../svg/circle.svg"

const FeaturedMembers = ({ className }) => {
  const wrapperClass = classNames({
    "relative flex flex-wrap py-12": true,
    [className]: className,
  })
  const itemInnerClass =
    "aspect-w-1 aspect-h-1 flex justify-center items-center"
  const itemLogoClass = "m-auto h-auto w-4/6"
  const itemClass = "absolute bg-white rounded-full shadow-xl"
  const item1Style = { width: "17%", top: "1%", left: 0 }
  const item2Style = { width: "14%", top: "15%", left: "32%" }
  const item3Style = { width: "16%", top: "10%", left: "65%" }
  const item4Style = { width: "13%", top: "60%", left: "16%" }
  const item5Style = { width: "15%", top: "60%", left: "50%" }
  const item6Style = { width: "14%", top: "60%", left: "85%" }

  return (
    <div className={wrapperClass}>
      <Circle className="absolute top-0 left-[30%] text-secondary" />
      <Circle className="absolute -top-44 left-[50%] h-auto w-[800px] text-secondary transform rotate-180" />

      <div className="relative py-24 w-full md:py-40 lg:w-3/4 lg:py-52">
        <div className={itemClass} style={item1Style}>
          <div className={itemInnerClass}>
            <Codefresh className={itemLogoClass} />
          </div>
        </div>
        <div className={itemClass} style={item2Style}>
          <div className={itemInnerClass}>
            <Codefresh className={itemLogoClass} />
          </div>
        </div>
        <div className={itemClass} style={item3Style}>
          <div className={itemInnerClass}>
            <Codefresh className={itemLogoClass} />
          </div>
        </div>
        <div className={itemClass} style={item4Style}>
          <div className={itemInnerClass}>
            <Codefresh className={itemLogoClass} />
          </div>
        </div>
        <div className={itemClass} style={item5Style}>
          <div className={itemInnerClass}>
            <Codefresh className={itemLogoClass} />
          </div>
        </div>
        <div className={itemClass} style={item6Style}>
          <div className={itemInnerClass}>
            <Codefresh className={itemLogoClass} />
          </div>
        </div>
      </div>

      <div className="w-full text-center lg:w-1/4">
        <Button
          to="/"
          type="primary"
          label="See all 41 members"
          className="mt-10 sm:mt-16 lg:mt-20"
        />
      </div>
    </div>
  )
}

export default FeaturedMembers
