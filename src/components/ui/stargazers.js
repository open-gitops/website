import * as React from "react"
import axios from "axios"
import classNames from "classnames"
import StarIcon from "../../svg/star.svg"
import GithubIcon from "../../svg/github-outlined.svg"

const Stargazers = ({ repo, className }) => {
  const [stars, setStars] = React.useState(null)
  const [url, setUrl] = React.useState(null)

  React.useEffect(() => {
    async function getStargazers() {
      const endpoint = `https://api.github.com/repos/${repo}`

      try {
        const res = await axios.get(endpoint)
        if (200 === res.status) {
          setStars(res.data.stargazers_count)
          setUrl(res.data.html_url)
        }
      } catch (err) {
        console.error(err.message)
      }
    }

    getStargazers()
  }, [setStars, repo])

  const classes = classNames({
    "stargazers px-3 py-1 inline-block border-2 border-light bg-white rounded-lg hover:bg-night hover:border-accent hover:stroke-current": true,
    [className]: className,
  })

  const innerClass = classNames({
    "flex items-center": true,
  })

  return (
    <React.Fragment>
      {url && (
        <a
          href={url}
          aria-label="github"
          rel="noopener noreferrer"
          title="Follow us on GitHub"
          className={classes}>
          <div className={innerClass}>
            <GithubIcon className="mr-2.5 h-auto w-5" />
            <StarIcon className="mr-2 h-auto w-4 text-accent" />
            <span>{stars}</span>
          </div>
        </a>
      )}
    </React.Fragment>
  )
}

export default Stargazers
