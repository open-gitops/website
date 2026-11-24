import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import SkipToContent from "./ui/skip-to-content"

const Layout = ({ location, hero, hideHeader, hideFooter, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath}>
      <SkipToContent />

      {!hideHeader && (
        <Header
          hasBanner={
            !location.pathname.includes(
              "/blog/cdcon+gitopscon-at-open-source-summit"
            )
          }
        />
      )}

      <main id="main">
        {hero}
        {children}
      </main>

      {!hideFooter && <Footer />}
    </div>
  )
}

export default Layout
