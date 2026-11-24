import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Social from "../components/ui/social"
import { Container } from "../components/ui/grid"
import FoundingMembers from "../components/founding-members"
import thumbnail from "../images/thumbnail-default.png"

const AboutPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo
        title="Community"
        description="Where to find the OpenGitOps project online."
        url={location.href}
        image={thumbnail}
      />

      <Container narrow className="py-12 md:py-20">
        <h1 className="mb-8 lg:mb-12 text-center">Community</h1>

        <Social full className="mb-12 md:mb-24" />

        <h2 className="mb-10 text-center">
          Founding <span className="text-accent">Members</span>
        </h2>

        <FoundingMembers className="justify-center" />
      </Container>
    </Layout>
  )
}

export default AboutPage
