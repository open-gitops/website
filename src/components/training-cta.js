import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "./ui/grid"
import CardPost from "./ui/card-post"
import Button from "./ui/button"
import Reveal from "./ui/reveal"

const TrainingCta = () => {
  const { allMdx } = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { internal: { contentFilePath: { regex: "/(content/trainings)/" } } }
        sort: { frontmatter: { title: ASC } }
      ) {
        nodes {
          frontmatter {
            title
            site
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  width: 400
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `)

  // One teaser per provider so the homepage stays vendor-neutral.
  const hosts = new Set()
  const teasers = allMdx.nodes
    .map(n => n.frontmatter)
    .filter(f => {
      const host = new URL(f.site).hostname
      return !hosts.has(host) && hosts.add(host)
    })
    .slice(0, 3)

  return (
    <Container className="flex flex-col gap-8 py-16 md:py-[88px]">
      <Reveal className="flex flex-col gap-3 max-w-[760px]">
        <h2 className="m-0 text-[clamp(32px,3.6vw,44px)] leading-[1.12] tracking-[-0.025em]">
          Training &amp; Certification
        </h2>
        <p className="text-[19px] text-muted">
          Learn GitOps from the community: get certified as a GitOps Associate,
          or pick from {allMdx.nodes.length} courses covering fundamentals,
          Argo CD and GitOps at scale.
        </p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teasers.map(t => (
          <CardPost
            key={t.site}
            title={t.title}
            to={t.site}
            img={t.thumbnail?.childImageSharp.gatsbyImageData}
          />
        ))}
      </div>

      <Button
        to="/training"
        label="Browse all training"
        variant="ghost"
        className="self-start"
      />
    </Container>
  )
}

export default TrainingCta
