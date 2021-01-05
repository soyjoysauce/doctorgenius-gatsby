import React from "react"
import { graphql } from "gatsby"

import OurClientsInnerPages from "../../templates/our-clients-inner-pages"

const CosmeticSurgeonInnerPage = data => {
  const images = data.data
  return (
    <OurClientsInnerPages
      page="cosmetic-surgeons" /* this should be dynamic from the page props */
      pageTitle="Cosmetic Surgeons"
      pageSubTitle={[
        <span>Attract</span>,
        " More Patients ",
        <span>From the Internet</span>,
      ]}
      pageIntro="Doctor Genius provides digital marketing solutions by leveraging content, mobile-first web design, SEO, online directories, and social media to drive new patients to your private practice"
      caseStudy={false}
      metaTitle="Cosmetic Surgeon Website Development & Marketing | Increase Your Patient Base"
      metaDescription="Is your current website and marketing underperforming? Curious about a strong performance driven marketing platform? Start getting the new patients your practice deserves."
      backgroundImage={images.backgroundImage.childImageSharp.fluid}
      fullBleedBackgroundImage={
        images.fullBleedBackgroundImage.childImageSharp.fluid.src
      }
      contentRows={{
        contentParagraphBlock: {
          heading: {
            strapline: "Marketing Performance",
            title:
              "<span><b>Rank Higher, Gain New Patients, </b>Get Better <b>Visibility Online</b><span>",
          },
          paragraphBlock:
            "<p>While it is fairly easy for a medical practice to have a website, it is an entirely different matter when it comes to maintenance and ensuring the website looks beautiful and is functioning properly. Fortunately, the team at Doctor Genius can underscore your skills and expertise with our website framework effectively. We can also help to provide maintenance and ensure that your website is functioning properly.</p><p>It is important to have quality information on a page that breaks down a professional’s practice. However, it is also important to have a website that functions properly inattracting new patients. The call to action, CTA, is one example of a tool that helps draw patients into the service from the website. The other benefit of a CTA is that it can be more than a simple “Call Now” message.</p><p>Since setting up an effective website can take some time, do not hesitate to give us a call for more information or to schedule a consultation. Upstart your business right with our high performance, marketing and revenue acceleration program.</p>",
        },
        contentSplitScreen: {
          // Figure out how to implement once we know the layout
        },
        testimonialContent: [
          {
            cardContent: {
              title: "Card 1",
              author: "Facial Spectrum",
              quote:
                "<p>Our company has been using Dr Genius since 2015.   Their team is very efficient and is easy to communicate with.  Our on line exposure has significantly improved and our patients have a quick and easy option to communicate via our web site.  The online blogs that are approved by our Doctor are very well written and easy for the average person with out clinical knowledge to read.   What I like most are their solution based approach to any of my requests.  I would recommend Dr Genius to any business looking to improve their Google rating and web site/social media exposure.</p>",
              location: "",
              imageFallback: {
                content: "FS",
              },
            },
          },
          {
            cardContent: {
              title: "Card 2",
              author: "Carla Wostrel",
              quote:
                "<p>We have been with Dental Genius for 6 years now.  We've seen many changes to the company and they just keep getting better and better.  Our online referrals have more than doubled and our presence is the best in our area.  When it was time to update our website three months ago, we turned to them and are thrilled with the response we have received.</p>",
              location: "",
              imageFallback: {
                content: "CW",
              },
            },
          },
          {
            cardContent: {
              title: "Card 3",
              author: "Kristina Rivers",
              quote:
                "<p>Dental Genius has amazing customer service and the return-on-investment is on point! We have used their services for almost a year, and last month we received 22 new patients. The Support Team is easy to work with, they make requested changes quickly, and we have seen our website be very effective in helping us to grow our practice. Doctor Genius is G love and special sauce and we are so happy we went with them for our SEO needs!</p>",
              location: "",
              imageFallback: {
                content: "KR",
              },
            },
          },
        ],
      }}
    />
  )
}

export default CosmeticSurgeonInnerPage

export const ImageQuery = graphql`
  query CosmeticSurgeonImages {
    backgroundImage: file(relativePath: { eq: "cosmetic-surgeons.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2201, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fullBleedBackgroundImage: file(
      relativePath: { eq: "our-clients-fullbleed-image.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2201, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
