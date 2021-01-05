import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import SEO from "../components/seo.js"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import InnerTitle from "../components/inner-title.js"
import HomeHero from "../components/HomeHero"
import RequestDemoFooter from "../components/request-demo-footer"

import "../styles/homepage.scss"
import PageStyles from "./index.module.scss"
import RowStyles from "../components/Row.module.scss"

import thinArrowRight from "../img/right-arrow.svg"

export default ({ data }, props) => {
  const images = data
  return (
    <div className={PageStyles.indexPage + " " + RowStyles.rowStyling}>
      <DefaultPageLayout location={props["*"]}>
        <Helmet>
          <title>
            High Conversion Patient Acquisition Websites | Performance, Results,
            Excellence
          </title>
          <meta
            name="description"
            content="Start acquiring the new patients your healthcare practice deserves. Mobile first conversion focused medical websites combined with performance digital marketing."
          />
        </Helmet>
        <SEO page="homepage" />
        <div className={"homepage"}>
          <BackgroundImage fluid={images.heroBg.childImageSharp.fluid}>
            <HomeHero />
          </BackgroundImage>
          <Main>
            <Container>
              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  PageStyles.panelRow
                }
              >
                <div className="col-sm-10">
                  <InnerTitle
                    title="We Care About Your Success"
                    underlined
                    centered
                    strapline="Performance, Results, Excellence"
                  />
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className={PageStyles.panel}>
                    <div className={PageStyles.iconWrapper}>
                      <Img
                        fixed={images.medal.childImageSharp.fixed}
                        className={PageStyles.imgIcon}
                        alt="Increase in Google First-Page Results"
                      />
                    </div>
                    <p className={PageStyles.panelHeading}>1,125%</p>
                    <p className={PageStyles.panelBody}>
                      Increase in Google First-Page Results
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className={PageStyles.panel}>
                    <div className={PageStyles.iconWrapper}>
                      <Img
                        fixed={images.money.childImageSharp.fixed}
                        className={PageStyles.imgIcon}
                        alt="Increase in Revenue"
                      />
                    </div>
                    <p className={PageStyles.panelHeading}>100%</p>
                    <p className={PageStyles.panelBody}>Increase in Revenue!</p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className={PageStyles.panel}>
                    <div className={PageStyles.iconWrapper}>
                      <Img
                        fixed={images.groupChat.childImageSharp.fixed}
                        className={PageStyles.imgIcon}
                        alt="Increase in New Patient Calls"
                      />
                    </div>
                    <p className={PageStyles.panelHeading}>88%</p>
                    <p className={PageStyles.panelBody}>
                      Increase in New Patient Calls!
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className={PageStyles.panel}>
                    <div className={PageStyles.iconWrapper}>
                      <Img
                        fixed={images.stars.childImageSharp.fixed}
                        className={PageStyles.imgIcon}
                        alt="Icon of Stars"
                      />
                    </div>
                    <p className={PageStyles.panelHeading}>4+ Stars</p>
                    <p className={PageStyles.panelBody}>
                      We take pride in our{" "}
                      <a
                        href="https://www.google.com/search?q=doctorgenius&rlz=1C1GCEA_enUS780US780&oq=doctorgenius&aqs=chrome..69i57j69i60l3.1719j0j1&sourceid=chrome&ie=UTF-8#lrd=0x80dcde9f23745717:0x9660a06c68c4bd1,1,,,"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google reviews
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className={RowStyles.row + " " + RowStyles.padded}>
                <div className="col-sm-10">
                  <InnerTitle
                    title="All-in-One "
                    boldText="Marketing Dashboard"
                    strapline="Built for Success"
                    underlined
                    centered
                    id={PageStyles.lightTextAllInOne}
                  />
                </div>
                <div className="col-sm-11 col-md-8 col-lg-6">
                  <div className="accented-paragraph">
                    <p>
                      Our robust, comprehensive marketing solutions help keep
                      your online digital marketing presence ahead of
                      competition. We provide tools and analysis to improve new
                      patient acquisition with transparent reporting to measure
                      our results.
                    </p>
                  </div>
                </div>
              </div>
            </Container>

            <div className={RowStyles.row}>
              <div className="col-12">
                <center>
                  <img
                    className={
                      PageStyles.marketingDashboardLg +
                      " " +
                      PageStyles.imgResponsive
                    }
                    src={
                      images.homepageMarketingDashboard.childImageSharp.fixed
                        .src
                    }
                    alt="Digital Marketing Dashboard"
                  />
                  <img
                    src={
                      images.homepageMarketingDashboardMobile.childImageSharp
                        .fixed.src
                    }
                    className={
                      PageStyles.marketingDashboardSm +
                      " " +
                      PageStyles.imgResponsive
                    }
                    alt="Digital Marketing Dashboard"
                  />
                </center>
              </div>
            </div>

            <Container>
              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortTop +
                  " " +
                  RowStyles.shortBottom
                }
              >
                <div className="col-sm-12">
                  <InnerTitle
                    title="Why Choose "
                    boldText="Doctor Genius"
                    strapline="Setting the foundation for success"
                    centered
                    underlined
                    id={PageStyles.lightTextWhyChooseDG}
                  />
                </div>
                <div className="col-sm-12 col-md-6">
                  <Img
                    fluid={images.newPatientAcquisitions.childImageSharp.fluid}
                    className={PageStyles.blurBleed}
                    alt="New Patient Acquisitions"
                  />
                </div>
                <div className={RowStyles.colMd5 + " col-sm-9 col-md-5"}>
                  <div className="content-block">
                    <InnerTitle
                      title="Why is Doctor Genius # 1 in new patient acquisitions?"
                      inContentBlock
                    />
                    <div>
                      <div className="accented-paragraph">
                        <p className="s-thin">
                          When you join the Doctor Genius Family, we are now
                          partnered. We have a direct interest in the success of
                          your business.
                        </p>
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
                  RowStyles.shortTop +
                  " " +
                  RowStyles.shortBottom
                }
              >
                <div
                  className={
                    RowStyles.colMd5 +
                    " col-sm-9 col-md-5 offset-md-1 order-sm-2 order-md-1"
                  }
                >
                  <div className="content-block">
                    <InnerTitle
                      title="What makes Doctor Genius different?"
                      inContentBlock
                    />
                    <div>
                      <div className="accented-paragraph">
                        <p className="m-thin">
                          We are not a cookie-cutter type program. We are a
                          performance-based program and take pride in your
                          success.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 order-sm-1 order-md-2">
                  <Img
                    fluid={images.dgDifferent.childImageSharp.fluid}
                    className={PageStyles.blurBleed}
                    alt="What makes Doctor Genius different?"
                  />
                </div>
              </div>
              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortTop +
                  " " +
                  RowStyles.tallBottom
                }
              >
                <div className="col-sm-12 col-md-6">
                  <Img
                    fluid={images.dgClientSatisfaction.childImageSharp.fluid}
                    className={PageStyles.blurBleed}
                    alt="Client Satisfaction"
                  />
                </div>
                <div className={RowStyles.colMd5 + " col-sm-9 col-md-5"}>
                  <div className="content-block">
                    <InnerTitle
                      title="How would you rate Doctor Genius' client satisfaction?"
                      inContentBlock
                    />
                    <div>
                      <div className="accented-paragraph">
                        <p className="s-thin">
                          Don't take our word for it, see what our clients say
                          about our 100+ 5 Star Reputation. Check out our{" "}
                          <a
                            href="https://www.google.com/search?q=doctorgenius&rlz=1C1GCEA_enUS780US780&oq=doctorgenius&aqs=chrome..69i57j69i60l3.1719j0j1&sourceid=chrome&ie=UTF-8#lrd=0x80dcde9f23745717:0x9660a06c68c4bd1,1,,,"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            reviews here.
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Begin Demo Footer */}
              <RequestDemoFooter smWidth="9" />
              {/* End Demo Footer */}
            </Container>
          </Main>
        </div>
      </DefaultPageLayout>
    </div>
  )
}

