import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import InnerTitle from "../components/inner-title"
import Hero from "../components/Hero"
import RequestDemoFooter from "../components/request-demo-footer"

import PageStyles from "./case-study.module.scss"
import RowStyles from "../components/Row.module.scss"

import newPatientOppIcon from "../img/icon/new-patient-opportunity.svg"
import marketingSolutionsIcon from "../img/icon/marketing-solutions-suite.svg"
import liveSupportIcon from "../img/icon/live-support-concierge.svg"
import performanceCampaignIcon from "../img/icon/performance-driven-campaigns.svg"

const heroConfig = {
  strapline: "Case Study",
  title: [<span>Challenge </span>, " Accepted"],
  content:
    "The problem, the answer, and the outcome. Doctor Genius’ performance driven marketing platform in action.",
}

const CaseStudy = data => {
  const images = data.data
  return (
    <div className={PageStyles.caseStudyPage + " " + RowStyles.rowStyling}>
      <DefaultPageLayout location="case-study">
        <Helmet>
          <title>
            In-Depth Healthcare Marketing Case Study | New Patient Acquisition
            Strategies
          </title>
          <meta
            name="description"
            content="An in-depth case study of a performance driven marketing platform highlighting how content marketing done right impacts new patient acquisition."
          />
        </Helmet>
        <div>
          <BackgroundImage fluid={images.heroBg.childImageSharp.fluid}>
            <Hero
              pageType="caseStudy"
              strapline={heroConfig.strapline}
              title={heroConfig.title}
              content={heroConfig.content}
            />
          </BackgroundImage>
          <Main>
            <Container>
              <div className={RowStyles.row + " " + RowStyles.padded}>
                <div className="col-sm-12">
                  <InnerTitle title="The Client" underlined centered />
                </div>
              </div>
              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortTop
                }
              >
                <div
                  className={
                    PageStyles.logoBlock +
                    " col-sm-8 col-md-6 col-lap-6 col-lg-6 logo-block"
                  }
                >
                  <img
                    className={PageStyles.imgResponsive}
                    src={images.titanDentalLogo.childImageSharp.fixed.src}
                    alt="Titan Dental Care - Digital Marketing Client"
                  />
                </div>
                <div className="col-sm-12 col-md-10 col-lap-6 col-lg-6">
                  <div className="">
                    <p>
                      Dr. Rami Tahhan came to us a few years ago and was hardly
                      found anywhere on the first page of Google. The tracking
                      of any organic traffic related to online search was
                      non-existent. Online branding complete online presence had
                      much left to be desired and needed further expanding upon.
                      <br />
                      <br />
                      Bottom line, Dr Tahhan wanted a marketing plan of action
                      that would translate to results and revenue.
                    </p>
                  </div>
                  <div
                    className={
                      PageStyles.clientQuoteBlock + " client-quote-block"
                    }
                  >
                    <p className={PageStyles.clientQuote + " client-quote"}>
                      "Over the past 12 months, the office has doubled in
                      revenue due to proper marketing methods!"
                    </p>
                    <p className={PageStyles.clientAuthor + " client-author"}>
                      - Rami Tahhan, D.D.S.
                    </p>
                  </div>
                </div>
              </div>
              <div className={RowStyles.row + " " + RowStyles.padded}>
                <div className="col-sm-12">
                  <InnerTitle title="The Challenge" underlined centered />
                </div>
              </div>
              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortTop
                }
              >
                <div className="col-sm-12 col-md-10 order-2 col-lap-6 order-lap-1 col-lg-6 order-lg-1">
                  <div>
                    <p>
                      The plan was to rebuild his complete online branding with
                      a new website. Expand his full digital presence across the
                      myriad of relevant online directories. Enhance his
                      practice’s ever important social profiles. Focus on
                      customer satisfaction and increasing his positive online
                      reputation. Persistent and never-ending content publishing
                      to rise above his competitors in the online ranking
                      battle.
                      <br />
                      <br />
                      Providing all of this, as well as offering reporting and
                      metrics for full transparency on the performance of this
                      tailored marketing plan. This would allow Dr. Rami Tahhan
                      to see the success of our marketing efforts and measure a
                      true ROI.
                    </p>
                  </div>
                  <div
                    className={
                      PageStyles.clientQuoteBlock + " client-quote-block"
                    }
                  >
                    <p
                      className={
                        PageStyles.clientQuote + " client-quote s-thin"
                      }
                    >
                      "I can sleep well knowing marketing dollars are being well
                      spent."
                    </p>
                    <p className={PageStyles.clientAuthor + " client-author"}>
                      - Rami Tahhan, D.D.S.
                    </p>
                  </div>
                </div>
                <div
                  className={
                    PageStyles.imgContainer +
                    " col-sm-12 col-md-10 order-1 col-lap-6 order-lap-2 col-lg-6 order-lg-2 img-container"
                  }
                >
                  <Img
                    fluid={images.theChallengeImage.childImageSharp.fluid}
                    className={PageStyles.imgResponsive}
                    alt="Dental Office"
                  />
                </div>
              </div>

              <div className={RowStyles.row + " " + RowStyles.padded}>
                <div className="col-sm-12">
                  <InnerTitle title="The Solutions" underlined centered />
                </div>
              </div>
              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortTop
                }
              >
                <div
                  className={
                    PageStyles.OurPlansIMGContainer +
                    " col-md-12 col-lap-7 col-lg-7 our-plans-img-container"
                  }
                >
                  <img
                    className={
                      PageStyles.imgResponsive + " " + PageStyles.blurBleed
                    }
                    src={images.theSolutionsImage.childImageSharp.fixed.src}
                    alt="Acquire New Patients"
                  />
                </div>
                <div
                  className={
                    PageStyles.PanelQuadrant +
                    " col-sm-10 col-md-10 col-lap-5 col-lg-5"
                  }
                >
                  <div className={RowStyles.row}>
                    <div
                      className={
                        PageStyles.PanelQuadItem + " col-sm-12 col-md-6"
                      }
                    >
                      <div className={PageStyles.Panel}>
                        <div className={PageStyles.iconWrapper}>
                          <img
                            className={PageStyles.imgIcon}
                            src={newPatientOppIcon}
                            alt="Handshake icon"
                          />
                        </div>
                      </div>

                      <div className={PageStyles.PanelQuadTextBlock}>
                        <h4>
                          New Patient
                          <br />
                          Opportunity
                        </h4>
                        <p>
                          The goal is to reach every patient wherever they are.
                          In the 6 months we were able to increase new quality
                          patient call volume with extending with our program.
                        </p>
                      </div>
                    </div>
                    <div
                      className={
                        PageStyles.PanelQuadItem + " col-sm-12 col-md-6"
                      }
                    >
                      <div className={PageStyles.Panel}>
                        <div className={PageStyles.iconWrapper}>
                          <img
                            className={PageStyles.imgIcon}
                            src={marketingSolutionsIcon}
                            alt="Webpage icon"
                          />
                        </div>
                      </div>

                      <div className={PageStyles.PanelQuadTextBlock}>
                        <h4>
                          Marketing
                          <br />
                          Solutions Suite
                        </h4>
                        <p>
                          Our exclusive all-in-one marketing solution keeps our
                          clients digital marketing ahead of there industry. We
                          are proud to have all our product inhouse for our
                          client's needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={RowStyles.row}>
                    <div
                      className={
                        PageStyles.PanelQuadItem + " col-sm-12 col-md-6"
                      }
                    >
                      <div className={PageStyles.Panel}>
                        <div className={PageStyles.iconWrapper}>
                          <img
                            className={PageStyles.imgIcon}
                            src={liveSupportIcon}
                            alt="People chat icon"
                          />
                        </div>
                      </div>
                      <div className={PageStyles.PanelQuadTextBlock}>
                        <h4>
                          Live Support
                          <br />
                          Concierge
                        </h4>
                        <p>
                          Its our duty in making sure the client and his
                          customers are happy. We provide seamless support by
                          taking the time to understand our clients concerns in
                          areas they need help.
                        </p>
                      </div>
                    </div>
                    <div
                      className={
                        PageStyles.PanelQuadItem + " col-sm-12 col-md-6"
                      }
                    >
                      <div className={PageStyles.Panel}>
                        <div className={PageStyles.iconWrapper}>
                          <img
                            className={PageStyles.imgIcon}
                            src={performanceCampaignIcon}
                            alt="Newspaper icon"
                          />
                        </div>
                      </div>
                      <div className={PageStyles.PanelQuadTextBlock}>
                        <h4>
                          Performance Driven
                          <br />
                          Campaigns
                        </h4>
                        <p>
                          We are driven to improve our client's marketing
                          performance in all areas. Our technology has proven
                          for the first 6 months we are guaranteed our clients
                          200% new patients inquire.
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
                  RowStyles.shortTop
                }
              >
                <div className="col-sm-12">
                  <InnerTitle title="The Results" underlined centered />
                </div>
                <div
                  className={
                    PageStyles.caseStudyContainer +
                    " col-md-7 col-lap-7 col-lg-7 case-study-container"
                  }
                >
                  <InnerTitle
                    title="Case Study: Titan Dental"
                    inContentBlock
                    subtitle="The first 6 months"
                    centered
                    id={PageStyles.caseStudyHeader}
                  />

                  <div
                    className={PageStyles.caseStudyTable + " case-study-table"}
                  >
                    <div
                      className={PageStyles.caseStudyItem + " case-study-item"}
                    >
                      <p className={PageStyles.callout}>1,125%</p>
                      <p>Increase in Google First-Page Revenue</p>
                    </div>
                    <div
                      className={PageStyles.caseStudyItem + " case-study-item"}
                    >
                      <p className={PageStyles.callout}>100%</p>
                      <p>Increase in Revenue</p>
                    </div>
                    <div
                      className={PageStyles.caseStudyItem + " case-study-item"}
                    >
                      <p className={PageStyles.callout}>60%</p>
                      <p>Growth in organic Search Traffic</p>
                    </div>
                    <div
                      className={PageStyles.caseStudyItem + " case-study-item"}
                    >
                      <p className={PageStyles.callout}>500%</p>
                      <p>Growth in Reviews Across the Web</p>
                    </div>
                    <div
                      className={PageStyles.caseStudyItem + " case-study-item"}
                    >
                      <p className={PageStyles.callout}>200%</p>
                      <p>New Patient Appointments</p>
                    </div>
                    <div
                      className={PageStyles.caseStudyItem + " case-study-item"}
                    >
                      <p className={PageStyles.callout}>88%</p>
                      <p>Increase in New Patient Calls!</p>
                    </div>
                  </div>
                </div>
                <div
                  className={RowStyles.colMd5 + " col-md-5 col-lap-5 col-lg-5"}
                >
                  <Img
                    fluid={images.searchResultsPage.childImageSharp.fluid}
                    className={
                      PageStyles.imgResponsive + " " + PageStyles.blurBleedRight
                    }
                    alt="Local Business Search Results Page"
                  />
                </div>
              </div>

              <RequestDemoFooter smWidth="11" sThin />
            </Container>
          </Main>
        </div>
      </DefaultPageLayout>
    </div>
  )
}

export default CaseStudy

export const ImageQuery = graphql`
  query CaseStudyImages {
    theSolutionsImage: file(
      relativePath: { eq: "new-patient-opportunity.png" }
    ) {
      childImageSharp {
        fixed(width: 653) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    theChallengeImage: file(relativePath: { eq: "dental-marketing.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    titanDentalLogo: file(
      relativePath: { eq: "digital-marketing-client.png" }
    ) {
      childImageSharp {
        fixed(width: 317) {
          ...GatsbyImageSharpFixed_withWebp
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
    heroBg: file(relativePath: { eq: "case-study.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
