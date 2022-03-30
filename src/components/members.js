import * as React from "react"
import CardMember from "./ui/card-member"

const Members = ({ members }) => {
  return (
    <React.Fragment>
      {members.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <CardMember
              to={item.node.frontmatter?.site}
              title={item.node.frontmatter?.title}
              founding={item.node.frontmatter?.founding}
              logoSrc={item.node.frontmatter?.logo?.publicURL}
            />
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}

Members.defaultProps = {
  max: 24,
}

export default Members
