import React from "react"
import mainContentStyles from "./main-content.module.scss"

export default ({ children }) => (
  <div className={mainContentStyles.mainContent}>{children}</div>
)
