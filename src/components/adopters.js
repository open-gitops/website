import * as React from "react"
import { withPrefix } from "gatsby"
import { Container } from "./ui/grid"
import adopters from "../data/adopters.json"

// Organizations from https://github.com/open-gitops/project/blob/main/interested-parties.md
// Logos live in static/adopters/.
const Adopters = () => (
  <Container>
    <h2 className="mb-10">
      <span className="text-accent">Adopters</span>
    </h2>

    <div className="grid grid-cols-2 gap-4 p-6 bg-white rounded-2xl sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:p-10">
      {adopters.map(a => (
        <a
          key={a.name}
          href={a.site}
          target="_blank"
          rel="noopener noreferrer"
          title={a.name}
          className="flex items-center justify-center h-20 p-3 rounded-xl transition hover:bg-light/40">
          <img
            src={withPrefix(`/adopters/${a.logo}`)}
            alt={a.name}
            loading="lazy"
            className="max-h-full max-w-full object-contain"
          />
        </a>
      ))}
    </div>

    <p className="mt-6">
      Using GitOps?{" "}
      <a
        href="https://github.com/open-gitops/project/blob/main/interested-parties.md"
        className="font-bold text-accent hover:underline">
        Add your organization
      </a>
      .
    </p>
  </Container>
)

export default Adopters
