import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "../components/grid"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Button from "../components/button"
import FeaturedMembers from "../components/featured-members"
import Events from "../components/events"
import LogoIcon from "../svg/icon.svg"
import BgElement from "../components/bgElement"
import Priciples from "../components/priciples"
import Testimonials from "../components/testimonials"

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
          <div className="w-full lg:w-1/2">
            <h1 className="mb-6">
              What is <span className="text-primary">OpenGitOps</span>?
            </h1>

            <p className="text-xl md:text-2xl xl:text-3xl">
              <span className="text-primary">OpenGitOps</span> is a set of
              open-source standards, best practices, and community-focused
              education to help organizations adopt a structured, standardized
              approach to implementing{" "}
              <span className="text-primary">GitOps</span>.
            </p>

            <div className="mt-4">
              <Button
                to="/get-involved"
                label="Get Involved"
                className="w-full mt-8 mb-8 md:w-auto"
              />

              <div className="space-x-8 text-center text-sm sm:text-base md:space-x-6 md:text-left">
                <AnchorLink
                  to="/#priciples"
                  title="Priciples"
                  className="font-bold text-primary">
                  <span>GitOps Principles</span>
                </AnchorLink>

                <AnchorLink
                  to="/#events"
                  title="Priciples"
                  className="font-bold text-primary">
                  <span>Upcoming Events</span>
                </AnchorLink>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative flex justify-center items-center h-full">
              <div className="absolute -z-1 left-12 my-auto h-[54rem] w-[54rem] rounded-circle bg-gradient-to-t from-transparent to-secondary opacity-20"></div>
              <LogoIcon className="w-3/5 h-auto m-auto" />
            </div>
          </div>
        </section>

        <section className="py-32">
          <Testimonials />
        </section>

        <section className="py-32">
          <h2>
            Member <span className="text-primary">Companies</span>
          </h2>

          <FeaturedMembers />
        </section>

        <section id="priciples" className="relative">
          <BgElement className="-top-32" />

          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/5">
              <h2 className="pr-64 md:text-7xl lg:sticky lg:top-20 lg:mb-0">
                <span className="text-primary">GitOps</span>{" "}
                <span className="font-normal">Priciples</span>
              </h2>
            </div>

            <div className="w-full lg:w-3/5">
              <Priciples />

              <Button
                to="/get-involved"
                label="Get Involved"
                className="w-full mt-12 md:w-auto"
              />
            </div>
          </div>
        </section>

        <section id="events">
          <Events upcomingLimit={5} pastLimit={9} />
        </section>
      </Container>
    </Layout>
  )
}

export default IndexPage
