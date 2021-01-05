import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import FAQAccordion, { FAQ } from "../components/faq-accordion"
import InnerTitle from "../components/inner-title.js"
import Hero from "../components/Hero"
import RequestDemoFooter from "../components/request-demo-footer"

import checkmark from "../img/checked.svg"

import "../styles/plans.scss"
import PageStyles from "./plans.module.scss"
import RowStyles from "../components/Row.module.scss"

const heroConfig = {
  pageType: "plans",
  strapline: "Our Plans",
  title: [
    <span>Solution To Your</span>,
    " Online Marketing ",
    <span>Needs</span>,
  ],
  content:
    "From new patient acquisition to retention, Doctor Genius has you covered.",
}

const Plans = data => {
  return (
    <div className={PageStyles.plansPage + " " + RowStyles.rowStyling}>
      <DefaultPageLayout location="plans">
        <Helmet>
          <title>
            Healthcare Marketing Plans | New Patient Acquisition Strategy
          </title>
          <meta
            name="description"
            content="Is your current website and marketing underperforming? Curious about a strong performance driven marketing platform? Review our extensive lineup of plans for your practice."
          />
        </Helmet>
        <div className="plans">
          <BackgroundImage fluid={data.data.heroBg.childImageSharp.fluid}>
            <Hero
              pageType={heroConfig.pageType}
              strapline={heroConfig.strapline}
              title={heroConfig.title}
              content={heroConfig.content}
            />
          </BackgroundImage>
          <Main>
            <Container>
              <div
                className={
                  RowStyles.row + " " + RowStyles.padded + " sm-pad-none"
                }
              >
                <div className="col-sm-12 sm-pad-none">
                  <div className={PageStyles.plansTable + " plans-table"}>
                    {/* <!-- image-row --> */}
                    <div
                      className={
                        PageStyles.imageRow +
                        " " +
                        PageStyles.gridItem +
                        " grid-item image-row"
                      }
                    >
                      <div
                        className={
                          PageStyles.backgroundHolder + " background-holder"
                        }
                      />
                      <p>DoctorGenius Tier Package</p>
                    </div>
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.columnSignup +
                        " grid-item column-signup"
                      }
                    >
                      <h2>Silver</h2>
                      {/*<p className="column-signup-body">
                      Lorem Ipsum is simply dummy text of the printing and type.
                    </p>*/}
                      <a
                        href="/demo"
                        className={PageStyles.button + " " + PageStyles.rounder}
                      >
                        Sign Up
                      </a>
                      {/*<a href="/intentional-404/learn-more" className={PageStyles.subtleLink}>
                      Learn More
                    </a>*/}
                    </div>
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.columnSignup +
                        " grid-item column-signup"
                      }
                    >
                      <span className={PageStyles.recommended}>
                        Recommended
                      </span>
                      <h2>Gold</h2>
                      {/*<p className="column-signup-body">
                      Lorem Ipsum is simply dummy text of the printing and type.
                    </p>*/}
                      <a
                        href="/demo"
                        className={PageStyles.button + " " + PageStyles.rounder}
                      >
                        Sign Up
                      </a>
                      {/*<a href="/intentional-404/learn-more" className={PageStyles.subtleLink}>
                      Learn More
                    </a>*/}
                    </div>
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.columnSignup +
                        " grid-item column-signup"
                      }
                    >
                      <h2>Platinum</h2>
                      {/*<p className="column-signup-body">
                      Lorem Ipsum is simply dummy text of the printing and type.
                    </p>*/}
                      <a
                        href="/demo"
                        className={PageStyles.button + " " + PageStyles.rounder}
                      >
                        Sign Up
                      </a>
                      {/*<a href="/intentional-404/learn-more" className={PageStyles.subtleLink}>
                      Learn More
                    </a>*/}
                    </div>
                    {/* <!-- /header-row --> */}

                    {/* <!-- details section 1: --> */}
                    <dt
                      className={
                        PageStyles.spacerRow + " justify-content-start"
                      }
                    >
                      <div
                        className={
                          PageStyles.plansRowTitle + " plans-row-title"
                        }
                      >
                        Genius Framework Website
                      </div>
                    </dt>
                    {/* <!-- details section 1 row 1: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      High Performance Website
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    {/* <!-- details section 1 row 2: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      SEO Focused Domain Name (Optional)
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    {/* <!-- details section 1 row 3: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Secure Reliable Hosting
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    {/* <!-- details section 1 row 4: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Migrated/Scraped Pages
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      10 Pages
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      20 Pages
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      50 Pages
                    </div>
                    {/* <!-- details section 1 row 5: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Website Revisions
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      1 Round
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      3 Rounds
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      4 Rounds
                    </div>

                    {/* <!-- details section 2: --> */}
                    <dt
                      className={
                        PageStyles.spacerRow + " justify-content-start"
                      }
                    >
                      <div
                        className={
                          PageStyles.plansRowTitle + " plans-row-title"
                        }
                      >
                        Strategic Content Writing
                      </div>
                    </dt>
                    {/* <!-- details section 2 row 1: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Targeted Organic Keywords
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      25 Keywords
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      35 Keywords
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      55 Keywords
                    </div>
                    {/* <!-- details section 2 row 2: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Industry Related Service Page Content
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    {/* <!-- details section 2 row 3: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Doctor & Staff Page
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    {/* <!-- details section 2 row 4: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Call to Action Home Page Slides
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      3 CTA Slides
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      6 CTA Slides
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      8 CTA Slides
                    </div>

                    {/* <!-- details section 3: --> */}
                    <dt
                      className={
                        PageStyles.spacerRow + " justify-content-start"
                      }
                    >
                      <div
                        className={
                          PageStyles.plansRowTitle + " plans-row-title"
                        }
                      >
                        Search Engine Optimization
                      </div>
                    </dt>
                    {/* <!-- details section 3 row 1: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      On-Site Optimization
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    {/* <!-- details section 3 row 2: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Structured Data Markup
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    {/* <!-- details section 3 row 3: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Monthly review from an SEO Analyst
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>

                    {/* <!-- details section 3: --> */}
                    <dt
                      className={
                        PageStyles.spacerRow + " justify-content-start"
                      }
                    >
                      <div
                        className={
                          PageStyles.plansRowTitle + " plans-row-title"
                        }
                      >
                        Integrated Performance Reporting
                      </div>
                    </dt>
                    {/* <!-- details section 3 row 1: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Google Analytics Integration
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    {/* <!-- details section 3 row 2: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Google Ranking Reporting
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    {/* <!-- details section 3 row 3: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Ranking Report Monthly Email
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    {/* <!-- details section 3 row 4: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      New Patient Inquiry Reporting
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    {/* <!-- details section 3 row 5: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Call & Web Submissions Tracking
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    {/* <!-- details section 3 row 6: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Google Analyst Integration
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    {/* <!-- details section 3 row 7: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Appointment Request Integration
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>

                    {/* <!-- details section 4: --> */}
                    <dt
                      className={
                        PageStyles.spacerRow + " justify-content-start"
                      }
                    >
                      <div
                        className={
                          PageStyles.plansRowTitle + " plans-row-title"
                        }
                      >
                        Social Media Promotion
                      </div>
                    </dt>
                    {/* <!-- details section 4 row 1: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Practice Promoter
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    {/* <!-- details section 4 row 2: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Blog Posts
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      1 Post/Mo
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      2 Posts/Mo
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      3 Posts/Mo
                    </div>
                    {/* <!-- details section 4 row 3: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Social Media Syndication
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    {/* <!-- details section 4 row 4: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Social Media Branding
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    {/* <!-- details section 4 row 5: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Directory Submissions
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    {/* <!-- details section 4 row 6: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Duplicate Suppression
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    {/* <!-- details section 4 row 7: 
                    <dt
                      className={
                        PageStyles.spacerRow + " justify-content-start"
                      }
                    >
                      <div
                        className={
                          PageStyles.plansRowTitle + " plans-row-title"
                        }
                      >
                        Paid Advertising Campaigns
                      </div>
                    </dt>
                    --> */}
                    {/* <!-- details section 4 row 8:
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Google Search Display Banner Advertising
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"} />
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                     --> */}
                    {/* <!-- details section 4 row 9:
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Google Re‐Marketing Advertising
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"} />
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                     --> */}
                    {/* <!-- details section 4 row 10: 
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Landing Pages on Sub Domains
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"} />
                    <div className={PageStyles.gridItem + " grid-item"}>
                      2 Landing Pages
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      4 Landing Pages
                    </div>
                    --> */}
                    {/* <!-- details section 5: --> */}
                    <dt
                      className={
                        PageStyles.spacerRow + " justify-content-start"
                      }
                    >
                      <div
                        className={
                          PageStyles.plansRowTitle + " plans-row-title"
                        }
                      >
                        Traditional Marketing
                      </div>
                    </dt>
                    {/* <!-- details section 5 row 1: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Logo Creation or Enhancement
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"} />
                    <div className={PageStyles.gridItem + " grid-item"} />
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    {/* <!-- details section 5 row 2: -->
                  <div className={PageStyles.gridItem + " grid-item plans-row-title"}>
                    2k Branded Business Cards
                  </div>
                  <div className={PageStyles.gridItem + " grid-item"} />
                  <div className={PageStyles.gridItem + " grid-item"} />
                  <div className={PageStyles.gridItem + " grid-item"}>
                    <img src={checkmark} alt="checkmark" />
                  </div>
                  */}
                    {/* <!-- details section 6: --> */}
                    <dt
                      className={
                        PageStyles.spacerRow + " justify-content-start"
                      }
                    >
                      <div
                        className={
                          PageStyles.plansRowTitle + " plans-row-title"
                        }
                      >
                        Call Tracking
                      </div>
                    </dt>
                    {/* <!-- details section 6 row 1: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Call Tracking Phone Number
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    {/* <!-- details section 6 row 2: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Call Tracking Web Integration
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>

                    {/* <!-- details section 7: --> */}
                    <dt
                      className={
                        PageStyles.spacerRow + " justify-content-start"
                      }
                    >
                      <div
                        className={
                          PageStyles.plansRowTitle + " plans-row-title"
                        }
                      >
                        Customer Support
                      </div>
                    </dt>
                    {/* <!-- details section 7 row 1: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle +
                        " grid-item plans-row-title"
                      }
                    >
                      Dedicated Support Representative
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem + " grid-item"}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                  </div>
                  <div
                    className={
                      PageStyles.plansTable +
                      " " +
                      PageStyles.noBg +
                      " plans-table no-bg"
                    }
                  >
                    {/* <!-- cta section: --> */}
                    <div className={PageStyles.gridItem + " grid-item"} />
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.columnSignup +
                        " grid-item column-signup"
                      }
                    >
                      <a
                        href="/demo"
                        className={PageStyles.button + " " + PageStyles.rounder}
                      >
                        Sign Up
                      </a>
                      {/*<a href="/intentional-404/learn-more" className={PageStyles.subtleLink}>
                      Learn More
                    </a>*/}
                    </div>
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.columnSignup +
                        " grid-item column-signup"
                      }
                    >
                      <a
                        href="/demo"
                        className={PageStyles.button + " " + PageStyles.rounder}
                      >
                        Sign Up
                      </a>
                      {/*<a href="/intentional-404/learn-more" className={PageStyles.subtleLink}>
                      Learn More
                    </a>*/}
                    </div>
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.columnSignup +
                        " grid-item column-signup"
                      }
                    >
                      <a
                        href="/demo"
                        className={PageStyles.button + " " + PageStyles.rounder}
                      >
                        Sign Up
                      </a>
                      {/*<a href="/intentional-404/learn-more" className={PageStyles.subtleLink}>
                      Learn More
                    </a>*/}
                    </div>
                  </div>
                </div>
              </div>
              <div className={RowStyles.row + " " + RowStyles.padded}>
                <div className="col-sm-6 col-md-10">
                  <InnerTitle title="Commonly Asked Questions" centered />
                </div>
              </div>
              <div
                className={
                  RowStyles.row + " " + RowStyles.padded + " sm-pad-none"
                }
              >
                <div className="col-sm-12 col-md-10">
                  <div className="faq-table lg-pad">
                    <FAQAccordion>
                      <FAQ
                        question={<p>Is there a long term agreement?</p>}
                        answer={
                          <p>
                            No, our program is month to month. We believe that
                            if we provide you with the most comprehensive
                            marketing program to help grow your practice, then
                            you will not want to cancel the services.
                          </p>
                        }
                      />
                      <FAQ
                        question={
                          <p>
                            Why is a call tracking necessary for you online
                            marketing package?
                          </p>
                        }
                        answer={
                          <p>
                            Rankings are a Poor Metric for Overall Performance;
                            rankings do not equal traffic. A great SEO campaign
                            needs to be measured by the increase in search
                            engine traffic and new Patient inquiries. Since
                            search traffic is a sure sign that the marketing is
                            working, the metric for success should always be
                            traffic.
                          </p>
                        }
                      />
                      <FAQ
                        question={
                          <p>
                            What do you do differently than other marketing
                            companies?
                          </p>
                        }
                        answer={
                          <p>
                            For starters, we do not outsource any of our
                            services to others outside of our office. We focus
                            on in-house development and support. This allows us
                            to control and monitor all our partners to ensure
                            the best online marketing strategy is in place,
                            which will help to grow your practice.
                          </p>
                        }
                      />
                      <FAQ
                        question={
                          <p>
                            Can I work with other SEO companies alongside Doctor
                            Genius?
                          </p>
                        }
                        answer={
                          <p>
                            We do not recommend that clients do this. Typically
                            having a second SEO company involved will create
                            conflicts. Additional websites, landing pages and
                            directory listings created by the third party can
                            damage the web presence of our client. Other
                            optimizations or strategies by this third party can
                            damage our client's web presence. In extreme
                            circumstances, these third parties can even take
                            actions that will cause our client to get
                            black-listed.
                          </p>
                        }
                      />
                      <FAQ
                        question={
                          <p>What happens if I don't have a website? </p>
                        }
                        answer={
                          <p>
                            We can launch a temp mini-site until your new
                            website is ready.
                          </p>
                        }
                      />
                      <FAQ
                        question={<p>When will I start seeing results? </p>}
                        answer={
                          <p>
                            You will start to see results right away. Our
                            support and web development teams start the work to
                            help you gain ranking on Google as soon as we
                            confirm your keywords, name, address and business
                            information.
                          </p>
                        }
                      />
                      <FAQ
                        question={
                          <p>
                            Can you use my main line for the call tracking
                            number?
                          </p>
                        }
                        answer={
                          <p>
                            No, but we can use your second line. For a small
                            fee, we can port your second line and forward it to
                            your main line.
                          </p>
                        }
                      />
                      <FAQ
                        question={<p>What is the Review Promoter? </p>}
                        answer={
                          <p>
                            The Review Promoter or Practice Promoter is a
                            fully-integrated reputation management tool. The
                            Practice Promoter allows our clients to send text
                            and email messages to their patients, asking the
                            patients to leave a review of the practice. If the
                            patient selects "Yes," then the promoter directs the
                            patient to the Google and Yelp listings of the
                            practice. Patients who select "No," receive a form
                            to privately provide feedback to the client. The
                            client is the only one who will view the patient's
                            feedback on the form and not have the review appear
                            on the internet.
                          </p>
                        }
                      />
                      <FAQ
                        question={
                          <p>
                            I have domain name emails; will this affect the work
                            you are doing?
                          </p>
                        }
                        answer={
                          <p>
                            Doctor Genius does not offer email support or setup.
                            If we are transferring the domain name over to our
                            account, then we can update mail records for you (MX
                            records/TXT records).
                          </p>
                        }
                      />
                      <FAQ
                        question={
                          <p>
                            How long does it take to get started? What happens
                            in the first two months?
                          </p>
                        }
                        answer={
                          <p>
                            Upon signing up with us, you will receive an email
                            that outlines our timeline. We work on your account
                            right away, from keyword research to ordering call
                            tracking numbers.
                          </p>
                        }
                      />
                      <FAQ
                        question={
                          <p>
                            How many calls new customers or new patients should
                            I get?
                          </p>
                        }
                        answer={
                          <p>
                            Our Doctor Genius program does not limit how many
                            new patients you can get. We drive traffic to your
                            office through search engine optimization, which is
                            the process of having your site appear in
                            highly-trafficked and geo- targeted keyword
                            searches. With this process, we can display your
                            business information in the relevant local markets.
                            This process is similar to having a billboard or TV
                            commercial, except that the cost will be much less
                            and more efficiently productive.
                          </p>
                        }
                      />
                    </FAQAccordion>
                  </div>
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

export default Plans

export const ImageQuery = graphql`
  query PlansImages {
    heroBg: file(relativePath: { eq: "plans.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
