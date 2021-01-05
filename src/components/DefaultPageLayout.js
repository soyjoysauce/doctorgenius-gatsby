import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

import "../styles/_global-styles.scss"
import ComponentStyles from "./DefaultPageLayout.module.scss"

export default ({ children, location }, props) => (
  <div className={location + " content-wrapper"}>
    <Header>
      <Navigation navType={location} />
    </Header>
    {children}
    <Footer />
  </div>
)
