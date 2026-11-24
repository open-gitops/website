import * as React from "react"

// Set the theme before first paint: the saved choice, else the system setting.
const themeScript = `try{var t=localStorage.getItem("theme");if(t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches)document.documentElement.classList.add("dark")}catch(e){}`

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script key="theme" dangerouslySetInnerHTML={{ __html: themeScript }} />,
  ])
}
