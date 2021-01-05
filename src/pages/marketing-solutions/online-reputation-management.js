import React from "react"
import { graphql } from "gatsby"

import MarketingSolutionsTemplate from "../../templates/marketing-solutions-inner"

import websiteIcon from "../../img/icon/website.svg"

const OnlineReputationManagement = data => {
  const images = data.data

  return (
    <MarketingSolutionsTemplate
      page="online-reputation" /* this should be dynamic from the page props */
      pageTitle="Online Reputation"
      pageSubtitle={["Stand out ", <span>from your</span>, " competition"]}
      pageIntro="Delivering effective brand strategies that enable you to have a major edge in competitive markets."
      metaTitle="Online Brand & Reputation Monitoring | Maintain a Positive Online Reputation"
      metaDescription="We put powerful tools in your hands to deliver effective brand strategies that enable you to have a major edge in competitive markets."
      backgroundImage={images.onlineReputationManagement.childImageSharp.fluid}
      contentRows={[
        {
          content: {
            icon: {
              url: websiteIcon,
              alt: "Digital Landscape",
              title: "Digital Landscape",
            },
            innerTitle: "Gain a network of powerful listings",
            paragraph:
              "Experience the advantage of tapping into our powerful network of publisher-level connections and build a consistent web presence for your practice.",
          },
          image: {
            url: images.image_one.childImageSharp.fluid.src,
            alt: "Gain a network of powerful listings",
          },
        },
        {
          content: {
            icon: {
              url: websiteIcon,
              alt: "Review Management",
              title: "Review Management",
            },
            innerTitle: "Maintain a Positive Online Reputation",
            paragraph:
              "9 out of 10 customers read reviews before making a purchasing decision. We combat negative search content and suppress unwanted material by promoting positive content that you control.",
          },
          image: {
            url: images.image_two.childImageSharp.fluid.src,
            alt: "Maintain a Positive Online Reputation",
          },
        },
        {
          content: {
            icon: {
              url: websiteIcon,
              alt: "Practice Promoter",
              title: "Practice Promoter",
            },
            innerTitle: "Boost your reach to the right patients",
            paragraph:
              "Get reviews from your existing patients fast with our streamlined contact process and form. We direct your patients to your social profiles in a stepped out process that gets you reviews!",
          },
          image: {
            url: images.image_three.childImageSharp.fluid.src,
            alt: "Boost your reach to the right patients",
          },
        },
      ]}
    />
  )
}

export default OnlineReputationManagement

export const ImageQuery = graphql`
  query OnlineReputationImages {
    image_one: file(relativePath: { eq: "online-reputation.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image_two: file(relativePath: { eq: "positive-online-reputation.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image_three: file(relativePath: { eq: "boost-your-reach.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    onlineReputationManagement: file(
      relativePath: { eq: "online-reputation.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
