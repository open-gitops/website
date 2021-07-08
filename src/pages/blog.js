import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BeatLoader from "react-spinners/BeatLoader"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Grid } from "../components/ui/grid"
import CardPost from "../components/ui/card-post"
import thumbnail from "../images/thumbnail-default.png"

const BlogPage = ({ location, perLoad }) => {
  const query = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/(content/blog)/" } }
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          edges {
            node {
              slug
              excerpt(pruneLength: 160)
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
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
      }
    `
  )

  const allPosts = query.allMdx.edges
  const [posts, setPosts] = React.useState([...allPosts.slice(0, perLoad)])
  const [loadMore, setLoadMore] = React.useState(false)
  const [hasMore, setHasMore] = React.useState(allPosts.length > perLoad)
  const loadRef = React.useRef()

  // Handle intersection with load more div
  const handleObserver = entities => {
    const target = entities[0]
    if (target.isIntersecting) {
      setLoadMore(true)
    }
  }

  // Initialize the intersection observer API
  React.useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(handleObserver, options)

    if (loadRef.current) {
      observer.observe(loadRef.current)
    }
  }, [])

  // Handle loading more articles
  React.useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = posts.length
      const isMore = currentLength < allPosts.length
      const nextResults = isMore
        ? allPosts.slice(currentLength, currentLength + perLoad)
        : []

      setPosts([...posts, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  // Check if there is more
  React.useEffect(() => {
    const isMore = posts.length < allPosts.length
    setHasMore(isMore)
  }, [posts]) //eslint-disable-line

  return (
    <Layout location={location}>
      <Seo
        title="Blog"
        description="Blog"
        url={location.href}
        image={thumbnail}
      />

      <Container className="pt-28 lg:pt-48">
        <h1 className="mb-8 lg:mb-12 text-center lg:text-left">Blog</h1>

        <Grid md={2} lg={3}>
          {posts.map((item, index) => {
            return (
              <CardPost
                key={index}
                title={item.node.frontmatter.title}
                date={item.node.frontmatter.date}
                excerpt={item.node.excerpt}
                to={item.node.slug}
                img={
                  item.node.frontmatter.thumbnail?.childImageSharp
                    .gatsbyImageData
                }
              />
            )
          })}
        </Grid>

        <div ref={loadRef} className="text-center pt-12">
          <BeatLoader color="white" loading={hasMore} size={20} />
        </div>
      </Container>
    </Layout>
  )
}

BlogPage.defaultProps = {
  perLoad: 12,
}

export default BlogPage
