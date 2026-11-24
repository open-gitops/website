import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Logos vary from wide wordmarks to near-squares, so size each by area
// rather than height: a 4:1 logo gets 30px, squarer ones grow up to 44px.
const sizeByArea = e => {
  const img = e.currentTarget
  const ratio = img.naturalWidth / img.naturalHeight || 4
  img.style.height = `${Math.min(44, Math.sqrt(3600 / ratio))}px`
}

const FoundingMembers = ({ className }) => {
  const { founding } = useStaticQuery(graphql`
    query {
      founding: allMdx(
        filter: {
          internal: { contentFilePath: { regex: "/(content/members)/" } }
          frontmatter: { founding: { eq: true } }
        }
        sort: { frontmatter: { title: ASC } }
      ) {
        nodes {
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
  `)

  return (
    <ul className={`flex flex-wrap items-center gap-x-4 gap-y-3 ${className || ""}`}>
      {founding.nodes.map(({ frontmatter: m }) => (
        <li key={m.title}>
          <a
            href={m.site}
            target="_blank"
            rel="noopener noreferrer"
            title={m.title}
            className="lift flex items-center justify-center h-14 px-[18px] rounded-[10px] bg-white">
            <img
              src={m.logo?.publicURL}
              alt={m.title}
              onLoad={sizeByArea}
              className="h-[30px] w-auto max-w-[140px] object-contain"
            />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default FoundingMembers
