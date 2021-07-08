import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
  const query = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/(content/members)/" } }
          sort: { order: ASC, fields: frontmatter___title }
        ) {
          edges {
            node {
              frontmatter {
                title
                site
                logo {
                  publicURL
                }
              }
            }
          }
        }
      }
    `
  )

  const allMembers = query.allMdx.edges
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
      <Circle className="absolute top-0 left-[30%] text-[#3d81f6]" />
      <Circle className="absolute -top-44 left-[50%] h-auto w-[700px] lg:w-[800px] text-[#3d81f6] transform rotate-[150deg]" />

      <div className="relative py-28 w-full sm:py-40 md:py-48 lg:w-3/4 lg:py-52">
        <div
          className={`${itemClass} animate-float w-[25%] lg:w-[21%] 2xl:w-[17%] top-[1%] left-0`}>
          <div className={itemInnerClass}>
            <Codefresh className={itemLogoClass} />
          </div>
        </div>

        <div
          className={`${itemClass} animate-float animate-delay-100 w-[22%] lg:w-[18%] 2xl:w-[14%] top-[15%] left-[32%] lg:left-[32%] `}>
          <div className={itemInnerClass}>
            <Github className={itemLogoClass} />
          </div>
        </div>

        <div
          className={`${itemClass} animate-float animate-delay-200 w-[27%] md:w-[26%] lg:w-[18%] 2xl:w-[16%] top-[10%] left-[60%] lg:left-[65%] `}>
          <div className={itemInnerClass}>
            <Azure className={itemLogoClass} />
          </div>
        </div>

        <div
          className={`${itemClass} animate-float w-[25%] lg:w-[17%] 2xl:w-[13%] top-[50%] sm:top-[60%] left-[10%] lg:left-[16%] `}>
          <div className={itemInnerClass}>
            <Redhat className={itemLogoClass} />
          </div>
        </div>

        <div
          className={`${itemClass} animate-float animate-delay-250 w-[20%] lg:w-[19%] 2xl:w-[15%] top-[60%] left-[46%] lg:left-[50%] `}>
          <div className={itemInnerClass}>
            <Weaveworks className={itemLogoClass} />
          </div>
        </div>

        <div
          className={`${itemClass} animate-float animate-delay-150 w-[22%] lg:w-[18%] 2xl:w-[14%] top-[60%] left-[77%] lg:left-[85%] `}>
          <div className={itemInnerClass}>
            <Amazong className={`${itemLogoClass} top-2`} />
          </div>
        </div>
      </div>

      <div className="w-full text-center lg:w-1/4">
        <Button
          to="/community"
          label={`See all ${allMembers.length} members`}
          className="mt-10 sm:mt-16 lg:mt-20"
        />
      </div>
    </div>
  )
}

export default FeaturedMembers
