import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import TestimonialsSlider from "../components/testimonials-slider"
import InnerTitle from "../components/inner-title"
import Hero from "../components/Hero"

import logoBlue from "../img/icon/logo-blue.svg"
import webIcon from "../img/icon/web.svg"
import searchEngineIcon from "../img/icon/search-engine.svg"
import doctorsIcon from "../img/icon/doctors.svg"
import starsIcon from "../img/icon/stars.svg"
import rightArrowBlue from "../img/icon/right-arrow-blue.svg"

import "../styles/company-page.scss"
import PageStyles from "./company.module.scss"
import RowStyles from "../components/Row.module.scss"

const Company = data => {
  const images = data.data

  const heroConfig = {
    strapline: "Doctor Genius",
    title: [<span>What </span>, " we are about"],
    content:
      "Doctor Genius establishes and boosts your brand online using innovative digital marketing and search engine optimization strategies.",
  }

  const testimonialContent = [
    {
      cardContent: {
        title: "Card 1",
        author: "Justine Schepis",
        quote:
          "<p>I started using Doctor Genius to improve my Google presence and increase my monthly number of new patients. They told me it would take 3-4 months to see results. It’s been about 2 now that my Google presence has been cleaned up and my website is up and running and I am starting to see people come in the door who found us solely on Google.</p>",
        location: "",
        image: images.TestimonialImage1.childImageSharp.fluid.src,
        imageFallback: {
          content: "JS",
        },
      },
    },
    {
      cardContent: {
        title: "Card 2",
        author: "Amberly Money",
        quote:
          "<p>Our practice has worked with Doctor Genius for a few years now. Francesco and team have gone above and beyond to make sure that we are always top on the list for “Dentist” in our area. We started as a brand new practice in 2009 and now have a full clientele of patients with our first available hygiene appointment for six months out. Our biggest referrals are online. Thank you Francesco and Doctor Genius for your hard work and many years of working together!</p>",
        location: "",
        imageFallback: {
          content: "AM",
        },
      },
    },
    {
      cardContent: {
        title: "Card 3",
        author: "Baylee Michaels",
        quote:
          "<p>Until working with this company, you would have never heard me say that I enjoyed speaking with a customer service rep. Without fail every person I have spoken with on this team has been so kind to me. I spoke with a lady by the name of Victoria Tegeler the other day and she was so patient with me as she answered all of my questions and concerns. With this company I have never been in the dark. They send me weekly updates as well as have a portal for me to track everything that they do to see how well their services are working for us. I'd give them a 7 star rating if I could!</p>",
        location: "",
        imageFallback: {
          content: "BM",
        },
      },
    },
    {
      cardContent: {
        title: "Card 4",
        author: "Amir Saz",
        quote:
          "<p>We signed up with DG at the Anaheim Dental Convention. I had worked with 2 other companies previously and in my opinion did not get honest work or any decent results. We were a new office in the area on page 26 or 27 of Google and had moved up some but still invisible. But now we are more visible in a very competitive area in the country and starting to get some calls. I am quite happy so far. I have been working with Shawn and Kylie , two knowledgeable and fine individuals to work with. Thank you guys.</p>",
        location: "",
        imageFallback: {
          content: "AS",
        },
      },
    },
  ]

  return (
    <div className={PageStyles.companyPage + " " + RowStyles.rowStyling}>
      <DefaultPageLayout location="company">
        <Helmet>
          <title>
            Lake Forest, CA Digital Marketing Agency | About Doctor Genius
          </title>
          <meta
            name="description"
            content="Doctor Genius is a Lake Forest, California based digital marketing agency providing local businesses with branding, websites, content marketing, and social media marketing service."
          />
        </Helmet>
        <div className="company">
          <BackgroundImage fluid={images.heroBg.childImageSharp.fluid}>
            <Hero
              pageType="company"
              strapline={heroConfig.strapline}
              title={heroConfig.title}
              content={heroConfig.content}
            />
          </BackgroundImage>
          <Main>
            <Container>
              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.tallTop
                }
              >
                <div className="col-sm-10 offset-md-0 col-md-6">
                  <div className="content-block">
                    <InnerTitle
                      title="The Doctor Genius"
                      boldText=" Story"
                      inContentBlock
                      smallText
                    />
                    <div className="accented-paragraph">
                      <p>
                        We are based in Lake Forest, California, USA. Doctor
                        Genius has consistent 5-star Ratings on Google+, and A
                        Rated with the BBB. We employ and all-star development,
                        support, and sales team to provide high-level online
                        marketing solutions to medical & health practices within
                        the United States.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 center logo">
                  <img src={logoBlue} alt="Our Logo" />
                </div>
              </div>

              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  PageStyles.panelRow
                }
              >
                <div className="col-sm-12">
                  <InnerTitle
                    centered
                    title="Doctor Genius "
                    underlined
                    boldText="by the numbers"
                  />
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className={PageStyles.panel}>
                    <div className={PageStyles.iconWrapper}>
                      <img
                        className={PageStyles.imgIcon}
                        src={webIcon}
                        alt="Icon of a Website"
                      />
                    </div>
                    <p className={PageStyles.panelHeading}>1 million +</p>
                    <p className={PageStyles.panelBody}>
                      Words published to our clients’ website blogs and social
                      profiles
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className={PageStyles.panel}>
                    <div className={PageStyles.iconWrapper}>
                      <img
                        className={PageStyles.imgIcon}
                        src={searchEngineIcon}
                        alt="Icon of a Search Engine Page"
                      />
                    </div>
                    <p className={PageStyles.panelHeading}>1000+</p>
                    <p className={PageStyles.panelBody}>
                      Over 1000+ Dental Practices use Doctor Genius Web & SEO
                      services
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className={PageStyles.panel}>
                    <div className={PageStyles.iconWrapper}>
                      <img
                        className={PageStyles.imgIcon}
                        src={doctorsIcon}
                        alt="Icon of a Group of Doctors"
                      />
                    </div>
                    <p className={PageStyles.panelHeading}>70 +</p>
                    <p className={PageStyles.panelBody}>
                      In-House Support, Development, and Writers work for Doctor
                      Genius
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className={PageStyles.panel}>
                    <div className={PageStyles.iconWrapper}>
                      <img
                        className={PageStyles.imgIcon}
                        src={starsIcon}
                        alt="Icon of Stars"
                      />
                    </div>
                    <p className={PageStyles.panelHeading}>4.9 Stars</p>
                    <p className={PageStyles.panelBody}>
                      We take pride in our google reviews. Read our{" "}
                      <a
                        href="https://www.google.com/search?q=doctorgenius&rlz=1C1GCEA_enUS780US780&oq=doctorgenius&aqs=chrome..69i57j69i60l3.1719j0j1&sourceid=chrome&ie=UTF-8#lrd=0x80dcde9f23745717:0x9660a06c68c4bd1,1,,,"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        google reviews.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.tallBottom
                }
              >
                <div className="col-sm-12 col-md-6">
                  <Img
                    fluid={images.searchResultsPage.childImageSharp.fluid}
                    className={PageStyles.imgResponsive}
                    alt="Local Business Search Results Page"
                  />
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className={PageStyles.callout}>
                    <InnerTitle
                      centered
                      title="Our "
                      underlined
                      boldText="Clients Average"
                    />
                    <div className={PageStyles.center}>
                      <div className={PageStyles.calloutHeading}>
                        <sup>
                          Up
                          <br />
                          To
                        </sup>
                        <p>600%</p>
                      </div>
                      <p className={PageStyles.textAccent}>
                        New Patient Inquiries
                      </p>
                      <p className={PageStyles.subTextAccent}>
                        12 Months Duration
                      </p>
                      <div className={PageStyles.calloutLink}>
                        <a
                          href="/our-clients"
                          className={
                            PageStyles.fontWeightSemibold +
                            " " +
                            PageStyles.linkWithIcon
                          }
                        >
                          <img
                            src={rightArrowBlue}
                            className={PageStyles.linkIcon}
                            alt="Icon of a Right Arrow"
                          />
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortBottom
                }
              >
                <div className="col-sm-12">
                  <InnerTitle
                    centered
                    strapline="Testimonials"
                    title="What "
                    underlined
                    boldText="Clients Are Saying"
                  />
                </div>
                <div className="col-sm-12">
                  <div className="full-bleed-wrapper">
                    <div className="full-bleed">
                      <div className="full-bleed-slider">
                        <TestimonialsSlider cards={testimonialContent} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.tallTop +
                  " " +
                  PageStyles.letsTalkPartnership +
                  " lets-talk-partnership"
                }
              >
                <div className="col-sm-10 offset-md-0 col-md-6 order-sm-2 order-md-1">
                  <div className="content-block">
                    <InnerTitle
                      title="Let's "
                      boldText="Talk Partnership"
                      inContentBlock
                    />
                    <div>
                      <div
                        className={
                          PageStyles.accentedParagraph + " accented-paragraph"
                        }
                      >
                        <p>
                          We are based in Lake Forest, California, USA. Doctor
                          Genius has consistent 5-star Ratings on Google+, and A
                          Rated with the BBB. We employ and all-star
                          development, support, and sales team to provide high
                          level online marketing solutions to medical & health
                          practices within the United States.
                        </p>
                        <a
                          href="/demo"
                          className={
                            PageStyles.fontWeightSemibold +
                            " " +
                            PageStyles.linkWithIcon
                          }
                        >
                          <img
                            src={rightArrowBlue}
                            className={PageStyles.linkIcon}
                            alt="Icon of a Right Arrow"
                          />
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-10 offset-sm-1 offset-md-0 col-md-6 order-sm-1 order-md-2">
                  <Img
                    fluid={
                      images.digitalMarketingPartnerShip.childImageSharp.fluid
                    }
                    alt="Digital Marketing Partnership"
                    className={PageStyles.imgResponsive}
                  />
                </div>
              </div>
            </Container>
          </Main>
        </div>
      </DefaultPageLayout>
    </div>
  )
}

export default Company

export const ImageQuery = graphql`
  query companyImages {
    TestimonialImage1: file(
      relativePath: { eq: "doctor-genius-testimonial.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    searchResultsPage: file(
      relativePath: { eq: "local-business-search-result.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    digitalMarketingPartnerShip: file(
      relativePath: { eq: "digital-marketing-partnership.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heroBg: file(relativePath: { eq: "about-us-hero.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
