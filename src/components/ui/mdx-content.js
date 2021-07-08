import * as React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import Button from "./button"
import YoutubeEmbed from "./youtube-embed"

const MdxContent = ({ children }) => {
  const shortcodes = { Link, YoutubeEmbed, Button }

  return (
    <React.Fragment>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </React.Fragment>
  )
}

export default MdxContent
