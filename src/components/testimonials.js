import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Grid } from "./ui/grid"
import CardTestimonial from "../components/ui/card-testimonial"

const Testimonials = () => {
  const query = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/(content/testimonials)/" } }
        ) {
          edges {
            node {
              body
            }
          }
        }
      }
    `
  )

  return (
    <Grid lg={3}>
      {query.allMdx.edges.map((item, index) => (
        <CardTestimonial key={index}>
          <MDXRenderer>{item.node.body}</MDXRenderer>
        </CardTestimonial>
      ))}
    </Grid>
  )
}

export default Testimonials
