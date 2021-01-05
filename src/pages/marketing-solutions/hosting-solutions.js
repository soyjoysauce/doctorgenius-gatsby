import React from "react"
import { graphql } from "gatsby"

import MarketingSolutionsTemplate from "../../templates/marketing-solutions-inner"

import websiteIcon from "../../img/icon/website.svg"

const HostingSolutions = data => {
  const images = data.data

  return (
    <MarketingSolutionsTemplate
      page="hosting-solutions" /* this should be dynamic from the page props */
      pageTitle="Hosting Solutions"
      pageSubtitle={[
        "Enterprise Power ",
        <span>for Medical Practice Websites</span>,
      ]}
      pageIntro="We’re always first in line when it comes to running the latest technology."
      metaTitle="Enterprise Power for Medical Practice Websites | Secure Website Hosting"
      metaDescription="Many hosting solutions do not meet our high standards of security, speed, updates, and backup. We are sticklers for the little things that radically enhance your visitors experience."
      backgroundImage={images.hostingSolutions.childImageSharp.fluid}
      contentRows={[
        {
          content: {
            icon: {
              url: websiteIcon,
              alt: "Security",
              title: "Security",
            },
            innerTitle: "Highly Available and Completely Secure",
            paragraph:
              "Nothing matters more than your practice's website reliability, so we monitor your website 24 hours a day, seven days a week.",
          },
          image: {
            url: images.image_one.childImageSharp.fluid.src,
            alt: "Hosting Solutions - Secure Sites",
          },
        },
        {
          content: {
            icon: {
              url: websiteIcon,
              alt: "HIPAA",
              title: "HIPAA",
            },
            innerTitle: "Protecting sensitive personal and health information",
            paragraph:
              "We take security seriously.  It is with utmost importance we protect health data integrity, confidentiality, and availability.",
          },
          image: {
            url: images.image_two.childImageSharp.fluid.src,
            alt: "Hosting Solutions - HIPAA Compliant",
          },
        },
      ]}
    />
  )
}

export default HostingSolutions

export const ImageQuery = graphql`
  query HostingSolutionsImages {
    image_one: file(relativePath: { eq: "hosting-solutions.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image_two: file(relativePath: { eq: "hipaa-compliant.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    hostingSolutions: file(relativePath: { eq: "hosting-solutions.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
