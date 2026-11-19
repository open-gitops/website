import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Grid } from "./ui/grid"
import CardPost from "./ui/card-post"
import Button from "./ui/button"

const TrainingCta = () => {
  const { allMdx } = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/(content/trainings)/" } }
        sort: { order: ASC, fields: frontmatter___title }
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
    <Container>
      <h2 className="mb-4">
        Training & <span className="text-accent">Certification</span>
      </h2>
      <p className="mb-10 max-w-3xl text-xl">
        Learn GitOps from the community: get certified as a GitOps Associate,
        or pick from {allMdx.nodes.length} courses covering fundamentals,
        Argo CD and GitOps at scale.
      </p>

      <Grid md={2} lg={3}>
        {teasers.map(t => (
          <CardPost
            key={t.site}
            title={t.title}
            to={t.site}
            img={t.thumbnail?.childImageSharp.gatsbyImageData}
          />
        ))}
      </Grid>

      <Button
        to="/training"
        label="Browse all training"
        className="w-full mt-12 md:w-auto"
      />
    </Container>
  )
}

export default TrainingCta
