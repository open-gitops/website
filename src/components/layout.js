import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import SkipToContent from "./ui/skip-to-content"

const Layout = ({
  location,
  hero,
  headerColor,
  hideHeader,
  hideFooter,
  children,
}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath}>
      <SkipToContent />

      {!hideHeader && <Header color={headerColor} />}

      <main>
        {hero}
        {children}
      </main>

      {!hideFooter && <Footer />}
    </div>
  )
}

export default Layout
