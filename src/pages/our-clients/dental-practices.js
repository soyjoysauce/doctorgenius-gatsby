import React from "react"
import { graphql } from "gatsby"

import OurClientsInnerPages from "../../templates/our-clients-inner-pages"

const DentalPracticeInnerPage = data => {
  const images = data.data
  return (
    <OurClientsInnerPages
      page="dental-practices" /* this should be dynamic from the page props */
      pageTitle="Dental Practices"
      pageSubTitle={[
        <span>Engage and Convert More</span>,
        " Patients To Your Practice",
      ]}
      pageIntro="Doctor Genius provides digital marketing solutions by leveraging content, mobile-first web design, SEO, online directories, and social media to drive new patients to your private practice"
      caseStudy={true}
      caseStudyImage={images.SearchResultsPageImage.childImageSharp.fluid}
      metaTitle="Dental Patient Engagement, Acquisition, Retention | Predictable Practice Growth Solution"
      metaDescription="Is your current website and marketing underperforming? Curious about a strong performance driven marketing platform? Start getting the new patients your dental practice deserves."
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
            "<p>To stand out among the masses on Google search results, professionals need a quality service that continues to perform maintenance and updates on their website. Doctor Genius does both of these things and more, applying our technical skills and necessary tools to the foundation of a website. At Doctor Genius, we build a website with the potential patient’s focus in mind. We know where to place the correct terms, information and content people want immediately.</p><p>Our team understands that when people are considering calling a medical practice, they are searching for the surface level of information. After finding the basic information, patients may begin to look at the rest of the website to find quality content that breaks down the practice’s services. While each patient is different, there tends to be a similar search routine for medical care. Insurance also plays a significant role in selecting a medical practice. We can help the professional determine how much or little about the subject they want to place on their website.</p>",
        },
        contentSplitScreen: {
          // Figure out how to implement once we know the layout
        },
        testimonialContent: [
          {
            cardContent: {
              title: "Card 1",
              author: "Amberly Money",
              quote:
                "<p>Our practice has worked with Doctor Genius for a few years now. Francesco and team have gone above and beyond to make sure that we are always top on the list for dentist in our area. We started as a brand new practice in 2009 and now have a full clientele of patients with our first available hygiene appointment for six months out. Our biggest referrals are online. Thank you Francesco and Doctor Genius for your hard work and many years of working together!</p>",
              location: "",
              imageFallback: {
                content: "AM",
              },
            },
          },
          {
            cardContent: {
              title: "Card 2",
              author: "Tod Anderson",
              quote:
                "<p>Coming from a Tech background before dental school, I have been searching for a good way to manage my dental web presence, including social media, and reputation. I have tried multiple things over the last 10 years, Yelp (was the worst!), Yext, Custom built website with local web developer, Prosites, to name a few and have redone my dental office web site 4 times in 10 years with little success.</p><p>When I talked to Doctor Genius I knew right away this was the technology and service I needed to market my dental practice and manage this presence. I signed up immediately.</p><p>As a techy dentist I can tell you dentists are too busy and usually the office team can't possible manage the complexities of web marketing with the ever changing google algorithms and with the 100's of other websites that track dentists and doctors.</p><p>I am thrilled with the results and am excited to see Doctor Genius grow!</p>",
              location: "",
              image: images.TestimonialImage2.childImageSharp.fluid.src,
            },
          },
          {
            cardContent: {
              title: "Card 3",
              author: "Nancy Lee DDS",
              quote:
                "<p>Working with Dental Genius has been great. They helped us create a new website for our office and continuously create blogs for updated content.  They have improved our office's online visibility.  The Dental Genius portal is a great tool not only to keep track on how many new patient phone calls we receive, but also to keep track on our online presence.</p>",
              location: "",
              image: images.TestimonialImage3.childImageSharp.fluid.src,
            },
          },
        ],
      }}
    />
  )
}

export default DentalPracticeInnerPage

export const ImageQuery = graphql`
  query DentalPracticeImages {
    backgroundImage: file(relativePath: { eq: "our-clients.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2201, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TestimonialImage2: file(relativePath: { eq: "dental-testimonial-1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TestimonialImage3: file(relativePath: { eq: "dental-testimonial-2.png" }) {
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
