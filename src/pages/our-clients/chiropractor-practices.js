import React from "react"
import { graphql } from "gatsby"

import OurClientsInnerPages from "../../templates/our-clients-inner-pages"

const ChiropractorInnerPage = data => {
  const images = data.data
  return (
    <OurClientsInnerPages
      page="chiropractor-practices" /* this should be dynamic from the page props */
      pageTitle="Chiropractor Practices"
      pageSubTitle={[
        <span>Stretch Your Online Reach for</span>,
        " More Patients to your Practice",
      ]}
      pageIntro="Doctor Genius provides digital marketing solutions by leveraging content, mobile-first web design, SEO, online directories, and social media to drive new patients to your private practice"
      caseStudy={false}
      metaTitle="Marketing for Chiropractors | Chiropractic Website Development & Marketing"
      metaDescription="Is your current website and marketing underperforming? Curious about a strong performance driven marketing platform? Start getting the new patients your chiropractic practice deserves."
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
            "<p>One aspect of websites that many people may not realize is the importance of continually posting new content on a regular basis. While a post may not be necessary every day, it is important to have regular posts that display the website is active. Google sees this as a “freshness signal” that boosts your ranking and will be less inclined to put a website that only posted once in the last 6 months anywhere near the top of search results. Thus, custom blog posts can help to keep a website active.</p><p>We understand that while many chiropractors provide the same general services, there are specialized services that only certain professionals offer. Thus, we can help customize the content to match those specific services. Our Support Team is available to help make changes to website content in order to help it function at its full potential.</p><p>If you are interested in enhancing your website, give us a call today. We can help you and your practice upstart your chiropractic practice right with an effective and efficient website.</p>",
        },
        contentSplitScreen: {
          // Figure out how to implement once we know the layout
        },
        testimonialContent: [
          {
            cardContent: {
              title: "Card 1",
              author: "Levente Bodak-Gyovai",
              quote:
                "<p>Impressive results from this company.  We regularly receive calls from prospective patients who find us based on our SEO rankings. We have had great communication from this company with regular updates. Whenever we contact them, they are always responsive. We are planning to renew our contract for a third year so I think that says it all!</p>",
              location: "",
              imageFallback: {
                content: "LB",
              },
            },
          },
          {
            cardContent: {
              title: "Card 2",
              author: "Dr James Helmy",
              quote:
                "<p>These guys have changed my online presence in a dramatic way, and more patients are finding and calling us as a result of their work.  Their team is friendly and responsive, and I'd definitely recommend them to my colleagues.</p>",
              location: "",
              imageFallback: {
                content: "JH",
              },
            },
          },
          {
            cardContent: {
              title: "Card 3",
              author: "Mike Warren",
              quote:
                "<p>Doctor Genius is the best way to provide your business with a professional online representation. I have seen my fellow practitioner’s websites and they do not compare to what Doctor Genius can provide.</p>",
              location: "",
              imageFallback: {
                content: "MW",
              },
            },
          },
        ],
      }}
    />
  )
}

export default ChiropractorInnerPage

export const ImageQuery = graphql`
  query ChiropractorImages {
    backgroundImage: file(relativePath: { eq: "chiropractor-practices.jpg" }) {
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
