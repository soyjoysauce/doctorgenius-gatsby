import React from "react"
import { graphql } from "gatsby"

import OurClientsInnerPages from "../../templates/our-clients-inner-pages"

const HealthcareMarketingInnerPage = data => {
  const images = data.data
  return (
    <OurClientsInnerPages
      page="healthcare-marketing" /* this should be dynamic from the page props */
      pageTitle="Healthcare Marketing"
      pageSubTitle={[<span>Modern Healthcare Technology</span>, " Solutions"]}
      pageIntro="Doctor Genius provides digital marketing solutions by leveraging content, mobile-first web design, SEO, online directories, and social media to drive new patients to your private practice"
      caseStudy={true}
      caseStudyImage={images.SearchResultsPageImage.childImageSharp.fluid}
      metaTitle="Healthcare Focused Marketing Agency | New Patient Acquisition"
      metaDescription="Is your current website and marketing underperforming? Curious about a strong performance driven marketing platform? Start getting the new patients your healthcare practice deserves."
      backgroundImage={images.backgroundImage.childImageSharp.fluid}
      fullBleedBackgroundImage={
        images.fullBleedBackgroundImage.childImageSharp.fluid.src
      }
      contentRows={{
        contentParagraphBlock: {
          heading: {
            strapline: "Marketing Performance",
            title:
              "<span>Healthcare Focused <b>Search Engine Optimization</b><span>",
          },
          paragraphBlock:
            "<p>A medical professional can acquire and build a website with all of the necessary information, forms and contact abilities to help bring in more patients. In the beginning, things seem to work out and the website attracts more patients. Over time, less and less new patients contact the practice. Looking online, the professional finds that the website is broken on certain pages and does not appear in the first few pages of most Google searches. This professional needs a company like Doctor Genius to provide constant maintenance for any issues.</p><p>We also continue to help monitor other mechanisms within the website and ensure that they are running properly. One of the main functions of a website is to bring in new patients. While a website can offer patients a system for scheduling an appointment online, many offer an office phone number for the patient to contact the practice. However, a call tracking system can help keep track of what is working and what is not.</p><p> To begin the process of increasing the success and presence of your practice, give us a call at <a href='tel:877-477-2311'>877-477-2311</a>.</p>",
        },
        contentSplitScreen: {
          // Figure out how to implement once we know the layout
        },
        testimonialContent: [
          {
            cardContent: {
              title: "Card 1",
              author: "Don DuBose M.D.",
              quote:
                "<p>I was somewhat skeptical of Doctor Genius because I had been burned by other companies before. Its not easy to find reliable companies these days but Doctor Genius has been exemplary. Within 5 months my google rankings significantly increased. We are first page on most of our search terms. We have also seen an increase in our conversions from web traffic to actual appointments. Customer service is generally responsive,  I have had some delays in website adjustments, but that was partially my fault for not giving clear directions. Since then the turn around time has on adjustments have been very fast. I highly recommend Doctor Genius they have created a good return on investment(ROI) for us.</p>",
              location: "",
              image: images.TestimonialImage1.childImageSharp.fluid.src,
            },
          },
          {
            cardContent: {
              title: "Card 2",
              author: "Roberto Bellegarrigue",
              quote:
                "<p>Been working with them for 2 years now. My web visibility has increased and my new patients have doubled as a result. They're always available to talk if you have any issues or questions. Two thumbs up!! Just ask for Francesco, he's my account manager and he'll take good care of you.</p>",
              location: "",
              image: images.TestimonialImage2.childImageSharp.fluid.src,
            },
          },
          {
            cardContent: {
              title: "Card 3",
              author: "Dr James Helmy",
              quote:
                "<p>These guys have changed my online presence in a dramatic way, and more patients are finding and calling us as a result of their work.  Their team is friendly and responsive, and I'd definitely recommend them to my colleagues.</p>",
              location: "",
              imageFallback: {
                content: "JH",
              },
            },
          },
        ],
      }}
    />
  )
}

export default HealthcareMarketingInnerPage

export const ImageQuery = graphql`
  query HealthcarePracticeImages {
    backgroundImage: file(relativePath: { eq: "healthcare-marketing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2201, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TestimonialImage1: file(
      relativePath: { eq: "healthcare-testimonial.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TestimonialImage2: file(
      relativePath: { eq: "healthcare-testimonial-1.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    SearchResultsPageImage: file(
      relativePath: { eq: "local-business-search-result.png" }
    ) {
      childImageSharp {
        fluid {
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
