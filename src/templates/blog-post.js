import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Container } from "../components/grid"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContentWrapper from "../components/content-wrapper"
import Meta from "../components/meta"
import { GatsbyImage } from "gatsby-plugin-image"

// Share buttons
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share"

// Share icons
import { EmailIcon, FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share"

const BlogPostTemplate = ({ data, location }) => {
  const currentURL = location.href
  const post = data.mdx
  const shareImage =
    post.frontmatter.thumbnail.childImageSharp?.gatsbyImageData?.images
      ?.fallback?.src
  const { previous, next } = data

  return (
    <Layout location={location}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={shareImage}
        url={currentURL}
      />
      <Container narrow className="mt-32 space-y-6">
        <div className="aspect-w-16 aspect-h-9">
          <GatsbyImage
            image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
            alt={post.frontmatter.title}
            className="rounded-2xl"
            aspectRatio={16 / 9}
          />
        </div>

        <Meta author={post.frontmatter.author} date={post.frontmatter.date} />

        <ContentWrapper>
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
          </header>

          <article itemScope itemType="http://schema.org/Article">
            <MDXRenderer>{post.body}</MDXRenderer>
          </article>
        </ContentWrapper>

        <footer>
          <div className="p-8 text-center bg-white rounded-2xl shadow-2xl">
            <h4 className="mb-5 font-bold text-base text-dark uppercase tracking-widest">
              Share
            </h4>

            <div className="space-x-4">
              <FacebookShareButton
                url={currentURL}
                quote={post.frontmatter.description}>
                <FacebookIcon size={42} round={true} />
              </FacebookShareButton>

              <TwitterShareButton
                url={currentURL}
                title={post.frontmatter.title}>
                <TwitterIcon size={42} round={true} />
              </TwitterShareButton>

              <LinkedinShareButton
                url={currentURL}
                title={post.frontmatter.title}
                summary={post.frontmatter.description}
                source="SecureNative">
                <LinkedinIcon size={42} round={true} />
              </LinkedinShareButton>

              <EmailShareButton
                url={currentURL}
                subject={post.frontmatter.title}
                body={post.frontmatter.description}>
                <EmailIcon size={42} round={true} />
              </EmailShareButton>
            </div>
          </div>
        </footer>
        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}>
            <li>
              {previous && (
                <Link to={`/blog/${previous.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`/blog/${next.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
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
              width: 950
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
