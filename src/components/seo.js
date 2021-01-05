import React from "react"
//import innerTitleStyles from "./inner-title.module.css"
import HomepageSEOContent from "../seo/homepage-seo.js"

//export default ({ page }) => (page === "homepage" ? HomepageSEOContent : null)
export default ({ page }) =>
  page === "homepage"
    ? HomepageSEOContent.map(script => (
        <script
          type="application/ld+json"
          key={script.toString()}
          dangerouslySetInnerHTML={{
            __html: script,
          }}
        />
      ))
    : null
