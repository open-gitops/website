import * as React from "react"

const YoutubeEmbed = ({ id, title }) => (
  <React.Fragment>
    {id && (
      <div className="aspect-w-16 aspect-h-9 bg-light">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title || ""}
          className="absolute top-0 left-0 h-full w-full"
        />
      </div>
    )}
  </React.Fragment>
)

export default YoutubeEmbed
