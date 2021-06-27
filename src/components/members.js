import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CardMember from "./ui/card-member"

const Members = ({ max }) => {
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
  const [members, setMembers] = React.useState([...allMembers.slice(0, max)])

  return (
    <React.Fragment>
      {members.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <CardMember
              to={item.node.frontmatter?.site}
              title={item.node.frontmatter?.title}
              logoSrc={item.node.frontmatter?.logo?.publicURL}
            />

            {index === members.length - 1 &&
              allMembers.length !== members.length && (
                <button
                  onClick={() => setMembers(allMembers)}
                  className="flex justify-center items-center text-blue bg-gradient-to-tl from-blue/20 to-transparent rounded-xl transition hover:text-dark">
                  <div className="px-4 font-display text-2xl">
                    See all {allMembers.length}
                  </div>
                </button>
              )}
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