export const ImageQuery = graphql`
  query HomepageImages {
    medal: file(relativePath: { eq: "google-first-page.png" }) {
      childImageSharp {
        fixed(width: 105) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    money: file(relativePath: { eq: "increase-in-revenue.png" }) {
      childImageSharp {
        fixed(width: 105) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    stars: file(relativePath: { eq: "stars.png" }) {
      childImageSharp {
        fixed(width: 105) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    groupChat: file(relativePath: { eq: "increase-in-new-patient-calls.png" }) {
      childImageSharp {
        fixed(width: 105) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    newPatientAcquisitions: file(
      relativePath: { eq: "new-patient-acquisitions.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dgDifferent: file(
      relativePath: { eq: "what-makes-doctorgenius-different.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dgClientSatisfaction: file(
      relativePath: { eq: "client-satisfaction.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    homepageMarketingDashboard: file(
      relativePath: { eq: "marketing-dashboard.jpg" }
    ) {
      childImageSharp {
        fixed(width: 1287, quality: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    homepageMarketingDashboardMobile: file(
      relativePath: { eq: "marketing-dashboard-mobile.jpg" }
    ) {
      childImageSharp {
        fixed(width: 375) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    heroBg: file(relativePath: { eq: "homepage-option-1.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// export const pageQuery = graphql`
// query {
//     allWordpressPage {
//       edges {
//         node {
//           id
//           title
//           excerpt
//           slug
//           date(formatString: "MMMM DD, YYYY")
//         }
//       }
//     }
//   }
//   `
