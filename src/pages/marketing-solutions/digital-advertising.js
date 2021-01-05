import React from "react"
import { graphql } from "gatsby"

import MarketingSolutionsTemplate from "../../templates/marketing-solutions-inner"

import websiteIcon from "../../img/icon/website.svg"

const DigitalAdvertising = data => {
  const images = data.data

  return (
    <MarketingSolutionsTemplate
      page="digital-advertising" /* this should be dynamic from the page props */
      pageTitle="Digital Advertising"
      pageSubtitle={[<span>Expand your</span>, " Digital Reach"]}
      pageIntro="Sponsored Ads are a great way of drawing new patients from a variety of news sites, blogs and other niche sites across the internet."
      metaTitle="New Patient Acquisition | Digital Advertising | Healthcare Marketing Agency"
      metaDescription="Want new patients fast? Organic strategies take time. Digital advertising campaigns drives new patients quick allowing your practice to thrive."
      backgroundImage={images.digitalAdvertising.childImageSharp.fluid}
      contentRows={[
        {
          content: {
            icon: {
              url: websiteIcon,
              alt: "Hyper Local",
              title: "Hyper Local",
            },
            innerTitle: "Target ROI Focused Keywords for Google Search",
            paragraph:
              "Increase your focus and narrow down who you are targeting to a small geographic region. Hyper-Local Targeting delivers advertising content to your local audience who is more likely to be interested in your services.",
          },
          image: {
            url: images.image_one.childImageSharp.fluid.src,
            alt: "Target ROI Focused Keywords for Google Search",
          },
        },
        {
          content: {
            icon: {
              url: websiteIcon,
              alt: "Audience Optimization",
              title: "Audience Optimization",
            },
            innerTitle: "Geo-Targeted to maximize effectiveness",
            paragraph:
              "Informative conversion tracking analytics and raise practice awareness among potential patients.",
          },
          image: {
            url: images.image_two.childImageSharp.fluid.src,
            alt: "Geo-Targeting Local Business",
          },
        },
      ]}
    />
  )
}

export default DigitalAdvertising

export const ImageQuery = graphql`
  query DigitalAdvertisingImages {
    image_one: file(relativePath: { eq: "digital-advertising.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image_two: file(relativePath: { eq: "geo-targeting-local-business.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    digitalAdvertising: file(relativePath: { eq: "digital-advertising.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
