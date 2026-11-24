import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Events from "../components/events"
import Principles from "../components/principles"
import Testimonials from "../components/testimonials"
import FoundingMembers from "../components/founding-members"
import TrainingCta from "../components/training-cta"
import Adopters from "../components/adopters"
import { Container } from "../components/ui/grid"
import Button from "../components/ui/button"
import Reveal from "../components/ui/reveal"
import LogoIcon from "../svg/icon.svg"
import thumbnail from "../images/thumbnail-default.png"

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo
        title="Home"
        description="OpenGitOps is a set of open-source standards and best practices."
        url={location.href}
        image={thumbnail}
      />

      <Container className="grid items-center gap-12 py-12 md:py-[72px] lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <h1 className="enter m-0 text-[clamp(42px,5.2vw,68px)] leading-[1.06] tracking-[-0.03em]">
            What is{" "}
            <span className="text-highlight [background:var(--h1-hl)]">
              OpenGitOps
            </span>
            ?
          </h1>

          <p className="enter [animation-delay:.1s] text-xl text-muted">
            OpenGitOps is a set of open-source standards, best practices, and
            community-focused education to help organizations adopt a
            structured, standardized approach to implementing GitOps.
          </p>

          <div className="enter [animation-delay:.2s] flex flex-wrap items-center gap-x-4 gap-y-3">
            <Button to="/get-involved" label="Get involved" />
            <Button to="#principles" label="GitOps Principles" variant="ghost" />
            <a
              href="#events"
              className="inline-flex items-center min-h-[52px] px-1 font-semibold text-link underline underline-offset-4 hover:text-link-hover">
              Upcoming Events
            </a>
          </div>
        </div>

        <div className="enter [animation-delay:.3s] flex items-center justify-center min-h-[280px] p-12 rounded-3xl border border-[var(--panel-border)] [background:var(--panel-bg)] md:min-h-[400px]">
          <LogoIcon
            aria-hidden="true"
            className="float w-[min(400px,82%)] h-auto text-mark"
          />
        </div>
      </Container>

      <section
        aria-labelledby="founding-members"
        className="bg-surface border-y border-line">
        <Container className="flex flex-wrap items-center gap-x-10 gap-y-3 py-7">
          <h2
            id="founding-members"
            className="m-0 font-sans text-[13px] leading-normal font-semibold tracking-[0.08em] uppercase text-muted">
            Founding members
          </h2>
          <FoundingMembers />
        </Container>
      </section>

      <section id="principles">
        <Container className="flex flex-wrap gap-x-16 gap-y-12 py-16 md:py-24">
          <Reveal className="flex flex-col items-start gap-4 flex-[1_1_320px]">
            <h2 className="m-0 text-[clamp(36px,4.2vw,56px)] leading-[1.08] tracking-[-0.03em]">
              GitOps Principles
            </h2>
            <a
              href="https://github.com/open-gitops/documents/releases/tag/v1.0.0"
              className="inline-flex items-center min-h-[44px] px-3.5 rounded-md bg-yellow text-[15px] font-semibold text-dark hover:text-dark">
              v1.0.0
            </a>
            <Button to="/get-involved" label="Get involved" className="mt-4" />
          </Reveal>

          <Principles />
        </Container>
      </section>

      <section aria-label="What people say" className="bg-surface border-y border-line">
        <Container className="py-16 md:py-[88px]">
          <Testimonials />
        </Container>
      </section>

      <section id="adopters" aria-labelledby="adopters-title" className="bg-blue text-dark">
        <Adopters />
      </section>

      <section id="training">
        <TrainingCta />
      </section>

      <section id="events" className="border-t border-line">
        <Events upcomingLimit={5} pastLimit={3} />
      </section>
    </Layout>
  )
}

export default IndexPage
