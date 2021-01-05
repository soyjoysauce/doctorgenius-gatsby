import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import InnerTitle from "../components/inner-title.js"
import Hero from "../components/Hero"
import RequestDemoFooter from "../components/request-demo-footer"

import rightArrowBlue from "../img/icon/right-arrow-blue.svg"

import "../styles/partnerships.scss"
import PageStyles from "./partnerships.module.scss"
import RowStyles from "../components/Row.module.scss"

const heroConfig = {
  pageType: "partnerships",
  strapline: "Partnerships",
  title: [<span>Being Partners With Us </span>, "makes it more possible"],
  content:
    "Explore opportunities to establish a value-added partnership with an organization whose central focus is success.",
}

const Partnerships = data => {
  const images = data.data
  return (
    <div className={PageStyles.partnershipsPage + " " + RowStyles.rowStyling}>
      <DefaultPageLayout location="partnerships">
        <Helmet>
          <title>
            Value Added Partnerships | Let's Talk | View our Featured Partners
          </title>
          <meta
            name="description"
            content="Learn about our partnership program that leverages our strong performance driven marketing platform with your existing customer base or technology."
          />
        </Helmet>
        <div className="partnerships">
          <BackgroundImage fluid={images.heroBg.childImageSharp.fluid}>
            <Hero
              pageType={heroConfig.pageType}
              strapline={heroConfig.strapline}
              title={heroConfig.title}
              content={heroConfig.content}
            />
          </BackgroundImage>
          <Main>
            <Container>
              <div className={RowStyles.row + " " + RowStyles.padded}>
                <div className="col-sm-12 col-md-8 col-lg-8">
                  <div className={PageStyles.contentBlock + " content-block"}>
                    <div
                      className={
                        PageStyles.thinHeading +
                        " " +
                        PageStyles.innerTitle +
                        " " +
                        PageStyles.centered
                      }
                    >
                      <h3 className={PageStyles.strapline}>Partnerships</h3>
                      <h2 className={PageStyles.underline}>
                        <span>
                          <b>Your Success is Our Goal</b> and We're Here to{" "}
                          <b>Help You Achieve It</b>
                        </span>
                      </h2>
                    </div>
                    <div
                      className={
                        PageStyles.accentedParagraph + " accented-paragraph"
                      }
                    >
                      <p>
                        By investing in Doctor Genius, you are investing in a
                        partnership with a company in the forefront of the
                        healthcare digital marketing space. In each step of the
                        way, our team of experts will take you through the
                        process and capture the goal and mission of your
                        organization. Call us or enter your contact information
                        for more details today.
                      </p>
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
                  PageStyles.panelRow +
                  " " +
                  PageStyles.featuredPartnersRow
                }
              >
                <div className="col-sm-12">
                  <div className={PageStyles.contentBlock + " content-block"}>
                    <InnerTitle title="Featured Partners" underlined centered />
                  </div>
                </div>
                <div className={RowStyles.row + " " + PageStyles.fullWidthRow}>
                  <div
                    className={
                      PageStyles.logoPartnershipItem + " col-sm-6 col-lap-3"
                    }
                  >
                    <div className={PageStyles.panel}>
                      <div className={PageStyles.iconWrapper}>
                        <img
                          className={PageStyles.imgIcon}
                          src={images.googleLogo.childImageSharp.fixed.src}
                          alt="Google Partner"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      PageStyles.logoPartnershipItem + " col-sm-6 col-lap-3"
                    }
                  >
                    <div className={PageStyles.panel}>
                      <div className={PageStyles.iconWrapper}>
                        <img
                          className={PageStyles.imgIcon}
                          src={images.pulseCheckLogo.childImageSharp.fixed.src}
                          alt="Digital Marketing Partner PulseCheck"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      PageStyles.logoPartnershipItem + " col-sm-6 col-lap-3"
                    }
                  >
                    <div className={PageStyles.panel}>
                      <div className={PageStyles.iconWrapper}>
                        <img
                          className={PageStyles.imgIcon}
                          src={images.picisLogo.childImageSharp.fixed.src}
                          alt="Digital Marketing Partner Picis"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      PageStyles.logoPartnershipItem + " col-sm-6 col-lap-3"
                    }
                  >
                    <div className={PageStyles.panel}>
                      <div className={PageStyles.iconWrapper}>
                        <img
                          className={PageStyles.imgIcon}
                          src={images.boaLogo.childImageSharp.fixed.src}
                          alt="Digital Marketing Partner Bank of America"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={RowStyles.row + " " + PageStyles.fullWidthRow}>
                  <div
                    className={
                      PageStyles.logoPartnershipItem + " col-sm-6 col-lap-3"
                    }
                  >
                    <div className={PageStyles.panel}>
                      <div className={PageStyles.iconWrapper}>
                        <img
                          className={PageStyles.imgIcon}
                          src={images.pattersonLogo.childImageSharp.fixed.src}
                          alt="Digital Marketing Partner Patterson Companies, Inc."
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      PageStyles.logoPartnershipItem + " col-sm-6 col-lap-3"
                    }
                  >
                    <div className={PageStyles.panel}>
                      <div className={PageStyles.iconWrapper}>
                        <img
                          className={PageStyles.imgIcon}
                          src={images.roiLogo.childImageSharp.fixed.src}
                          alt="Digital Marketing Partner Roi Dental Coaching"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      PageStyles.logoPartnershipItem + " col-sm-6 col-lap-3"
                    }
                  >
                    <div className={PageStyles.panel}>
                      <div className={PageStyles.iconWrapper}>
                        <img
                          className={PageStyles.imgIcon}
                          src={images.hrHealthLogo.childImageSharp.fixed.src}
                          alt="Digital Marketing Partner HR for Health"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      PageStyles.logoPartnershipItem + " col-sm-6 col-lap-3"
                    }
                  >
                    <div className={PageStyles.panel}>
                      <div className={PageStyles.iconWrapper}>
                        <img
                          className={PageStyles.imgIcon}
                          src={images.jllLogo.childImageSharp.fixed.src}
                          alt="Digital Marketing Partner JLL"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Begin Demo Footer */}
              <RequestDemoFooter
                smWidth="9"
                rowID={PageStyles.demoRow}
                buttonID={PageStyles.demoButton}
              />
              {/* End Demo Footer */}

              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.tallTop
                }
              >
                <div className="col-sm-8  order-sm-2 col-md-6 offset-md-0 order-md-1">
                  <div className={PageStyles.contentBlock + " content-block"}>
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
                          We are based in Lake Forest, California, USA. Dental
                          Genius has consistent 5-star Ratings on Google. We
                          employ an all-star development, support, and sales
                          team to provide high-level online marketing solutions
                          to medical & health practices within the United
                          States.
                        </p>
                        <a
                          href="/demo"
                          className={PageStyles.fontWeightSemibold}
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
                <div className="col-sm-10 order-sm-1 col-md-6 offset-md-0 order-md-2">
                  <Img
                    fluid={
                      images.digitalMarketingPartnershipImage.childImageSharp
                        .fluid
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

export default Partnerships

export const ImageQuery = graphql`
  query PartnershipImages {
    googleLogo: file(relativePath: { eq: "google-partner.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pulseCheckLogo: file(
      relativePath: { eq: "digital-marketing-partner-pulsecheck.png" }
    ) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    picisLogo: file(
      relativePath: { eq: "digital-marketing-partner-picis.png" }
    ) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    boaLogo: file(relativePath: { eq: "digital-marketing-partner-bofa.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pattersonLogo: file(
      relativePath: { eq: "digital-marketing-partner-patterson.png" }
    ) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    roiLogo: file(
      relativePath: { eq: "digital-marketing-partner-roi-dental.png" }
    ) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    hrHealthLogo: file(
      relativePath: { eq: "digital-marketing-partner-hrforhealth.png" }
    ) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    jllLogo: file(relativePath: { eq: "digital-marketing-partner-jll.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    digitalMarketingPartnershipImage: file(
      relativePath: { eq: "digital-marketing-partnership.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heroBg: file(relativePath: { eq: "partnerships-hero.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
