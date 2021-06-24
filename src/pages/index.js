import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Grid } from "../components/grid"
import Button from "../components/button"
import CardTestimonial from "../components/card-testimonial"
import FeaturedMembers from "../components/featured-members"
import PrinciplesItem from "../components/principles-item"
import Events from "../components/events"

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo
        title="Home"
        description="Open source Kubernetes native workflows, events, CI and CD"
        url={location.href}
        // image={thumbnail}
      />

      <Container className="pt-40">
        <section className="flex flex-wrap">
          <div className="w-full text-white lg:w-1/2 xl:w-7/12">
            <h1>
              What is <span className="text-primary">Open GitOps</span>?
            </h1>

            <p className="text-xl md:text-2xl">
              <span className="text-primary">OpenGitOps</span> is a set of
              open-source standards, best practices, and community-focused
              education to help organizations adopt a structured, standardized
              approach to implementing{" "}
              <span className="text-primary">GitOps</span>.
            </p>

            <div className="mt-6 space-y-4 md:space-x-4 md:space-y-0">
              <Button
                to="/"
                type="primary"
                label="GitOps Principles"
                className="w-full mt-8 md:w-auto"
              />

              <Button
                to="/"
                type="primary"
                label="Get Involved"
                className="w-full mt-8 md:w-auto"
              />

              <Button
                to="/"
                type="primary"
                label="Upcoming Events"
                className="w-full mt-8 md:w-auto"
              />
            </div>
          </div>

          <div></div>
        </section>

        <section className="py-32">
          <Grid lg={3}>
            <CardTestimonial
              quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua."
            />
            <CardTestimonial
              quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua."
            />
            <CardTestimonial
              quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua."
            />
          </Grid>
        </section>

        <section className="py-32">
          <h2>
            Member <span className="text-primary">Companies</span>
          </h2>

          <FeaturedMembers />
        </section>

        <section>
          <Grid lg={2}>
            <div>
              <h2>
                <span className="text-primary">GitOps</span> Priciples
              </h2>
            </div>

            <ol className="space-y-20">
              <PrinciplesItem number={1} title="Declarative Configuration">
                All resources manag e d through a GitOps process must be
                completely expressed declaratively.
              </PrinciplesItem>
              <PrinciplesItem
                number={2}
                title="Version controlled immutable storage">
                Declarative descriptions are stored in a repository that
                supports immutability, versioning, and version history. For
                example, git.
              </PrinciplesItem>
              <PrinciplesItem number={3} title="Automated delivery">
                Delivery of the declarative descriptions, from the repository to
                the runtime environment, is fully automated.
              </PrinciplesItem>
            </ol>
          </Grid>
        </section>

        <Events />
      </Container>
    </Layout>
  )
}

export default IndexPage
