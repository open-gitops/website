import * as React from "react"
import Layout from "../components/layout"
import { Container } from "../components/grid"
import Seo from "../components/seo"
import ArticleWrapper from "../components/article-wrapper"
import PressReleases from "../components/press-releases"

const AboutPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo
        title="Events"
        description="Events"
        url={location.href}
        // image={thumbnail}
      />

      <Container className="mt-32 max-w-3xl">
        <h1 className="mb-12 text-center">
          About <span className="text-primary">Open GitOps</span>
        </h1>

        <ArticleWrapper>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum
          posuere lorem ipsum dolor sit amet consectetur adipiscing elit.
          Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut
          placerat. Egestas diam in arcu cursus euismod quis. Diam sollicitudin
          tempor id eu nisl nunc. Enim tortor at auctor urna nunc id cursus.
          Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat.
          Non tellus orci ac auctor augue mauris. Augue interdum velit euismod
          in pellentesque massa placerat. Malesuada fames ac turpis egestas
          maecenas pharetra convallis posuere. Vitae congue mauris rhoncus
          aenean vel. Quis ipsum suspendisse ultrices gravida dictum fusce ut.
          Nunc congue nisi vitae suscipit tellus. Nisl nisi scelerisque eu
          ultrices.
        </ArticleWrapper>

        <PressReleases className="my-12" />
      </Container>
    </Layout>
  )
}

export default AboutPage
