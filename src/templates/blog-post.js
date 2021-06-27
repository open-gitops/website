import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "../components/ui/grid"
import ContentWrapper from "../components/ui/content-wrapper"
import Meta from "../components/ui/meta"
import Share from "../components/ui/share"

const BlogPostTemplate = ({ data, location }) => {
  const currentURL = location.href
  const post = data.mdx
  const shareImage =
    post.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData?.images
      ?.fallback?.src

  return (
    <Layout location={location}>
      <Seo
        title={post.frontmatter?.title}
        description={post.frontmatter?.description || post.excerpt}
        image={shareImage}
        url={currentURL}
      />

      <Container narrow className="mt-24 lg:mt-12 space-y-4">
        <div className="aspect-w-16 aspect-h-9">
          <GatsbyImage
            image={
              post.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData
            }
            alt={post.frontmatter?.title}
            className="rounded-2xl"
          />
        </div>

        <Meta author={post.frontmatter?.author} date={post.frontmatter?.date} />

        <ContentWrapper>
          <header>
            <h1 itemProp="headline">{post.frontmatter?.title}</h1>
          </header>

          <article itemScope itemType="http://schema.org/Article">
            <MDXRenderer>{post.body}</MDXRenderer>
          </article>
        </ContentWrapper>

        <footer>
          <div className="p-8 text-center bg-white rounded-2xl shadow-2xl">
            <h4 className="mb-5 font-display text-base text-dark uppercase tracking-widest">
              Share
            </h4>

            <Share
              url={currentURL}
              title={post.frontmatter?.title}
              description={post.frontmatter?.description}
            />
          </div>
        </footer>
      </Container>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 650
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      slug
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      slug
      frontmatter {
        title
      }
    }
  }
`
