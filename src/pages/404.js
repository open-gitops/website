import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "../components/ui/grid"
import Button from "../components/ui/button"
import thumbnail from "../images/thumbnail-default.png"

const NotFoundPage = ({ location }) => {
  return (
    <Layout location={location} hideFooter>
      <Seo
        title="404"
        description="Page not found"
        url={location.href}
        image={thumbnail}
      />

      <Container narrow className="pt-28 md:pt-32 text-center">
        <title>Not found</title>
        <h1 className="mb-8 lg:mb-12">
          Page <span className="text-accent">not found</span>
        </h1>
        <p>Sorry, we couldn’t find what you were looking for.</p>
        <Button to="/" className="mt-6" label="Go home" />.
      </Container>
    </Layout>
  )
}

export default NotFoundPage
