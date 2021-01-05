import React from "react"
import { Helmet } from "react-helmet"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import TestimonialsSlider from "../components/testimonials-slider"

import "../styles/our-clients.scss"

export default props => (
  <DefaultPageLayout location={props["*"]}>
    <Helmet>
      <title>
      Practice Website Development & Marketing | Increase Your Patient Base
      </title>
      <meta name="description" content="Is your current website and marketing underperforming? Curious about a strong performance driven marketing platform? Review our extensive lineup of plans for your practice." />
    </Helmet>
  </DefaultPageLayout>
)
