import * as React from "react"
import { Grid } from "./ui/grid"
import CardTestimonial from "../components/ui/card-testimonial"

// Each testimonial is an MDX file; webpack compiles them via gatsby-plugin-mdx.
const testimonials = require.context("../../content/testimonials", false, /\.mdx$/)

const Testimonials = () => (
  <Grid lg={3}>
    {testimonials
      .keys()
      .slice(0, 9)
      .map(key => {
        const Body = testimonials(key).default
        return (
          <CardTestimonial key={key}>
            <Body />
          </CardTestimonial>
        )
      })}
  </Grid>
)

export default Testimonials
