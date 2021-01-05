import React from "react"
import { graphql } from "gatsby"

import MarketingSolutionsTemplate from "../../templates/marketing-solutions-inner"

import websiteIcon from "../../img/icon/website.svg"
import fingerprintIcon from "../../img/icon/fingerprint.svg"
import smartphoneIcon from "../../img/icon/smartphone.svg"
import speedometerIcon from "../../img/icon/speedometer.svg"
import checklistIcon from "../../img/icon/awda.svg"
import searchEngineIcon from "../../img/icon/search-engine.svg"

const OurWebsites = data => {
  const images = data.data
  return (
    <MarketingSolutionsTemplate
      page="responsive-websites" /* this should be dynamic from the page props */
      pageTitle="Responsive Websites"
      pageSubtitle={[<span>Design that leaves a lasting</span>, " impression."]}
      pageIntro="Stun your viewers with exquisitely designed websites & attractive branding. Getting appointments has never been easier."
      metaTitle="Conversion & Mobile First Healthcare Websites | Performance Driven Marketing"
      metaDescription="Start getting the new patients your medical practice deserves. Mobile first results-driven medical websites with performance digital marketing."
      backgroundImage={images.responsiveWebsites.childImageSharp.fluid}
      contentRows={[
        {
          content: {
            icon: {
              url: websiteIcon,
              alt: "websites",
              title: "Websites",
            },
            innerTitle: "Design Your Presence",
            paragraph:
              "We adopt a conversion-first, as well as a mobile-first, strategy.  Our websites are power-packed with fresh & unique content tailored to your practice and services. All sites feature high-end images, attractive call-to-actions, easy to use forms, and are ready to rank.",
          },
          image: {
            url: images.image_one.childImageSharp.fluid.src,
            alt: "Design Your Presence",
          },
        },
        {
          content: {
            icon: {
              url: fingerprintIcon,
              alt: "Brand Fingerprint",
              title: "Brand Identity",
            },
            innerTitle:
              "Your brand is the most precious component of your marketing",
            paragraph:
              "Delivering effective brand strategies that practices a major edge in competitive markets. We figure out how, what, where, when, and to whom you need to be communicating and delivering your brand messages.",
          },
          image: {
            url: images.image_two.childImageSharp.fluid.src,
            alt: "Brand Identity",
          },
        },
        {
          content: {
            icon: {
              url: smartphoneIcon,
              alt: "Mobile Device",
              title: "Mobile First",
            },
            innerTitle: "Design & developing for maximum impact",
            paragraph:
              "Personalized graphics and Call-to-Action sliders, original content, and 100% Responsive and useable on all modern devices.",
          },
          image: {
            url: images.image_three.childImageSharp.fluid.src,
            alt: "Mobile First Digital Marketing",
          },
        },
        {
          content: {
            icon: {
              url: speedometerIcon,
              alt: "A Speedometer",
              title: "Speed",
            },
            innerTitle: "Websites built to perform and rank",
            paragraph:
              "Improved site speed is an important signal Google uses in its ranking algorithm. Having a website that loads quickly on both mobile and desktop searches is key to giving your next potential patient the best experience while navigating your website.",
          },
          image: {
            url: images.image_four.childImageSharp.fluid.src,
            alt: "High-Scoring Speed Test Results for a Website",
          },
        },
        {
          content: {
            icon: {
              url: checklistIcon,
              alt: "AwDA Compliance Checkmark List",
              title: "AwDA Compliant",
            },
            innerTitle: "Accessible to everyone",
            paragraph:
              "ADA Compliancy has become increasingly important to accommodate all potential customers without hindering accountability.",
          },
          image: {
            url: images.image_five.childImageSharp.fluid.src,
            alt: "AwDA Accessible Website",
          },
        },
        {
          content: {
            icon: {
              url: searchEngineIcon,
              alt: "Online Search Engine",
              title: "Search Engine Optimization",
            },
            innerTitle: "Watch your targeted keywords soar",
            paragraph:
              "Narrow down what are your successful keywords, who is clicking on them, and which ones yield the highest number of new patient inquiries.",
          },
          image: {
            url: images.image_six.childImageSharp.fluid.src,
            alt: "Search Engine Results with Your Practice In #1",
          },
        },
      ]}
    />
  )
}

export default OurWebsites

export const ImageQuery = graphql`
  query OurWebsiteImages {
    image_one: file(relativePath: { eq: "design-your-presence.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image_two: file(relativePath: { eq: "brand-identity.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image_three: file(relativePath: { eq: "mobile-first-marketing.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image_four: file(relativePath: { eq: "high-speed-websites.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image_five: file(relativePath: { eq: "awda-compliant.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image_six: file(relativePath: { eq: "local-business-search-result.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    responsiveWebsites: file(relativePath: { eq: "responsive-websites.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
