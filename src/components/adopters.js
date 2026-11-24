import * as React from "react"
import { withPrefix } from "gatsby"
import { Container } from "./ui/grid"
import Button from "./ui/button"
import Reveal from "./ui/reveal"
import adopters from "../data/adopters.json"

// Organizations from https://github.com/open-gitops/project/blob/main/interested-parties.md
// Logos live in static/adopters/. The band is brand blue in both modes and
// every logo sits on a white tile. Phones show the first few until expanded.
const mobileLimit = 12

const Adopters = () => {
  const [expanded, setExpanded] = React.useState(false)

  return (
    <Container className="flex flex-col gap-10 py-16 md:py-[88px]">
      <Reveal className="flex flex-wrap items-center justify-between gap-x-12 gap-y-5">
        <div className="flex flex-col gap-2">
          <h2
            id="adopters-title"
            className="m-0 text-[clamp(32px,3.6vw,44px)] leading-[1.12] tracking-[-0.025em]">
            Adopters
          </h2>
          <p className="text-xl font-medium">
            Using GitOps? Add your organization.
          </p>
        </div>
        <Button
          to="https://github.com/open-gitops/project/blob/main/interested-parties.md"
          label="Add your organization"
          variant="accent"
        />
      </Reveal>

      <Reveal
        as="ul"
        className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(min(150px,100%),1fr))]">
        {adopters.map((a, i) => (
          <li
            key={a.name}
            className={
              !expanded && i >= mobileLimit ? "hidden md:block" : undefined
            }>
            <a
              href={a.site}
              target="_blank"
              rel="noopener noreferrer"
              title={a.name}
              className="lift flex items-center justify-center h-[72px] px-4 py-3 rounded-[10px] bg-white">
              <img
                src={withPrefix(`/adopters/${a.logo}`)}
                alt={a.name}
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </a>
          </li>
        ))}
      </Reveal>

      {!expanded && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="self-start -mt-6 inline-flex items-center min-h-[44px] font-semibold text-dark underline underline-offset-4 md:hidden">
          Show all {adopters.length} adopters
        </button>
      )}
    </Container>
  )
}

export default Adopters
