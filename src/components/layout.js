import * as React from "react"
import Header from "./header"
import Footer from "./footer"

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
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>

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
