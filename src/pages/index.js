import * as React from "react"
import Layout from "../components/layout"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Seo from "../components/seo"
import FeaturedMembers from "../components/featured-members"
import Events from "../components/events"
import Priciples from "../components/priciples"
import Testimonials from "../components/testimonials"
import { Container } from "../components/ui/grid"
import Button from "../components/ui/button"
import BgElement from "../components/ui/bgElement"
import BgCircle from "../components/ui/bgCircle"
import LogoIcon from "../svg/icon.svg"
import thumbnail from "../images/thumbnail-default.png"

const IndexPage = ({ location }) => {
  return (
    <Layout location={location} decor={false}>
      <Seo
        title="Home"
        description="OpenGitOps is a set of open-source standards and best practices."
        url={location.href}
        image={thumbnail}
      />

      <section className="pt-28 md:pt-48 2xl:pt-56 overflow-hidden">
        <Container>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <h1 className="mb-6">
                What is <span className="text-accent">OpenGitOps</span>?
              </h1>

              <p className="text-xl md:text-2xl xl:text-3xl">
                <span className="text-accent">OpenGitOps</span> is a set of
                open-source standards, best practices, and community-focused
                education to help organizations adopt a structured, standardized
                approach to implementing{" "}
                <span className="text-accent">GitOps</span>.
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
                    className="font-bold text-accent hover:underline">
                    <span>GitOps Principles</span>
                  </AnchorLink>

                  <AnchorLink
                    to="/#events"
                    title="Priciples"
                    className="font-bold text-accent hover:underline">
                    <span>Upcoming Events</span>
                  </AnchorLink>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative flex justify-center items-center mt-10 h-full md:mt-16 lg:mt-0">
                <BgCircle />
                <LogoIcon className="relative w-5/6 h-auto m-auto text-[#5a90f3] xl:left-12 lg:w-4/5" />
              </div>
            </div>
          </div>

          <div className="pt-12 md:pt-32">
            <Testimonials />
          </div>
        </Container>
      </section>

      <section className="pt-24 pb-24 md:pt-32 md:pb-32 xl:pt-40 xl:pb-40 overflow-hidden">
        <Container>
          <h2 className="text-center md:text-left">
            Founding <span className="text-accent">Members</span>
          </h2>

          <FeaturedMembers />
        </Container>
      </section>

      <section id="priciples" className="relative">
        <BgElement className="top-12 lg:top-64" />

        <Container>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/5">
              <h2 className="mb-12 pr-64 text-5xl md:text-6xl lg:sticky lg:top-12 xl:text-7xl lg:mb-0">
                <span className="text-accent">GitOps</span>{" "}
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
        </Container>
      </section>

      <section id="events">
        <Events upcomingLimit={5} pastLimit={9} />
      </section>
    </Layout>
  )
}

export default IndexPage
